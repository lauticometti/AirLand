import { useEffect, useState } from 'react'
import { FcGoogle } from 'react-icons/fc'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import {
	checkingCredentials,
	startGoogleSignIn,
	startRegistrationUserWithEmailPassword
} from '../../redux/slices/auth'
import { toast } from 'react-toastify'
import logo from '../../assets/icons/air_land-black.svg'
import registerHasErrors from '../../helpers/registerHasErrors'
import './RegisterForm.css'

const formData = {
	displayName: '',
	email: '',
	password: '',
	repeatPassword: ''
}

const formErrors = {
	displayName: '',
	email: '',
	password: '',
	repeatPassword: ''
}

export function RegisterForm() {
	const { status, errorMessage } = useSelector(state => state.auth)
	const [form, setForm] = useState(formData)
	const [errors, setErrors] = useState(formErrors)
	const [shown, setShown] = useState(false)
	const dispatch = useDispatch()

	const handleChange = event => {
		setForm({
			...form,
			[event.target.name]: event.target.value
		})
	}

	const handleErrors = e => {
		const { name, value } = e.target
		const originalPassword = form.password
		const error = registerHasErrors(name, value, originalPassword)
		if (error) {
			setErrors({
				...errors,
				[name]: error
			})
		} else {
			setErrors({
				...errors,
				[name]: ''
			})
		}
	}

	const handleSubmit = event => {
		event.preventDefault()
		setForm(formData)
		dispatch(startRegistrationUserWithEmailPassword(form))
	}
	const switchShown = () => setShown(!shown)

	useEffect(() => {
		let alert
		if (status === 'not-authenticated' && errorMessage) {
			if (errorMessage === 'Firebase: Error (auth/email-already-in-use).')
				alert = 'Email already in use'
			if (errorMessage === 'Firebase: Error (auth/missing-email).')
				alert = 'Missing email'
			if (errorMessage === 'Firebase: Error (auth/internal-error).')
				alert = 'Internal error'
			if (errorMessage === 'Firebase: Error (auth/invalid-email).')
				alert = 'Invalid email'
		}
		toast.error(alert, {
			position: 'bottom-right',
			autoClose: 2000,
			hideProgressBar: false,
			closeOnClick: true,
			theme: 'dark'
		})
		dispatch(checkingCredentials())
	}, [status])

	return (
		<div className='registerContainer'>
			<Link to='/' className='logoContainer'>
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
									placeholder='Name'
									type='text'
									name='displayName'
									id='displayName'
									onChange={handleChange}
									onBlur={handleErrors}
									value={form.displayName}
								/>
							</div>
							{errors.displayName ? (
								<span className='errors'>{errors.displayName}</span>
							) : null}
							<div className='field input-field'>
								<input
									className='input'
									placeholder='Email'
									type='email'
									name='email'
									id='email'
									onChange={handleChange}
									onBlur={handleErrors}
									value={form.email}
								/>
							</div>
							{errors.email ? (
								<span className='errors'>{errors.email}</span>
							) : null}
							<div className='field input-field'>
								<input
									className='password'
									placeholder='Create password'
									type={shown ? 'text' : 'password'}
									name='password'
									id='password'
									onChange={handleChange}
									onBlur={handleErrors}
									value={form.password}
								/>

								<i className='bx bx-hide eye-icon' onClick={switchShown}></i>
							</div>
							{errors.password ? (
								<span className='errors'>{errors.password}</span>
							) : null}
							<div className='field input-field'>
								<input
									className='password'
									placeholder='Confirm password'
									type={shown ? 'text' : 'password'}
									name='repeatPassword'
									id='repeatPassword'
									onChange={handleChange}
									onBlur={handleErrors}
									value={form.repeatPassword}
								/>

								<i className='bx bx-hide eye-icon' onClick={switchShown}></i>
							</div>
							{errors.repeatPassword ? (
								<span className='errors'>{errors.repeatPassword}</span>
							) : null}

							<div
								className={`field button-field ${
									Object.values(form).some(input => input === '') ||
									Object.values(errors).some(input => input !== '')
										? 'disabled-button'
										: ''
								}`}
							>
								<button
									disabled={
										Object.values(form).some(input => input === '') ||
										Object.values(errors).some(input => input !== '')
									}
								>
									Sign Up
								</button>
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
