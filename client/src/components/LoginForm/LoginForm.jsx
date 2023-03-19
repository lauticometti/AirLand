import { useEffect, useState } from "react"
import { FcGoogle } from 'react-icons/fc'
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { startGoogleSignIn, startLoginUserWithEmailPassword } from "../../redux/slices/auth"

const formData = {
  email: '',
  password: ''
}

export function LoginForm() {

  const { status, errorMessage } = useSelector(state => state.auth)
  const [form, setForm] = useState(formData)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    // TODO: enviar form, validar datos, mostrar errores
    setForm(formData)
    dispatch(startLoginUserWithEmailPassword(form))
    // navigate('/')
  }

  useEffect(() => {
    if (status === 'not-authenticated') return alert(errorMessage)
    if (status === 'authenticated') return navigate('/')
  }, [status])

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">E-Mail: </label>
          <input type="email" name="email" id="password" placeholder="usuario@correo.com" onChange={handleChange} value={form.email} />
        </div>
        <div>
          <label htmlFor="password">Password: </label>
          <input type="password" name="password" id="password" onChange={handleChange} value={form.password} />
        </div>
        <div>
          <button>Sign In</button>
          <FcGoogle style={{ width: '32px', height: '32px' }} onClick={() => dispatch(startGoogleSignIn())} />
        </div>
        <div>
        </div>
      </form>
    </div>
  )
}
