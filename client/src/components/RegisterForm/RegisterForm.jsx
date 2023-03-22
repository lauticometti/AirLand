import { useEffect, useState } from 'react'
import { FcGoogle } from 'react-icons/fc'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import {
	startGoogleSignIn,
	startRegistrationUserWithEmailPassword
} from '../../redux/slices/auth'
import logo from '../../assets/air_land-black.svg'
import './RegisterForm.css'

const formData = {
	displayName: '',
	email: '',
	password: '',
	repeatPassword: ''
}

export function RegisterForm() {
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
		dispatch(startRegistrationUserWithEmailPassword(form))
		// navigate('/')
	}
	const switchShown = () => setShown(!shown)

	useEffect(() => {
		if (status === 'not-authenticated') return alert(errorMessage)
		if (status === 'authenticated') return navigate('/')
	}, [status])

	return (
		<div>
			<Link to='/'>
				<img src={logo} alt='logo' className='logo' />
			</Link>
			<section className='container forms'>
				<div className='form login'>
					<div className='form-content'>
						<header>Sign Up</header>
						<form action='' onSubmit={handleSubmit}>
							<div className='field input-field'>
								<input
									className='input'
									placeholder='name'
									type='text'
									name='displayName'
									id='displayName'
									onChange={handleChange}
									value={form.displayName}
								/>
							</div>
							<div className='field input-field'>
								<input
									className='input'
									placeholder='Email'
									type='email'
									name='email'
									id='email'
									onChange={handleChange}
									value={form.email}
								/>
							</div>
							<div className='field input-field'>
								<input
									className='password'
									placeholder='Create password'
									type={shown ? 'text' : 'password'}
									name='password'
									id='password'
									onChange={handleChange}
									value={form.password}
								/>
								<i className='bx bx-hide eye-icon' onClick={switchShown}></i>
							</div>
							<div className='field input-field'>
								<input
									className='password'
									placeholder='Confirm password'
									type={shown ? 'text' : 'password'}
									name='repeatPassword'
									id='repeatPassword'
									onChange={handleChange}
									value={form.repeatPassword}
								/>
								<i className='bx bx-hide eye-icon' onClick={switchShown}></i>
							</div>

							<div className='field button-field'>
								<button>Sign Up</button>
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
							Already have an account?{' '}
							<Link className='link' to='/login'>
								Login
							</Link>
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}
