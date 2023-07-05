import axios from 'axios'
import { setSneakers } from './sneakersSlice'

const BASE_URL = import.meta.env.VITE_BACK_URL || 'http://localhost:3001/api'

export const fetchSneakers = () => {
	return async dispatch => {
		try {
			const { data } = await axios.get(`${BASE_URL}/sneakers`)
			dispatch(setSneakers(data))
		} catch (error) {
			alert(error.message)
		}
	}
}