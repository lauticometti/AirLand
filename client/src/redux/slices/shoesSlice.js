import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchShoes = createAsyncThunk('shoes/fetchShoes', async () => {
	const response = await axios.get('http://localhost:3001')
	return response.data
})

const shoesSlice = createSlice({
	name: 'shoes',
	initialState: {
		shoes: [],
		status: 'idle',
		error: null
	},
	reducers: {},
	extraReducers: builder => {
		builder
			.addCase(fetchShoes.pending, state => {
				state.status = 'loading'
			})
			.addCase(fetchShoes.fulfilled, (state, action) => {
				state.status = 'succeeded'
				state.shoes = action.payload
			})
			.addCase(fetchShoes.rejected, (state, action) => {
				state.status = 'failed'
				state.error = action.error.message
			})
	}
})

export default shoesSlice.reducer
