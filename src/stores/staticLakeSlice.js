import { createSlice, current } from '@reduxjs/toolkit'
import { remove } from 'jszip'
import {
  AppConfig,
  DataTypes,
  DurationTypes,
  ObservationTypes,
  SeriePathUtils,
} from '../config/index'
import { removeDiacritics } from './../utils/value'
const initialState = {
  information: {},
  seriePath: {},
}

// import folders from public/series
const files = import.meta.glob('/src/series/*/*')
const data = Object.entries(files).map(([, data]) => data)
const allSeriesFromSrc = {}
for (const item of data) {
  allSeriesFromSrc.push(item.name.replace('/src', '.'))
}

const { getSeriePath, getTimeseriesPath } = SeriePathUtils
export const staticLakeSlice = createSlice({
  name: 'information',
  initialState,
  reducers: {
    addInformation: (state, action) => {
      const { id, info } = action.payload
      const name = removeDiacritics(info.name.replace(/\s/g, '_'))

      if (!state.information[id]) {
        state.information[id] = info
      }

      if (!state.seriePath[id]) {
        state.seriePath[id] = []
        state.seriePath[id].push(
          allSeriesFromSrc.filter(el => {
            console.log(idFromItem, id)
            if (id === idFromItem) {
              return el.includes(idFromItem)
            }
          })
        )
      }
      /* for (const item of allSeriesFromSrc) {
        const regex = /\/(\d+)\//
        const idFromItem = item.match(regex)[1]
        // create seriePath by idFromItem with an array of all items incluing idFromItem
        if (!state.seriePath[idFromItem]) {
          state.seriePath[idFromItem] = []
        }
        state.seriePath[idFromItem].push(item)
      } */

      /* if (!state.seriePath[id]) {
        const serieTmp = []

        const fillingRateOptic10Days = getSeriePath(
          id,
          name,
          AppConfig.attributes[DataTypes.FILLING_RATE].filePath,
          AppConfig.observationTypes[ObservationTypes.OPTIC].abbr,
          AppConfig.duration[DurationTypes.PERIOD].abbr
        )

        const fillingRateOpticDay = getSeriePath(
          id,
          name,
          AppConfig.attributes[DataTypes.FILLING_RATE].filePath,
          AppConfig.observationTypes[ObservationTypes.OPTIC].abbr,
          AppConfig.duration[DurationTypes.DAY].abbr
        )

        const fillingRateRadar10Days = getSeriePath(
          id,
          name,
          AppConfig.attributes[DataTypes.FILLING_RATE].filePath,
          AppConfig.observationTypes[ObservationTypes.RADAR].abbr,
          AppConfig.duration[DurationTypes.PERIOD].abbr
        )

        const fillingRateRadarDay = getSeriePath(
          id,
          name,
          AppConfig.attributes[DataTypes.FILLING_RATE].filePath,
          AppConfig.observationTypes[ObservationTypes.RADAR].abbr,
          AppConfig.duration[DurationTypes.DAY].abbr
        )

        const volumeOptic10Days = getSeriePath(
          id,
          name,
          AppConfig.attributes[DataTypes.VOLUME].filePath,
          AppConfig.observationTypes[ObservationTypes.OPTIC].abbr,
          AppConfig.duration[DurationTypes.PERIOD].abbr
        )

        const volumeOpticDay = getSeriePath(
          id,
          name,
          AppConfig.attributes[DataTypes.VOLUME].filePath,
          AppConfig.observationTypes[ObservationTypes.OPTIC].abbr,
          AppConfig.duration[DurationTypes.DAY].abbr
        )

        const volumeRadar10Days = getSeriePath(
          id,
          name,
          AppConfig.attributes[DataTypes.VOLUME].filePath,
          AppConfig.observationTypes[ObservationTypes.RADAR].abbr,
          AppConfig.duration[DurationTypes.PERIOD].abbr
        )

        const volumeRadarDay = getSeriePath(
          id,
          name,
          AppConfig.attributes[DataTypes.VOLUME].filePath,
          AppConfig.observationTypes[ObservationTypes.RADAR].abbr,
          AppConfig.duration[DurationTypes.DAY].abbr
        )

        const surfaceOptic10Days = getSeriePath(
          id,
          name,
          AppConfig.attributes[DataTypes.SURFACE].filePath,
          AppConfig.observationTypes[ObservationTypes.OPTIC].abbr,
          AppConfig.duration[DurationTypes.PERIOD].abbr
        )

        const surfaceOpticDay = getSeriePath(
          id,
          name,
          AppConfig.attributes[DataTypes.SURFACE].filePath,
          AppConfig.observationTypes[ObservationTypes.OPTIC].abbr,
          AppConfig.duration[DurationTypes.DAY].abbr
        )

        const surfaceRadar10Days = getSeriePath(
          id,
          name,
          AppConfig.attributes[DataTypes.SURFACE].filePath,
          AppConfig.observationTypes[ObservationTypes.RADAR].abbr,
          AppConfig.duration[DurationTypes.PERIOD].abbr
        )

        const surfaceRadarDay = getSeriePath(
          id,
          name,
          AppConfig.attributes[DataTypes.SURFACE].filePath,
          AppConfig.observationTypes[ObservationTypes.RADAR].abbr,
          AppConfig.duration[DurationTypes.DAY].abbr
        )

        const referenceSerie = getTimeseriesPath(id, name)

        serieTmp.push(
          fillingRateOpticDay,
          fillingRateOptic10Days,
          fillingRateRadarDay,
          fillingRateRadar10Days,
          volumeOpticDay,
          volumeOptic10Days,
          volumeRadarDay,
          volumeRadar10Days,
          surfaceOpticDay,
          surfaceOptic10Days,
          surfaceRadarDay,
          surfaceRadar10Days,
          referenceSerie
        )

        state.seriePath[id] = serieTmp
      } */
    },
  },
})

export const { addInformation } = staticLakeSlice.actions

export default staticLakeSlice.reducer
