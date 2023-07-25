import { LayerGroup, Polygon } from 'react-leaflet'
import { v4 as uuid } from '@lukeed/uuid'
import { useState, useEffect } from 'react'
import { findLargestArray } from '../../../../utils/array'

export const DepartementsPolygonLayer = ({ data }) => {
  const [layer, setLayer] = useState(null)
  useEffect(() => {
    setLayer(
      data.features.map(feature => {
        const { coordinates } = feature.geometry
        let coord = []

        coord = findLargestArray(coordinates)
        const reversedMultiPolygons = coord.map(polygon => [
          polygon[1],
          polygon[0],
        ])

        return (
          <Polygon
            key={uuid()}
            positions={reversedMultiPolygons}
            color="#FBDFBA"
            weight={1}
            fillColor="transparent"
          ></Polygon>
        )
      })
    )
  }, [data])
  return <LayerGroup>{layer}</LayerGroup>
}
