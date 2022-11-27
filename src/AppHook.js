import { useEffect, useState, useCallback } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { addData } from './stores/dataSlice'
import { addColor } from './stores/chartSlice'
import {
  AppConfig,
  SeriePathUtils,
  ObservationTypes,
  DurationTypes,
  DataTypes,
} from './config'
import { csv } from 'd3'
import {
  fillEmptyDataOfDate,
  getDataByYear,
  getFirstDateOfArrays,
  getLastDateOfArrays,
} from './utils/date'
import { extractField, formatValue, normalizeValue } from './utils/value'
import { getHighestValue } from './utils/math'
import {
  getSeriePathByAttribute,
  getSeriePathByObsTypeAndObsDepth,
} from './utils/seriePath'
import {
  getDataFormalized,
  getDataRaw,
  getReferenceSerieDataType,
  makeFillingRateZSVdata,
} from './utils/data'
import { addLakeChartOptions } from './stores/lakesChartOptionsSlice'
import { addYearsChartOptions } from './stores/yearsChartOptionsSlice'
import { concatDataTypeObsDepthByYear } from './utils/config'

export function useAppHook() {
  const [isOneLakeActive, setIsOneLakeActive] = useState(false)
  const [theme, setTheme] = useState('dark')
  const [obsDepth, setObsDepth] = useState(DurationTypes.PERIOD)
  const [lastObsDepth, setLastObsDepth] = useState(DurationTypes.PERIOD)
  const [lastDataType, setLastDataType] = useState(null)
  const [canvas, setCanvas] = useState(null)
  const [noData, setNoData] = useState(false)
  const form = useSelector(state => state.form)
  const { active } = useSelector(state => state.stateLake)
  const { data } = useSelector(state => state.data)
  const { seriePath: serPath } = useSelector(state => state.information)
  const { OPTIC, RADAR, DAY, PERIOD, REFERENCE, YEAR, dataType } = form
  const { getSeriePath, getTimeseriesPath } = SeriePathUtils
  const dispatch = useDispatch()
  const { unit } = AppConfig.attributes[dataType]

  const handleData = useCallback(
    async lakeId => {
      if (data[lakeId]?.[dataType]?.[obsDepth]) return
      // if (Object.keys(data).includes(id)) return
      const fillingRatePath =
        AppConfig.attributes[DataTypes.FILLING_RATE].filePath
      const surfacePath = AppConfig.attributes[DataTypes.SURFACE].filePath
      const volumePath = AppConfig.attributes[DataTypes.VOLUME].filePath
      const optic = AppConfig.observationTypes[ObservationTypes.OPTIC].abbr
      const radar = AppConfig.observationTypes[ObservationTypes.RADAR].abbr
      const reference =
        AppConfig.observationTypes[ObservationTypes.REFERENCE].abbr
      const day = AppConfig.duration[DurationTypes.DAY].abbr
      const period = AppConfig.duration[DurationTypes.PERIOD].abbr
      const allSeriesPath = serPath[lakeId]

      const newAllData = await getDataRaw(allSeriesPath, form)

      let dataZSV
      let newfillingRateZSV
      let volumeDataFullDates
      if (dataType === DataTypes.FILLING_RATE) {
        dataZSV = getReferenceSerieDataType(newAllData[2], DataTypes.VOLUME)
      } else {
        dataZSV = getReferenceSerieDataType(newAllData[2], dataType)
      }
      const formalizedData = getDataFormalized(dataZSV, dataType)

      if (dataType === DataTypes.FILLING_RATE) {
        newfillingRateZSV = makeFillingRateZSVdata(formalizedData)
      }
      const newData = [
        getDataFormalized(newAllData[0], dataType),
        getDataFormalized(newAllData[1], dataType),
        newfillingRateZSV ? newfillingRateZSV : formalizedData,
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

      // const referenceSeries = getSeriePathByAttribute(allSeriesPath, reference)
      // const referenceSeriesRaw = await csv(referenceSeries).catch(err => {})
      // const volumeCSV = [
      //   (await getDataFormalized(volumeOpticDay, 'hm³')) || [],
      //   (await getDataFormalized(volumeRadarDay, 'hm³')) || [],
      // ]
      // const firstDate = getFirstDateOfArrays(volumeCSV)
      // const lastDate = getLastDateOfArrays(volumeCSV)
      //
      // const referenceSeriesFormalized =
      //   referenceSeriesRaw && formatValue(referenceSeriesRaw)
      //
      // const surfaceZSV =
      //   referenceSeriesFormalized &&
      //   extractField([referenceSeriesFormalized], 'area')[0]
      //
      // const volumeZSV =
      //   referenceSeriesFormalized &&
      //   extractField([referenceSeriesFormalized], 'volume')[0]
      //
      // const rateRef = volumeZSV && getHighestValue([volumeZSV])
      //
      // const fillingRateZSV = rateRef && normalizeValue([volumeZSV], rateRef)[0]
      //
      // try {
      //   const fillingRateDayRaw = [
      //     (await getDataFormalized(fillingRateOpticDay, '%')) || [],
      //     (await getDataFormalized(fillingRateRadarDay, '%')) || [],
      //     fillingRateZSV || [],
      //   ]
      //   const fillingRatePeriodRaw = [
      //     (await getDataFormalized(fillingRateOpticPeriod, '%')) || [],
      //     (await getDataFormalized(fillingRateRadarPeriod, '%')) || [],
      //     fillingRateZSV || [],
      //   ]
      //
      //   const surfaceDayRaw = [
      //     (await getDataFormalized(surfaceOpticDay, 'ha')) || [],
      //     (await getDataFormalized(surfaceRadarDay, 'ha')) || [],
      //     surfaceZSV || [],
      //   ]
      //   const surfacePeriodRaw = [
      //     (await getDataFormalized(surfaceOpticPeriod, 'ha')) || [],
      //     (await getDataFormalized(surfaceRadarPeriod, 'ha')) || [],
      //     surfaceZSV || [],
      //   ]
      //   const volumeDayRaw = [
      //     (await getDataFormalized(volumeOpticDay, 'hm³')) || [],
      //     (await getDataFormalized(volumeRadarDay, 'hm³')) || [],
      //     volumeZSV || [],
      //   ]
      //   const volumePeriodRaw = [
      //     (await getDataFormalized(volumeOpticPeriod, 'hm³')) || [],
      //     (await getDataFormalized(volumeRadarPeriod, 'hm³')) || [],
      //     volumeZSV || [],
      //   ]
      //   const allData = [
      //     ...fillingRateDayRaw,
      //     ...fillingRatePeriodRaw,
      //     ...surfaceDayRaw,
      //     ...surfacePeriodRaw,
      //     ...volumeDayRaw,
      //     ...volumePeriodRaw,
      //   ]
      //   const noDataCount = arr => arr.filter(el => el.length === 0).length
      //   let noDataLength = noDataCount(allData)
      //   const allFillingRateData = [...fillingRateDayRaw, ...fillingRatePeriodRaw]
      //   const allSurfaceData = [...surfaceDayRaw, ...surfacePeriodRaw]
      //   const allVolumeData = [...volumeDayRaw, ...volumePeriodRaw]
      //   if (
      //     dataType === DataTypes.FILLING_RATE &&
      //     noDataCount(allFillingRateData) === allFillingRateData.length
      //   ) {
      //     setNoData(true)
      //   }
      //
      //   if (
      //     dataType === DataTypes.SURFACE &&
      //     noDataCount(allSurfaceData) === allSurfaceData.length
      //   ) {
      //     setNoData(true)
      //   }
      //
      //   if (
      //     dataType === DataTypes.VOLUME &&
      //     noDataCount(allVolumeData) === allVolumeData.length
      //   ) {
      //     setNoData(true)
      //   }
      //
      //   if (noDataLength === allData.length) {
      //     setNoData(true)
      //     dispatch(removeLake({ id }))
      //   }
      //
      //   let fillingRateDayByYEar = []
      //   let fillingRatePeriodByYear = []
      //   if (fillingRateDayRaw.length > 0 && fillingRatePeriodRaw.length > 0) {
      //     fillingRateDayByYEar = getDataByYear([fillingRateDayRaw])
      //     fillingRatePeriodByYear = getDataByYear([fillingRatePeriodRaw])
      //   }
      //
      //   let surfaceDayByYear = []
      //   let surfacePeriodByYear = []
      //   if (surfaceDayRaw?.length > 0 && surfacePeriodRaw?.length > 0) {
      //     surfaceDayByYear = getDataByYear([surfaceDayRaw])
      //     surfacePeriodByYear = getDataByYear([surfacePeriodRaw])
      //   }
      //
      //   let volumeDayByYear = []
      //   let volumePeriodByYear = []
      //   let volumeDayFull = []
      //   let volumePeriodFull = []
      //
      //   if (volumeDayRaw?.length > 0 && volumePeriodRaw?.length > 0) {
      //     volumeDayByYear = getDataByYear([volumeDayRaw])
      //     volumeDayFull = fillEmptyDataOfDate([volumeDayRaw])
      //     volumePeriodByYear = getDataByYear([volumePeriodRaw])
      //     volumePeriodFull = fillEmptyDataOfDate([volumePeriodRaw])
      //   }
      //
      //   const fillingRate = {
      //     [DurationTypes.DAY]: {
      //       day: fillingRateDayRaw,
      //       dayByYear: fillingRateDayByYEar[0],
      //     },
      //     [DurationTypes.PERIOD]: {
      //       period: fillingRatePeriodRaw,
      //       periodByYear: fillingRatePeriodByYear[0],
      //     },
      //   }
      //   const surface = {
      //     [DurationTypes.DAY]: {
      //       day: surfaceDayRaw,
      //       dayByYear: surfaceDayByYear[0],
      //     },
      //     [DurationTypes.PERIOD]: {
      //       period: surfacePeriodRaw,
      //       periodByYear: surfacePeriodByYear[0],
      //     },
      //   }
      //
      //   const volume = {
      //     [DurationTypes.DAY]: {
      //       day: volumeDayRaw,
      //       dayByYear: volumeDayByYear[0],
      //       dayFull: volumeDayFull[0],
      //     },
      //     [DurationTypes.PERIOD]: {
      //       period: volumePeriodRaw,
      //       periodByYear: volumePeriodByYear[0],
      //       periodFull: volumePeriodFull[0],
      //     },
      //   }
      //   if (
      //     fillingRatePeriodRaw.length > 0 &&
      //     surfacePeriodRaw.length > 0 &&
      //     volumePeriodRaw.length > 0
      //   ) {
      //     dispatch(addData({ id, fillingRate, surface, volume }))
      //     dispatch(addLakeChartOptions({ id }))
      //   }
      // } catch (err) {
      //   console.log(err)
      // }
    },
    [dispatch, active, dataType, obsDepth]
  )

  useEffect(() => {
    if (active.length === 0) return
    if (!YEAR || data[active.at(-1)][dataType][obsDepth].year.length === 0)
      return

    const dataYears = data[active.at(-1)][dataType][obsDepth].year
    const years = Object.keys(dataYears)
    dispatch(addYearsChartOptions({ years }))
  }, [YEAR, data])

  useEffect(() => {
    if (data[active.at(-1)]?.[dataType][obsDepth]) return
    if (
      active.length > 0 &&
      (dataType === lastDataType || obsDepth === lastObsDepth)
    ) {
      const lakeId = active.at(-1)
      handleData(lakeId)
    }
    if (
      (active.length > 1 && dataType !== lastDataType) ||
      obsDepth !== lastObsDepth
    ) {
      for (const lakeId of active) {
        handleData(lakeId)
      }
    }
  }, [active, obsDepth, lastObsDepth, dataType, lastDataType])

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
    setLastObsDepth(obsDepth)
  }, [DAY, PERIOD])

  useEffect(() => {
    if (
      active.length > 0 &&
      data[active.at(-1)]?.[dataType]?.[obsDepth]?.raw[0].length > 0
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

  const addChartColor = useCallback(() => {
    const randomColor = `rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(
      Math.random() * 255
    )}, ${Math.floor(Math.random() * 255)}, 1)`
    dispatch(
      addColor({
        dataType,
        obsType: ObservationTypes.OPTIC,
        color: randomColor,
      })
    )
    let newColor = randomColor.replace(/,[^,]+$/, ',0.66)')
    dispatch(
      addColor({
        dataType,
        obsType: ObservationTypes.RADAR,
        color: newColor,
      })
    )
    newColor = randomColor.replace(/,[^,]+$/, ',0.33)')
    dispatch(
      addColor({
        dataType,
        obsType: ObservationTypes.REFERENCE,
        color: newColor,
      })
    )
  }, [dataType])

  useEffect(() => {
    if (active.length > 10) {
      addChartColor()
    }
  }, [active, addChartColor])

  return {
    isOneLakeActive,
    theme,
    toggleTheme,
    handleCanvas,
    canvas,
    noData,
    handleSetNoData,
  }
}
