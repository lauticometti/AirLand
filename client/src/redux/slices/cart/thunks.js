import axios from 'axios'
import swal from 'sweetalert'
import { get } from './cartSlice'

const BASE_URL = 'https://airland-production.up.railway.app/api'

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
  return async (dispatch) => {
    try {
      const { data } = await axios.post(`${BASE_URL}/cart/add/${userId}/${sneakerId}/${size}`)
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
  return async (dispatch) => {
    try {
      const { data } = await axios.delete(`${BASE_URL}/cart/delete/${userId}/${sneakerId}/`)
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
