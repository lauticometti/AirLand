import { useEffect, useState } from 'react'
import { FcGoogle } from 'react-icons/fc'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import {
	checkingCredentials,
	startGoogleSignIn,
	startLoginUserWithEmailPassword
} from '../../redux/slices/auth'
import logo from '../../assets/icons/air_land-black.svg'
import './LoginForm.css'

const formData = {
	email: '',
	password: ''
}

export function LoginForm() {
	const { status, errorMessage } = useSelector(state => state.auth)
	const [form, setForm] = useState(formData)
	const [shown, setShown] = useState(false)
	const dispatch = useDispatch()

	const handleChange = event => {
		setForm({
			...form,
			[event.target.name]: event.target.value
		})
	}

	const handleSubmit = event => {
		event.preventDefault()
		setForm(formData)
		dispatch(startLoginUserWithEmailPassword(form))
	}
	const switchShown = () => setShown(!shown)

	useEffect(() => {
		if (status === 'not-authenticated' && errorMessage) {
			alert(errorMessage)
		}
		dispatch(checkingCredentials())
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
									placeholder='user@mail.com'
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
						<div>
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
