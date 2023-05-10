import { csv } from 'd3'
import { extractField, formatValue, normalizeValue } from './value'
import { getAttributesUnit } from './config'
import { getSeriePath } from './seriePath'
import { DataTypes } from '../config'
import { getHighestValue } from './math'

const getDataRaw = async (seriePath, form) => {
  //console.warn("seriePath",seriePath)
  const allSeries = getSeriePath(seriePath, form)
  //console.log("ALLSERIES from getDataRaw()", allSeries)
  //console.log(Object.keys(allSeries))
  const data = [[],[],[]]
  //console.log("ZEROO",data[0])
  if (allSeries.optic.length > 0) {
    const {optic} = allSeries
    //console.log("OPTICCCC",optic)
    for (const series of optic) {
      //console.log("PROCESSING SERIES",series)
        const res = await csv(series).catch(err => console.error(err))
        //console.log("RES",res)
        data[0] = res
    }
  }

  //console.log("DATA from getDataRaw()", data)
  return data
}

const getReferenceSerieDataType = (ZSVseries, dataType) => {
  if (dataType === DataTypes.VOLUME || dataType === DataTypes.FILLING_RATE) {
    return extractField(ZSVseries, 'volume')
  }
  if (dataType === DataTypes.SURFACE) {
    return extractField(ZSVseries, 'area')
  }
}

const getDataFormalized = (dataRaw, dataType) => {
  const unit = getAttributesUnit(dataType)
  return formatValue(dataRaw, unit)
}

const makeFillingRateZSVdata = volumeZSV => {
  const rateRef = getHighestValue(volumeZSV)
  return normalizeValue(volumeZSV, rateRef)
}

const isEqual = (a, b) => {
  return JSON.stringify(a) === JSON.stringify(b)
}
export {
  getDataFormalized,
  getDataRaw,
  getReferenceSerieDataType,
  makeFillingRateZSVdata,
  isEqual,
}
