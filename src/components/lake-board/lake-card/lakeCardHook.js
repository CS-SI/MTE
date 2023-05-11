import { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export const useLakeCardHook = () => {
  const [lake, setLake] = useState({
    id: '',
    country: '',
    name: '',
    lakeCoord: [],
    mainUse: '',
    nearCity: '',
    damCoord: [],
  })
  const { lakesChartOptions } = useSelector(state => state)
  const { information } = useSelector(state => state.information)
  const dispatch = useDispatch()

  useEffect(() => {
    const idLakeShowInfo = Object.entries(lakesChartOptions)
      .filter(([_, { infoVisible }]) => infoVisible)
      .map(([id]) => id)[0]
    if (!idLakeShowInfo) return
    const { id, country, name, lakeCoord, mainUse, nearCity, damCoord } =
      information[idLakeShowInfo]
    setLake({
      id,
      country,
      name,
      lakeCoord,
      mainUse,
      nearCity,
      damCoord,
    })
  }, [lakesChartOptions, information])

  const closeInfo = useCallback(() => {
    dispatch(toggleLakeChartInfoVisibility({ id: lake.id }))
    dispatch(getLakeId({ id: lake.id }))
  }, [dispatch, lake.id])

  return { lake, closeInfo }
}
