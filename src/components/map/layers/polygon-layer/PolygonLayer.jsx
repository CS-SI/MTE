import usePolygonLayerHook from './PolygonLayerHook'
import { LayerGroup, Polygon, Tooltip } from 'react-leaflet'
import { v4 as uuid } from '@lukeed/uuid'
import { useState, useEffect } from 'react'
import { PropTypes } from 'prop-types'
import { toggleLakeChartSelection } from '../../../../stores/lakesChartOptionsSlice'
import { findLargestArray } from '../../../../utils/array'
export const PolygonLayer = ({ data }) => {
  const [layer, setLayer] = useState(null)
  const {
    id,
    activeLake,
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
