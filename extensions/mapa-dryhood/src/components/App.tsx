import React, { useState, useEffect, useRef, useCallback } from 'react'
import {
  APIProvider,
  Map,
  AdvancedMarker,
  ControlPosition,
  InfoWindow,
  useAdvancedMarkerRef,
  useMapsLibrary,
  MapControl,
  Marker,
  useMap
} from '@vis.gl/react-google-maps'
import { LoadingSpinner } from './LoadingSpinner'
import MapHandler from './MapHandler'
import { Autocomplete } from './Autocomplete'
import '../main.css'

const API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY || process.env.VITE_GOOGLE_MAPS_API_KEY
const MAP_ID = import.meta.env.VITE_GOOGLE_MAPS_MAP_ID || process.env.VITE_GOOGLE_MAPS_MAP_ID

console.log('API_KEY', API_KEY)
console.log('MAP_ID', MAP_ID)

// Add validation
if (!API_KEY) {
  console.error('VITE_GOOGLE_MAPS_API_KEY is not defined in environment variables')
}

if (!MAP_ID) {
  console.error('VITE_GOOGLE_MAPS_MAP_ID is not defined in environment variables')
}

type Playa = {
  name: string
  coordinates: {
    lat: number
    lng: number
  }
  slug?: string
}

type Poi = {
  name: string
  slug: string
  // comuna: string
  // region: string
  position: google.maps.LatLngLiteral
}
interface Coord {
  lat: number
  lng: number
}

const App = () => {
  //const [playas, setPlayas] = useState<Playa[]>([])

  const [initialPosition, setInitialPosition] = useState<Coord>({
    lat: -32.9827515,
    lng: -71.5341035
  }) // Ubicación predeterminada

  const [location, setLocation] = useState<string | null>(null)

  const itemRefs = useRef<(HTMLDivElement | null)[]>([])

  const [selectedPlace, setSelectedPlace] = useState<google.maps.places.PlaceResult | null>(null)

  const [activeIndex, setActiveIndex] = useState<number | null>(null) // Estado para el elemento activo

  const [points, setPoints] = useState<Poi[]>([])
  const [filteredPoints, setFilteredPoints] = useState<Poi[]>([]) // Estado para los puntos filtrados
  const [loading, setLoading] = useState<boolean>(false)

  useEffect(() => {
    itemRefs.current = itemRefs.current.slice(0, points.length)
  }, [points.length])

  useEffect(() => {
    const rootEl = document.getElementById('root')
    const rawData = rootEl?.getAttribute('data-playas')
    try {
      setLoading(true)
      if (rawData) {
        const parsed = JSON.parse(rawData)
        const locations: Poi[] = parsed.map((el: any) => ({
          name: el.name,
          slug: el.slug,
          // comuna: el.Comuna,
          // region: el.Region,
          position: {
            lat: Number(el?.coordinates?.lat),
            lng: Number(el?.coordinates?.lng)
          }
        }))
        //setPlayas(parsed)
        setPoints(locations)
        setFilteredPoints(locations)
      }
    } catch (err) {
      console.error('Error parsing playas data:', err)
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    if (selectedPlace && selectedPlace.formatted_address && selectedPlace.address_components) {
      const comuna =
        selectedPlace.address_components.find((component) =>
          component.types.includes('administrative_area_level_3')
        )?.long_name || ''

      // const filtered = points.filter((point) =>
      //   point.comuna.toLowerCase().includes(comuna.toLowerCase())
      // )
      // setFilteredPoints(filtered)
    } else {
      setFilteredPoints(points) // Mostrar todos si no hay filtro
    }
  }, [selectedPlace, points])

  useEffect(() => {
    if (location) {
      // const filtered = points.filter((point) =>
      //   point.comuna.toLowerCase().includes(location.toLowerCase())
      // )
      // setFilteredPoints(filtered.length > 0 ? filtered : points) // Si no encuentra resultados, muestra todos los puntos
    }
  }, [location, points])

  const handleMarkerClick = (index: number, map?: any) => {
    const element = itemRefs.current[index]

    // Establecer el índice activo
    setActiveIndex(index)

    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }

    // Centra el mapa en el marcador correspondiente
    const poi = filteredPoints[index]
    if (map) map.setCenter(poi.position)
  }

  if (loading) {
    return (
      <div className="tw-h-[600px] md:tw-h-[500px] tw-flex tw-justify-center tw-flex-col tw-w-full tw-items-center tw-space-y-1">
        <LoadingSpinner />
        <span className="tw-text-center tw-text-sm tw-text-gray-300">Cargando mapa...</span>
      </div>
    )
  }

  return (
    <APIProvider apiKey={API_KEY}>
      <div className={`tw-flex tw-flex-col-reverse md:tw-flex-row tw-gap-4`}>
        <div className={`tw-w-full md:tw-w-4/12`}>
          <div>
            <Autocomplete onPlaceSelect={setSelectedPlace} />
          </div>
          <div className={`tw-overflow-y-scroll tw-flex-1 tw-max-h-[100px] md:tw-max-h-[430px]`}>
            <PointsList
              points={filteredPoints} // Mostrar los puntos filtrados
              itemRefs={itemRefs}
              handleMarkerClick={handleMarkerClick}
              activeIndex={activeIndex}
            />
          </div>
        </div>
        <div className={`tw-w-full md:tw-w-8/12 tw-h-[400px] md:tw-h-[500px]`}>
          <Map
            id="gmap"
            defaultCenter={initialPosition}
            defaultZoom={10}
            mapTypeControl={false}
            zoomControl={true}
            streetViewControl={false}
            mapId={MAP_ID}
            disableDefaultUI={true}
            fullscreenControl={false}>
            <PoiMarkers pois={filteredPoints} onMarkerClick={handleMarkerClick} />
            <MapHandler place={selectedPlace} />
          </Map>
        </div>
      </div>
    </APIProvider>
  )
}

