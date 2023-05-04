import usePolygonLayerHook from './PolygonLayerHook'
import { LayerGroup, Polygon, Tooltip } from 'react-leaflet'
import { v4 as uuid } from '@lukeed/uuid'
import { useState, useEffect } from 'react'
import { PropTypes } from 'prop-types'
import lakesChartOptionsSlice, {
  toggleLakeChartSelection,
} from '../../../../stores/lakesChartOptionsSlice'

export const PolygonLayer = ({ data }) => {
  const [layer, setLayer] = useState(null)
  const {
    id,
    activeLake,
    color,
    zoomLevel,
    active,
    updateLake,
    obsDepth,
    dataFromStore,
    dataType,
    dispatch,
  } = usePolygonLayerHook({
    data,
  })

  useEffect(() => {
    setLayer(
      data.features.map(feature => {
        const { ID_DB, DAM_NAME, LONG_WW, LAT_WW } = feature.properties
        const { coordinates } = feature.geometry

        let coord
        if (coordinates[0][0].length === 2) {
          coord = Array.from([coordinates[0]])
        } else {
          coord = coordinates[0]
        }

        /* if (coordinates.length > 1) {
          let coordSorted = coordinates
            .sort((a, b) => a[0].length - b[0].length)
            .reverse()[0]

          coord = Array.from([coordSorted[0]])
        } */

        /* if (ID_DB === 193) {
          console.log('coord', coord)
        }
        if (ID_DB === 83) {
          console.log('coord', coord)
        } */

        const reversedMultiPolygons = coord.map(polygon =>
          polygon.map(p => [p[1], p[0]])
        )
        let polygonPositions

        if (reversedMultiPolygons[0].length === 2) {
          polygonPositions = Array.from([reversedMultiPolygons])
        } else {
          polygonPositions = reversedMultiPolygons
        }

        return (
          <Polygon
            key={uuid()}
            positions={polygonPositions}
            color={ID_DB.toString() === id ? '#CDF0EA' : 'blue'}
            // eslint-disable-next-line react-perf/jsx-no-new-object-as-prop
            eventHandlers={{
              click: () => {
                if (!dataFromStore[ID_DB]?.[dataType][obsDepth]) {
                  activeLake(ID_DB, [LAT_WW, LONG_WW])
                }
                if (dataFromStore[ID_DB]?.[dataType][obsDepth]) {
                  updateLake(ID_DB, [LAT_WW, LONG_WW], obsDepth)
                }
                if (active.includes(ID_DB)) {
                  dispatch(toggleLakeChartSelection({ id: ID_DB }))
                }
              },
            }}
          >
            <Tooltip>
              <h3>{DAM_NAME}</h3>
            </Tooltip>
          </Polygon>
        )
      })
    )
  }, [id, active])

  return <LayerGroup>{zoomLevel > 8 ? layer : null}</LayerGroup>
}
PolygonLayer.propTypes = {
  data: PropTypes.object.isRequired,
}
