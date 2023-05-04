import { createSlice } from '@reduxjs/toolkit'
const initialState = {
  information: {},
  seriePath: {},
}

const files = import.meta.glob('../../public/series/**/*.csv', { as: 'raw' })
const allSeriesFromSrc = Object.keys(files).map(key => {
  return key.replace('../../public/', './')
})

const regex = /\/(\d+)\//
const allIds = allSeriesFromSrc.map(item => {
  return item.match(regex)[1]
})
const uniqueIds = [...new Set(allIds)]

const seriePath = {}
for (const id of uniqueIds) {
  seriePath[id] = []
  for (const item of allSeriesFromSrc) {
    if (item.match(regex)[1] === id) {
      seriePath[id].push(item)
    }
  }
}

initialState.seriePath = seriePath

export const staticLakeSlice = createSlice({
  name: 'information',
  initialState,
  reducers: {
    addInformation: (state, action) => {
      const { id, info } = action.payload

      if (!state.information[id]) {
        state.information[id] = info
      }
    },
  },
})

export const { addInformation } = staticLakeSlice.actions

export default staticLakeSlice.reducer
