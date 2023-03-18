import { useEffect, useState } from "react"
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { startRegistrationUserWithEmailPassword } from "../../redux/slices/auth"

const formData = {
  displayName: '',
  email: '',
  password: '',
  repeatPassword: ''
}

export function RegisterForm() {

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
    dispatch(startRegistrationUserWithEmailPassword(form))
  }

  useEffect(() => {
    if (status === 'not-authenticated') return alert(errorMessage)
    if (status === 'authenticated') return navigate('/')
  }, [status])

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="displayName">FullName: </label>
          <input type="text" name="displayName" id="displayName" placeholder="Ej: rodolfo14" value={form.displayName} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="email">E-Mail:</label>
          <input type="email" name="email" id="email" placeholder="Ej: usuario@correo.com" value={form.email} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" value={form.password} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="repeatPassword">Repeat Password</label>
          <input type="password" name="repeatPassword" id="repeatPassword" value={form.repeatPassword} onChange={handleChange} />
        </div>
        <div>
          <button>Sign Up</button>
        </div>
        <div>
          {/* Google's button */}
        </div>
      </form>
    </div>
  )
}