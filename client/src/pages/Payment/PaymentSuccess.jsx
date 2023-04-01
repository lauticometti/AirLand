import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import Swal from 'sweetalert2'

const BASE_URL = import.meta.env.VITE_BACK_URL || 'http://localhost:3001/api'

export function PaymentSuccess() {

  const navigate = useNavigate()

  useEffect(() => {
    Swal.fire({
      title: 'Successful purchase!',
      icon: 'success',
      timer: 2000,
      timerProgressBar: true,
      showConfirmButton: false
    }).then((result) => {
      if (result.dismiss === Swal.DismissReason.timer) {
        axios.post(
          `${BASE_URL}/notification`,
          {
            email, displayName,
          }
        )
        return navigate('/')
      }
    })
  }, [])

  return (
    <>
    </>
  )
}