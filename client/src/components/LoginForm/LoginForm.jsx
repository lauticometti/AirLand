import { useState } from "react"

export function LoginForm() {

  const [form, setForm] = useState({
    email: '',
    password: ''
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
      email: '',
      password: ''
    })
  }

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
        </div>
      </form>
    </div>
  )
}
