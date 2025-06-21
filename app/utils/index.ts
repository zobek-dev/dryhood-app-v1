export function truncate(str: string, { length = 25 } = {}) {
  if (!str) return ''
  if (str.length <= length) return str
  return str.slice(0, length) + '…'
}

export function handleize(str: string) {
  return str
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
}

export function parseCoordinates(raw: string): { lat: number; lon: number } {
  const jsonSafe = raw.replace(/([a-zA-Z0-9_]+)\s*:/g, '"$1":') // agrega comillas a claves
  return JSON.parse(jsonSafe)
}
