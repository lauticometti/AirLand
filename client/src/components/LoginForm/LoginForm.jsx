import { useEffect, useState } from 'react'
import { FcGoogle } from 'react-icons/fc'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import {
	startGoogleSignIn,
	startLoginUserWithEmailPassword
} from '../../redux/slices/auth'
import logo from '../../assets/air_land-black.svg'
import './LoginForm.css'

const formData = {
	email: '',
	password: ''
}

export function LoginForm() {
	const { status, errorMessage } = useSelector(state => state.auth)
	const [form, setForm] = useState(formData)
	const [shown, setShown] = useState(false)
	const navigate = useNavigate()
	const dispatch = useDispatch()

	const handleChange = event => {
		setForm({
			...form,
			[event.target.name]: event.target.value
		})
	}

	const handleSubmit = event => {
		event.preventDefault()
		// TODO: enviar form, validar datos, mostrar errores
		setForm(formData)
		dispatch(startLoginUserWithEmailPassword(form))
		// navigate('/')
	}
	const switchShown = () => setShown(!shown)

	useEffect(() => {
		if (status === 'not-authenticated') return alert(errorMessage)
		if (status === 'authenticated') return navigate('/')
	}, [status])

	return (
		<div>
			<Link to='/' className='navLogo'>
				<img src={logo} alt='logo' className='logo' />
			</Link>
			<section className='container forms'>
				<div className='form login'>
					<div className='form-content'>
						<header>Login</header>
						<form action='' onSubmit={handleSubmit}>
							<div className='field input-field'>
								<input
									className='input'
									type='email'
									name='email'
									id='password'
									placeholder='usuario@correo.com'
									onChange={handleChange}
									value={form.email}
								/>
							</div>
							<div className='field input-field'>
								<input
									className='password'
									placeholder='password'
									type={shown ? 'text' : 'password'}
									name='password'
									id='password'
									onChange={handleChange}
									value={form.password}
								/>
								<i className='bx bx-hide eye-icon' onClick={switchShown}></i>
							</div>
							<div className='form-link'>
								<a href='#' className='forgot-pass'>
									Forgot password?
								</a>
							</div>
							<div className='field button-field'>
								<button>Sign In</button>
							</div>
							<div className='media-options'>
								<Link
									className='field google'
									onClick={() => dispatch(startGoogleSignIn())}
								>
									<FcGoogle
										style={{ width: '32px', height: '32px' }}
										onClick={() => dispatch(startGoogleSignIn())}
									/>
									<span>Login with Google</span>
								</Link>
							</div>
						</form>
						<div className='center'>
							<div>&nbsp;</div>
							Doesn&apos;t have an account?{' '}
							<Link className='link' to='/signup'>
								Sign Up
							</Link>
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}
/*  */
