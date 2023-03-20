import { useEffect, useState } from 'react'
import { FcGoogle } from 'react-icons/fc'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {
	startGoogleSignIn,
	startLoginUserWithEmailPassword
} from '../../redux/slices/auth'
import {
	MDBBtn,
	MDBContainer,
	MDBRow,
	MDBCol,
	MDBCard,
	MDBCardBody,
	MDBInput,
	MDBIcon,
	MDBCheckbox
} from 'mdb-react-ui-kit'

const formData = {
	email: '',
	password: ''
}

export function LoginForm() {
	const { status, errorMessage } = useSelector(state => state.auth)
	const [form, setForm] = useState(formData)
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

	useEffect(() => {
		if (status === 'not-authenticated') return alert(errorMessage)
		if (status === 'authenticated') return navigate('/')
	}, [status])

	return (
		<form action='' onSubmit={handleSubmit}>
			<MDBContainer fluid>
				<MDBRow className='d-flex justify-content-center align-items-center h-100'>
					<MDBCol col='12'>
						<MDBCard
							className='bg-white my-5 mx-auto'
							style={{ borderRadius: '1rem', maxWidth: '500px' }}
						>
							<MDBCardBody className='p-5 w-100 d-flex flex-column'>
								<h2 className='fw-bold mb-2 text-center'>Sign in</h2>
								<p className='text-white-50 mb-3'>
									Please enter your login and password!
								</p>

								<MDBInput
									onChange={handleChange}
									name='email'
									wrapperClass='mb-4 w-100'
									label='Email address'
									id='formControlLg'
									type='email'
									value={form.email}
								/>
								<MDBInput
									onChange={handleChange}
									name='password'
									wrapperClass='mb-4 w-100'
									label='Password'
									id='formControlLg'
									type='password'
									value={form.password}
								/>

								<MDBCheckbox
									name='flexCheck'
									id='flexCheckDefault'
									className='mb-4'
									label='Remember password'
								/>

								<MDBBtn size='lg'>Login</MDBBtn>

								<hr className='my-4' />

								<MDBBtn
									className='mb-2 w-100'
									size='lg'
									style={{ backgroundColor: '#dd4b39' }}
									onClick={() => dispatch(startGoogleSignIn())}
								>
									<MDBIcon fab icon='google' className='mx-2' />
									<FcGoogle />
									Sign in with google
								</MDBBtn>

								<MDBBtn
									className='mb-4 w-100'
									size='lg'
									style={{ backgroundColor: '#3b5998' }}
								>
									<MDBIcon fab icon='facebook-f' className='mx-2' />
									Sign in with facebook
								</MDBBtn>
							</MDBCardBody>
						</MDBCard>
					</MDBCol>
				</MDBRow>
			</MDBContainer>
		</form>
	)
}
/* <div>
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
    </div> */
