import axios from 'axios'
import swal from 'sweetalert'
import { getCartItems, getOrders, getAllOrdersAdmin } from './shoppingSlice'

// const BASE_URL = import.meta.env.VITE_BACK_URL || 'http://localhost:3001/api'
const BASE_URL = 'http://localhost:3001/api'

export const getCart = userId => {
	return async dispatch => {
		try {
			const { data } = await axios.get(`${BASE_URL}/cart/${userId}`)
			dispatch(getCartItems(data))
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
			swal({
				title: data,
				icon: 'success',
				timer: '2000'
			})
		} catch (error) {
			swal({
				title: error.message,
				icon: 'error',
				timer: '2000'
			})
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
			swal({
				title: data,
				icon: 'success',
				timer: '2000'
			})
		} catch (error) {
			swal({
				title: error.message,
				icon: 'error',
				timer: '2000'
			})
		}
	}
}

export const updateItem = (sneakerId, userId, quantity) => {
	return async dispatch => {
		try {
			await axios.patch(
				`${BASE_URL}/cart/update/${userId}/${sneakerId}/${quantity}`
			)
			dispatch(getCart(userId))
		} catch (error) {
			alert(error.message)
		}
	}
}

export const getPayment = (userId, form, totalPrice) => {
	return async dispatch => {
		try {
			const { data } = await axios.post(
				`${BASE_URL}/payment/create-preference`,
				{
					userId,
					form,
					totalPrice
				}
			)
			window.location.href = data.init_point
		} catch (error) {
			alert(error.message)
		}
	}
}

export const getAllOrders = userId => {
	return async dispatch => {
		try {
			const { data } = await axios.get(`${BASE_URL}/order/${userId}`)
			dispatch(getOrders(data))
		} catch (error) {
			alert(error.message)
		}
	}
}

export const getAllOrdersGlobal = () => {
	return async dispatch => {
		try {
			const { data } = await axios.get(`${BASE_URL}/order/`)
			console.log(data)
			dispatch(getAllOrdersAdmin(data))
		} catch (error) {
			alert(error.message)
		}
	}
}
