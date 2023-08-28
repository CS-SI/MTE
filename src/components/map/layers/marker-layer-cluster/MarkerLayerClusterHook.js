import { useState, useEffect } from 'react'
import { useMapEvents } from 'react-leaflet'
export default function useMarkerLayerClusterHook(data) {
  const [zoomLevel, setZoomLevel] = useState(null)

  useEffect(() => {
    console.log('MARKER', zoomLevel)
  }, [zoomLevel])

  const coordinates = data.features.map(feature => {
    let { LONG_WW, LAT_WW } = feature.properties
    LONG_WW = LONG_WW.replace(',', '.')
    LAT_WW = LAT_WW.replace(',', '.')

    return [LAT_WW, LONG_WW]
  })
  const DAM_NAME = data.features.map(feat => {
    const { DAM_NAME } = feat.properties
    return DAM_NAME
  })

  const mapEvents = useMapEvents({
    zoomend: () => {
      setZoomLevel(mapEvents.getZoom())
    },
    init: () => {
      setZoomLevel(mapEvents.getZoom())
    },
  })

  return { coordinates, zoomLevel, DAM_NAME }
}
