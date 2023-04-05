import axios from "axios"
import { useState } from "react"
import { useSelector } from "react-redux"
import StarsRating from 'react-star-rate'
import Swal from "sweetalert2"

const BASE_URL = import.meta.env.VITE_BACK_URL || 'http://localhost:3001/api'

export function AddReview({ onClose, sneakerID, sneakerName, sneakerImage }) {

  const { displayName, uid } = useSelector(state => state.auth)
  const [rating, setRating] = useState(0)
  const [comment, setComment] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    axios.post(
      `${BASE_URL}/sneakers/review/${sneakerID}/${uid}`,
      {
        name: displayName,
        comment: comment,
        stars: rating
      }
    )
      .then(({ data }) => {
        Swal.fire({
          title: data,
          icon: 'success',
          timer: 2000,
          showConfirmButton: false
        })
      })
  }

  return (
    <div>
      <form onSubmit={(e) => {
        onClose()
        handleSubmit(e)
      }}>
        <div>
          <div style={{ display: 'flex', textAlign: 'center', flexDirection: 'column' }}>
            <div>
              <h3>{sneakerName}</h3>
              <img src={sneakerImage.THUMBNAIL} alt="" />
            </div>
            <StarsRating
              value={rating}
              onChange={value => setRating(value)}
            />
          </div>
          <div style={{ textAlign: 'center' }}>
            <textarea name="comment" id="comment" cols="30" rows="10" value={comment} onChange={e => setComment(e.target.value)}></textarea>
          </div>
        </div>
        <div>
          <button style={{ width: '70px', height: '35px', backgroundColor: 'black', color: 'white' }}>Send</button>
        </div>
      </form>
    </div>
  )
}