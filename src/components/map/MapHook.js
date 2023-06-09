import { addInformation } from '../../stores/staticLakeSlice'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'

export default function useMapHook({ dataGeojson }) {
  const coordinates = [45.3501, 2.72778]
  const dispatch = useDispatch()

  useEffect(() => {
    for (const data of dataGeojson) {
      const { features } = data
      features.forEach(({ properties }) => {
        const {
          ID_DB: id,
          DAM_NAME: name,
          LONG_WW,
          LAT_WW,
          MAIN_USE: mainUse,
          COUNTRY: country,
          LAT_DD,
          LONG_DD,
          NEAR_CITY: nearCity,
          CAP_MCM: capacity,
          AREA_HA: area,
        } = properties

        const info = {
          id: id.toString(),
          name,
          lakeCoord: [LAT_WW, LONG_WW],
          mainUse,
          country,
          nearCity,
          damCoord: [LAT_DD, LONG_DD],
          capacity,
          area,
        }

        dispatch(addInformation({ id, info }))
      })
    }
  }, [])

  return { coordinates }
}
