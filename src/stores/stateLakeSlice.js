import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  active: [],
  indexToRemoveFromChartData: '',
  lakeId: "",
}

export const stateLakeSlice = createSlice({
  name: 'stateLake',
  initialState,
  reducers: {
    addLake: (state, action) => {
      const { id } = action.payload
      if (!state.active.includes(id)) {
        state.active.push(id)
        //state.lakeId = id
      }
      
    },
    removeLake: (state, action) => {
      const { id } = action.payload
      if (state.active.includes(id)) {
        state.active = state.active.filter(lake => lake !== id)
        state.indexToRemoveFromChartData = state.active.indexOf(id)
      }
    },
    updateActivelakes: (state, action) => {
      const { id } = action.payload
      if (!state.active.includes(id)) {
        state.active.push(id)
      }
    },
    clearActiveLakes: state => {
      state.active = []
    },
    getLakeId: (state, action) => {
      const { id } = action.payload
      console.warn("IDDDDDDDD FROM GETLAK ID", id)
      if (state.lakeId !== id) {
        state.lakeId =  id
      }
    }
  },
})

export const { addLake, removeLake, clearActiveLakes, updateActivelakes, getLakeId } =
  stateLakeSlice.actions

export default stateLakeSlice.reducer
