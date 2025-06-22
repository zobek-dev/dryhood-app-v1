import React, { useRef, useEffect, useState } from 'react'
import { useMapsLibrary } from '@vis.gl/react-google-maps'

interface Props {
  onPlaceSelect: (place: google.maps.places.PlaceResult | null, comuna: string | null) => void
}

// Este es el widget clásico de "Place Autocomplete".
// https://developers.google.com/maps/documentation/javascript/place-autocomplete
export const Autocomplete = ({ onPlaceSelect }: Props) => {
  const [placeAutocomplete, setPlaceAutocomplete] =
    useState<google.maps.places.Autocomplete | null>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const places = useMapsLibrary('places')

  useEffect(() => {
    if (!places || !inputRef.current) return

    const options = {
      fields: ['geometry', 'name', 'formatted_address', 'address_components'],
      componentRestrictions: { country: 'CL' } // Restringir los resultados a Chile
    }

    setPlaceAutocomplete(new places.Autocomplete(inputRef.current, options))
  }, [places])

  useEffect(() => {
    if (!placeAutocomplete) return

    placeAutocomplete.addListener('place_changed', () => {
      const place = placeAutocomplete.getPlace()

      // Extrae la comuna de la dirección formateada
      if (place && place.formatted_address) {
        // Buscar la comuna en administrative_area_level_3
        const comuna =
          place.address_components?.find((component) =>
            component.types.includes('administrative_area_level_3')
          )?.long_name || null
        onPlaceSelect(place, comuna)
      } else {
        onPlaceSelect(null, null) // En caso de no encontrar la dirección
      }
    })
  }, [onPlaceSelect, placeAutocomplete])

  return (
    <div className="tw-relative tw-mb-4">
      <div className="tw-absolute tw-inset-y-0 tw-start-0 tw-flex tw-items-center tw-ps-3 tw-pointer-events-none">
        <svg
          className="tw-w-4 tw-h-4 tw-text-gray-500"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 20 20">
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 19l-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
          />
        </svg>
      </div>
      <input
        type="search"
        className="tw-block tw-w-full tw-p-4 tw-ps-10 tw-text-sm tw-text-gray-900 tw-border tw-border-gray-300 tw-rounded-lg tw-bg-gray-50 focus:!tw-ring-blue-500 focus:!tw-border-blue-500"
        placeholder="Busca la estación más cercana"
        ref={inputRef}
      />
    </div>
  )
}
