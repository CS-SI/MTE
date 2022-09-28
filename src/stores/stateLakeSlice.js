import { createSlice } from "@reduxjs/toolkit"

const initialState = {
	active: [],
	loaded: [],
	indexToRemoveFromChartData: "",
}

export const stateLakeSlice = createSlice({
	name: "stateLake",
	initialState,
	reducers: {
		addLake: (state, action) => {
			const { id } = action.payload
			console.log("addLake", id)
			if (!state.active.includes(id)) {
				state.active.push(id)
			}

			if (!state.loaded.includes(id)) {
				state.loaded.push(id)
			}
		},
		removeLake: (state, action) => {
			const { id } = action.payload
			if (state.active.includes(id)) {
				state.active = state.active.filter((lake) => lake !== id)
				state.indexToRemoveFromChartData = state.active.indexOf(id)
			}
		},
		clearActiveLakes: (state) => {
			state.active = []
		},
	},
})


export const { addLake, removeLake, clearActiveLakes } = stateLakeSlice.actions

export default stateLakeSlice.reducer
