import { current, createSlice } from "@reduxjs/toolkit"
const initialState = {}

export const lakesChartOptionsSlice = createSlice({
	name: "lakesChartOptions",
	initialState,
	reducers: {
		addLakeChartOptions: (state, action) => {
			const { id } = action.payload
			state[id] = {
				visible: true,
				selected: false,
			}
		},
		toggleLakeChartVisibility: (state, action) => {
			const { id } = action.payload
			state[id].visible = !state[id].visible
		},
		toggleLakeChartSelection: (state, action) => {
			const { id } = action.payload
			Object.entries(state).map((el) => {
				if (el[0] !== id && el[1].selected) {
					el[1].selected = false
				}
			})

			state[id].selected = !state[id].selected
		},
	},
})

export const {
	addLakeChartOptions,
	toggleLakeChartVisibility,
	toggleLakeChartSelection,
} = lakesChartOptionsSlice.actions

export default lakesChartOptionsSlice.reducer
