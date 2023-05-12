import { useEffect, useState, useCallback } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { addData } from './stores/dataSlice'
import { removeLake } from './stores/stateLakeSlice'
import { addColorWB, addColorForYear } from './stores/chartSlice'
import { ObservationTypes, DurationTypes, DataTypes, AppConfig } from './config'
import { fillEmptyDataOfDate, getDataByYear } from './utils/date'
import {
  getDataFormalized,
  getDataRaw,
  getReferenceSerieDataType,
  makeFillingRateZSVdata,
} from './utils/data'
import { resetModeVolume } from './stores/dataSlice'
import { addLakeChartOptions } from './stores/lakesChartOptionsSlice'
import { addYearsChartOptions } from './stores/yearsChartOptionsSlice'
import DATA_TYPES from './config/DataTypes'
import { getYearStyle } from './stores/chartSlice'

export function useAppHook() {
  const yearStyle = useSelector(getYearStyle)
  const styleLength = Object.entries(yearStyle).length
  const [isOneLakeActive, setIsOneLakeActive] = useState(false)
  const [theme, setTheme] = useState('dark')
  const [obsDepth, setObsDepth] = useState(DurationTypes.PERIOD)
  const [lastObsDepth, setLastObsDepth] = useState(null)
  const [lastDataType, setLastDataType] = useState(null)
  const [canvas, setCanvas] = useState(null)
  const [noData, setNoData] = useState(false)
  const [noDataFound, setNoDataFound] = useState([])
  const form = useSelector(state => state.form)
  const { active } = useSelector(state => state.stateLake)
  const { data, loaded } = useSelector(state => state.data)
  const { seriePath: serPath, information } = useSelector(
    state => state.information
  )
  const { DAY, PERIOD, YEAR, dataType, OPTIC, RADAR, REFERENCE } = form
  const dispatch = useDispatch()

  const getObsTypeNameNotFound = useCallback(
    (lakeId, form) => {
      if (active.length === 0) return
      const { OPTIC, RADAR, REFERENCE } = form
      const allSeriesPath = serPath[lakeId]
      const opticAbbr = AppConfig.observationTypes.OPTIC.abbr
      const radarAbbr = AppConfig.observationTypes.RADAR.abbr
      const referenceAbbr = AppConfig.observationTypes.REFERENCE.abbr
      const obsTypeSeries = []
      for (const seriePath of allSeriesPath) {
        if (OPTIC && !seriePath.includes(opticAbbr)) {
          obsTypeSeries.push(ObservationTypes.OPTIC)
        }
        if (RADAR && !seriePath.includes(radarAbbr)) {
          obsTypeSeries.push(ObservationTypes.RADAR)
        }
        if (REFERENCE && !seriePath.includes(referenceAbbr)) {
          obsTypeSeries.push(ObservationTypes.REFERENCE)
        }
      }
      return Array.from(new Set(obsTypeSeries))
    },
    [serPath, active]
  )

  const handleData = useCallback(
    async lakeId => {
      if (data[lakeId]?.[dataType]?.[obsDepth]) return
      const allSeriesPath = serPath[lakeId]
      if (!allSeriesPath) {
        dispatch(removeLake({ id: lakeId }))
        setNoDataFound([information[lakeId].name])
        return
      }
      const newAllData = await getDataRaw(allSeriesPath, form).catch({})
      let dataZSV = []
      let newfillingRateZSV = []
      let volumeDataFullDates = []
      let formalizedData = []
      if (newAllData[2]?.length > 0) {
        if (dataType === DataTypes.FILLING_RATE) {
          dataZSV = getReferenceSerieDataType(newAllData[2], DataTypes.VOLUME)
        } else {
          dataZSV = getReferenceSerieDataType(newAllData[2], dataType)
        }
        formalizedData = getDataFormalized(dataZSV, dataType)

        if (dataType === DataTypes.FILLING_RATE) {
          newfillingRateZSV = makeFillingRateZSVdata(formalizedData)
        }
      }

      const noData = newAllData.every(el => el.length === 0)
      if (noData) {
        dispatch(removeLake({ id: lakeId }))
      }

      let tmp = []

      newAllData.forEach((serie, index) => {
        if (serie.length === 0) {
          if (index === 0 && form.OPTIC === true) {
            tmp.push('optic')
          }
          if (index === 1 && form.RADAR === true) {
            tmp.push('radar')
          }
          if (index === 2 && form.REFERENCE === true) {
            tmp.push('reference')
          }
        }
      })
      setNoDataFound(tmp)

      if (noData) return
      const tmpZSV = []
      if (dataType === DATA_TYPES.FILLING_RATE) {
        tmpZSV.push(newfillingRateZSV)
      } else {
        tmpZSV.push(formalizedData)
      }
      const newData = [
        getDataFormalized(newAllData[0], dataType),
        getDataFormalized(newAllData[1], dataType),
        tmpZSV[0],
      ]
      if (dataType === DataTypes.VOLUME) {
        volumeDataFullDates = fillEmptyDataOfDate([newData])
      }

      const obsName = obsDepth.toLowerCase()
      const obsNameByYear = `${obsName}ByYear`
      const volumeFullDates = `${obsName}Full`
      const dataByYear = getDataByYear([newData])

      let dataWB = {
        [obsName]: newData,
        [obsNameByYear]: dataByYear[0],
      }

      if (dataType === DataTypes.VOLUME) {
        dataWB = {
          ...dataWB,
          [volumeFullDates]: volumeDataFullDates[0],
        }
      }

      dispatch(
        addData({
          id: lakeId,
          dataType,
          dataWB,
          obsDepth,
          obsName,
          obsNameByYear,
          volumeFullDates,
        })
      )

      dispatch(addLakeChartOptions({ id: lakeId }))

      setLastDataType(dataType)
      setLastObsDepth(obsDepth)
    },

    [dispatch, active, dataType, obsDepth, OPTIC, RADAR, REFERENCE]
  )

  useEffect(() => {
    if (active.length === 0) return
    if (!YEAR || data[active.at(-1)][dataType][obsDepth].year.length === 0)
      return

    const dataYears = data[active.at(-1)][dataType][obsDepth].year
    const years = Object.keys(dataYears)
    dispatch(addYearsChartOptions({ years }))
  }, [YEAR, data, loaded])

  useEffect(() => {
    if (
      (lastDataType && dataType !== lastDataType) ||
      (lastObsDepth && obsDepth !== lastObsDepth)
    )
      return
    const lakeId = active.at(-1)
    const obsTypeNoData = getObsTypeNameNotFound(lakeId, form)
    if (obsTypeNoData?.length > 0) {
      setNoDataFound(obsTypeNoData.map(el => el.toLowerCase()))
      return
    }

    if (!lakeId) return
    handleData(lakeId)
  }, [active, data, dataType, obsDepth, OPTIC, RADAR, REFERENCE])

  useEffect(() => {
    if (!lastObsDepth || !lastDataType) return
    if (dataType !== lastDataType || obsDepth !== lastObsDepth) {
      for (const lakeId of active) {
        if (data[lakeId]?.[dataType]?.[obsDepth]) continue
        handleData(lakeId)
      }
    }
  }, [obsDepth, lastObsDepth, dataType, lastDataType])

  const handleCanvas = useCallback(cvas => {
    setCanvas(cvas)
  }, [])

  const toggleTheme = useCallback(() => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  })

  useEffect(() => {
    if (DAY) {
      setObsDepth(DurationTypes.DAY)
    }
    if (PERIOD) {
      setObsDepth(DurationTypes.PERIOD)
    }
  }, [DAY, PERIOD])

  useEffect(() => {
    if (
      (active.length > 0 &&
        data[active.at(-1)]?.[dataType]?.[obsDepth]?.raw[0].length > 0) ||
      data[active.at(-1)]?.[dataType]?.[obsDepth]?.raw[2].length > 0
    ) {
      setIsOneLakeActive(true)
    }
    if (active.length === 0) {
      setIsOneLakeActive(false)
    }
  }, [active, data, dataType])

  const handleSetNoData = useCallback(() => {
    setNoData(false)
  }, [])

  useEffect(() => {
    if (noDataFound.length > 0) {
      setNoData(true)
    }
  }, [noDataFound])

  const addChartColor = useCallback(() => {
    const randomColor = `rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(
      Math.random() * 255
    )}, ${Math.floor(Math.random() * 255)}, 1)`
    dispatch(
      addColorWB({
        dataType,
        obsType: ObservationTypes.OPTIC,
        color: randomColor,
      })
    )
    let newColor = randomColor.replace(/,[^,]+$/, ',0.66)')
    dispatch(
      addColorWB({
        dataType,
        obsType: ObservationTypes.RADAR,
        color: newColor,
      })
    )
    newColor = randomColor.replace(/,[^,]+$/, ',0.33)')
    dispatch(
      addColorWB({
        dataType,
        obsType: ObservationTypes.REFERENCE,
        color: newColor,
      })
    )
  }, [dataType])

  const addChartColorForYear = () => {
    const opticColor = `rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(
      Math.random() * 255
    )}, ${Math.floor(Math.random() * 255)}, 1)`

    let radarColor = opticColor.replace(/,[^,]+$/, ',0.66)')
    let referenceColor = opticColor.replace(/,[^,]+$/, ',0.33)')

    dispatch(
      addColorForYear({
        opticColor,
        radarColor,
        referenceColor,
      })
    )
  }

  useEffect(() => {
    if (active.length > 10) {
      addChartColor()
    }
    if (active.length === 0) {
      dispatch(resetModeVolume())
    }
  }, [active])

  useEffect(() => {
    if (data?.[active.at(-1)]?.[dataType]?.[obsDepth]?.year) {
      const numberOfYearsInData = Object.entries(
        data?.[active.at(-1)]?.[dataType]?.[obsDepth]?.year
      ).length
      if (numberOfYearsInData > styleLength) {
        const numberOfYearsToAdd = numberOfYearsInData - styleLength + 1
        for (let i = 0; i < numberOfYearsToAdd; i++) {
          addChartColorForYear()
        }
      }
    }
  }, [data?.[active.at(-1)]?.[dataType]?.[obsDepth]?.year, YEAR])

  return {
    isOneLakeActive,
    theme,
    toggleTheme,
    handleCanvas,
    canvas,
    noData,
    handleSetNoData,
    noDataFound,
  }
}
