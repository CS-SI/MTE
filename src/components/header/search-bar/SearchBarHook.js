import { useState, useEffect, useCallback } from 'react'
import { addLake } from '@/stores/stateLakeSlice'
import { useSelector, useDispatch } from 'react-redux'
import { DurationTypes } from '../../../config'
import { addLakeChartOptions } from '../../../stores/lakesChartOptionsSlice'
import { updateActivelakes } from '../../../stores/stateLakeSlice'
import { updateModeVolume } from '../../../stores/dataSlice'

export const useSearchBarHook = lakeInfo => {
  const [options, setOptions] = useState([])
  const [obsDepth, setObsDepth] = useState('')
  const { information } = useSelector(state => state.information)
  const { data } = useSelector(state => state.data)
  const { dataType, PERIOD, DAY, VOLUME } = useSelector(state => state.form)

  const dispatch = useDispatch()

  useEffect(() => {
    const optTmp = []
    Object.keys(information).forEach(el => {
      optTmp.push({
        value: information[el].name,
        label: information[el].name,
        id: information[el].id,
      })
    })
    const optTmpSortedByName = optTmp.sort((a, b) => {
      const nameA = a.label.toUpperCase()
      const nameB = b.label.toUpperCase()
      if (nameA < nameB) {
        return -1
      }
      if (nameA > nameB) {
        return 1
      }

      return 0
    })
    setOptions(optTmpSortedByName)
  }, [information])

  useEffect(() => {
    if (PERIOD) {
      setObsDepth(DurationTypes.PERIOD)
    }
    if (DAY) {
      setObsDepth(DurationTypes.DAY)
    }
  }, [PERIOD, DAY])

  const handleSearch = useCallback(() => {
    const { id } = lakeInfo
    const { lakeCoord } = information[id]
    if (id) {
      dispatch(addLake({ id, lakeCoord }))
    }
    if (data[id]?.[dataType][obsDepth]) {
      dispatch(updateActivelakes({ id }))
      dispatch(addLakeChartOptions({ id }))
      if (!VOLUME) return
      dispatch(updateModeVolume({ id, obsDepth }))
    }
  }, [lakeInfo, data, dataType, obsDepth, VOLUME])
  return { handleSearch, options }
}
