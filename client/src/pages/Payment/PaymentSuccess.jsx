import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import axios from 'axios'
import Swal from 'sweetalert2'

const BASE_URL = import.meta.env.VITE_BACK_URL || 'http://localhost:3001/api'

export function PaymentSuccess() {

  const { email, displayName } = useSelector(state => state.auth)
  const navigate = useNavigate()

  useEffect(() => {
    try {
      axios.post(
        `${BASE_URL}/email/success-purchase`,
        {
          email,
          displayName
        }
      )
        .then(({ data }) => console.log(data))
    } catch (error) {
      throw new Error(error.message)
    }
    Swal.fire({
      title: 'Successful purchase!',
      icon: 'success',
      timer: 2000,
      timerProgressBar: true,
      showConfirmButton: false
    }).then((result) => {
      if (result.dismiss === Swal.DismissReason.timer) {
        navigate('/')
      }
    })
  }, [])

  return (
    <>
    </>
  )
}