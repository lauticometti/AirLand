import React, { useState } from 'react'
import { firebaseStorage } from '../../../../firebase'
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage'

export function CreateSneaker() {

  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState('')
  const [status, setStatus] = useState(false)
  const [type, setType] = useState('')
  const [size, setSize] = useState({
    '38': '',
    '39': '',
    '40': '',
    '41': '',
    '42': '',
    '43': '',
    '44': '',
  })
  const [images, setImages] = useState({
    FULL: '',
    LEFT: '',
    RIGHT: '',
    THUMBNAIL: '',
    TOPVIEW: ''
  })

  const handleSizeChange = (e) => {
    setSize({
      ...size,
      [e.target.name]: e.target.value
    })
  }

  const handleImageChange = (e) => {
    const file = e.target.files[0]

    const storageRef = ref(firebaseStorage, `Zapatillas(images)/${file.name}`)
    const uploadTask = uploadBytesResumable(storageRef, file)

    uploadTask.on(
      'state_changed',
      snapshot => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        console.log(progress)
      },
      error => {
        toast.error(error.message)
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then(downloadURL => {
          setImages({
            ...images,
            [e.target.name]: downloadURL
          })
          console.log('Image uploaded successfully.')
        })
      }
    )
  }

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" id='name' name='name' value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <input type="text" id='description' name='description' value={description} onChange={(e) => setDescription(e.target.value)} />
        </div>
        <div>
          <label htmlFor="price">Price</label>
          <input type="text" id='price' name='price' value={price} onChange={(e) => setPrice(e.target.value)} />
        </div>
        <div>
          <select name='status' id='status' value={status} onChange={(e) => setStatus(e.target.value)}>
            Status
            <option value={true}>True</option>
            <option value={false}>False</option>
          </select>
        </div>
        <div>
          <select name="type" id="type" value={type} onChange={(e) => setType(e.target.value)}>
            Type
            <option value="low">Low</option>
            <option value="mid">Mid</option>
            <option value="high">High</option>
          </select>
        </div>
        <div>
          <h4>Size</h4>
          <div>
            <label htmlFor="38">38: </label>
            <input type="number" name='38' value={size['38']} onChange={handleSizeChange} />
          </div>
          <div>
            <label htmlFor="39">39: </label>
            <input type="number" name='39' value={size['39']} onChange={handleSizeChange} />
          </div>
          <div>
            <label htmlFor="40">40: </label>
            <input type="number" name='40' value={size['40']} onChange={handleSizeChange} />
          </div>
          <div>
            <label htmlFor="41">41: </label>
            <input type="number" name='41' value={size['41']} onChange={handleSizeChange} />
          </div>
          <div>
            <label htmlFor="42">42: </label>
            <input type="number" name='42' value={size['42']} onChange={handleSizeChange} />
          </div>
          <div>
            <label htmlFor="43">43: </label>
            <input type="number" name='43' value={size['43']} onChange={handleSizeChange} />
          </div>
          <div>
            <label htmlFor="44">44: </label>
            <input type="number" name='44' value={size['44']} onChange={handleSizeChange} />
          </div>
          <div>
            <label htmlFor="45">45: </label>
            <input type="number" name='45' value={size['45']} onChange={handleSizeChange} />
          </div>
        </div>
        <div>
          <div>
            <label htmlFor="full">Full image:</label>
            <input type="file" id='full' accept='image/*' name='FULL' onChange={handleImageChange} />
          </div>
          <div>
            <label htmlFor="left">Left image:</label>
            <input type="file" id='left' name='LEFT' value={images.LEFT} onChange={handleImageChange} />
          </div>
          <div>
            <label htmlFor="right">Right image:</label>
            <input type="file" id='right' name='RIGHT' value={images.RIGHT} onChange={handleImageChange} />
          </div>
          <div>
            <label htmlFor="thumbnail">Thumbnail image:</label>
            <input type="file" id='thumbnail' name='THUMBNAIL' value={images.THUMBNAIL} onChange={handleImageChange} />
          </div>
          <div>
            <label htmlFor="topview">Top view image:</label>
            <input type="file" id='topview' name='TOPVIEW' value={images.TOPVIEW} onChange={handleImageChange} />
          </div>
        </div>
        <div>
          <button>
            Create
          </button>
        </div>
      </form>
    </>
  )
}

export default CreateSneaker