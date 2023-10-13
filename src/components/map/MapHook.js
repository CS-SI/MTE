import { useEffect, useState } from 'react'
import { addInformation } from '../../stores/staticLakeSlice'
import { useDispatch, useSelector } from 'react-redux'

export default function useMapHook({ waterBody }) {
  const coordinates = [46.4947387, 2.6028326]
  const { active } = useSelector(state => state.stateLake)
  const dispatch = useDispatch()
  const [key, setKey] = useState(0)

  useEffect(() => {
    if (active.length === 0) {
      setKey(prevKey => prevKey + 1)
    }
  }, [active])

  useEffect(() => {
    for (const data of waterBody) {
      const { features } = data
      features.forEach(({ properties }) => {
        let {
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

        // if (
        //   LONG_WW === 'MISSING' ||
        //   LAT_WW === 'MISSING' ||
        //   LONG_DD === 'MISSING' ||
        //   LAT_DD === 'MISSING'
        // )
        //   return
        //
        // LAT_WW = LAT_WW.replace(',', '.')
        // LONG_WW = LONG_WW.replace(',', '.')
        // LAT_DD = LAT_DD.replace(',', '.')
        // LONG_DD = LONG_DD.replace(',', '.')

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

  return { coordinates, key }
}
