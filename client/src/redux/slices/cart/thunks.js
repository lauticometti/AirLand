import axios from 'axios'
import { get } from './cartSlice'

const BASE_URL = 'http://localhost:3001/api'

export const getCart = userId => {
	return async dispatch => {
		try {
			const { data } = await axios.get(`${BASE_URL}/cart/${userId}`)
			dispatch(get(data))
		} catch (error) {
			alert(error.message)
		}
	}
}

export const addItem = (sneakerId, userId, size) => {
	return async dispatch => {
		try {
			const { data } = await axios.post(
				`${BASE_URL}/cart/add/${userId}/${sneakerId}/${size}`
			)
			dispatch(getCart(userId))
			alert(data)
		} catch (error) {
			alert(error.message)
		}
	}
}

export const removeItem = (sneakerId, userId) => {
	return async dispatch => {
		try {
			const { data } = await axios.delete(
				`${BASE_URL}/cart/delete/${userId}/${sneakerId}/`
			)
			dispatch(getCart(userId))
			alert(data)
		} catch (error) {
			alert(error.message)
		}
	}
}

export const updateItem = (sneakerId, userId, quantity) => {
	return async dispatch => {
		try {
			const { data } = await axios.patch(
				`${BASE_URL}/cart/update/${userId}/${sneakerId}/${quantity}`
			)
			dispatch(getCart(userId))
		} catch (error) {
			alert(error.message)
		}
	}
}
