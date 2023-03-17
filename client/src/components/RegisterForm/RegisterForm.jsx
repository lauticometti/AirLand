import { useState } from "react"

export function RegisterForm() {

  const [form, setForm] = useState({
    username: '',
    email: '',
    password: '',
    repeatPassword: ''
  })

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    // TODO: enviar form, validar datos, mostrar errores
    console.log(form)
    setForm({
      username: '',
      email: '',
      password: '',
      repeatPassword: ''
    })
  }

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username: </label>
          <input type="text" name="username" id="username" placeholder="Ej: rodolfo14" value={form.username} onChange={handleChange} />
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