export default App

interface Props {
  pois: Poi[]
}

function PoiMarkers({ pois, onMarkerClick }: Props & { onMarkerClick: (index: number) => void }) {
  return (
    <>
      {pois.map((poi: Poi, index: number) => (
        <MarkerWithInfoWindow poi={poi} key={poi.name} onClick={() => onMarkerClick(index)} />
      ))}
    </>
  )
}

interface MarkerProps {
  poi: Poi
  onClick: () => void
}

function MarkerWithInfoWindow({ poi, onClick }: MarkerProps) {
  const [markerRef, marker] = useAdvancedMarkerRef()
  const [open, setOpen] = useState<boolean>(false)

  return (
    <>
      <AdvancedMarker
        position={poi.position}
        ref={markerRef}
        onClick={() => {
          setOpen(!open)
          onClick() // Llama al callback pasado desde PoiMarkers
        }}
      />
      {open && (
        <InfoWindow
          anchor={marker}
          headerContent={<h3>{poi.name}</h3>}
          onCloseClick={() => setOpen(false)}
          style={{ width: 250 }}>
          <a
            href={`https://dryhood-qa.myshopify.com/pages/${poi.slug}`}
            target="_blank"
            rel="noreferrer">
            Visita página
          </a>
        </InfoWindow>
      )}
    </>
  )
}

function PointsList({ points, itemRefs, handleMarkerClick, activeIndex }: any) {
  const map = useMap('gmap')

  const handleCardClick = (index: number) => {
    // Reutiliza la lógica del click en el marcador para centrar el mapa
    handleMarkerClick(index, map)
  }

  return (
    <div className="tw-block tw-space-y-1">
      {points &&
        points.map((point: any, index: number) => (
          <div
            ref={(el) => (itemRefs.current[index] = el)}
            onClick={() => handleCardClick(index)} // Asegúrate de usar `handleCardClick`
            className={`tw-p-2.5 tw-w-full tw-border tw-flex tw-items-center tw-rounded-md ${
              index === activeIndex
                ? 'tw-border-blue-500 tw-text-white tw-bg-blue-500'
                : 'tw-border-gray-200'
            }`} // Agregar clase de borde azul al elemento activo
            key={index}>
            {/* <img src={LogoEstacion} alt="Logo de estación" width={36} height={36} loading="lazy" /> */}
            <div className="tw-flex-1 tw-text-center">
              <h2
                className={`tw-text-sm tw-font-base ${
                  index === activeIndex ? 'tw-text-white' : ''
                }`}>
                {point.name}
              </h2>
              {/* <p
                className={`tw-text-xs tw-font-light ${
                  index === activeIndex ? 'tw-text-white' : ''
                }`}>
                {point.comuna}
              </p> */}
            </div>
          </div>
        ))}
    </div>
  )
}
