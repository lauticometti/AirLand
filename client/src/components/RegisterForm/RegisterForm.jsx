import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { startRegistrationUserWithEmailPassword } from '../../redux/slices/auth'
import {
	MDBBtn,
	MDBContainer,
	MDBCard,
	MDBCardBody,
	MDBInput,
	MDBCheckbox
} from 'mdb-react-ui-kit'

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
	}

	useEffect(() => {
		if (status === 'not-authenticated') return alert(errorMessage)
		if (status === 'authenticated') return navigate('/')
	}, [status])

	return (
		<form action='' onSubmit={handleSubmit}>
			<MDBContainer
				fluid
				className='d-flex align-items-center justify-content-center bg-image'
				style={{
					backgroundImage:
						'url(https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp)'
				}}
			>
				<div className='mask gradient-custom-3'></div>
				<MDBCard className='m-5' style={{ maxWidth: '600px' }}>
					<MDBCardBody className='px-5'>
						<h2 className='text-uppercase text-center mb-5'>
							Create an account
						</h2>
						<MDBInput
							onChange={handleChange}
							name='displayName'
							wrapperClass='mb-4'
							label='Your Name'
							size='lg'
							id='form1'
							type='text'
						/>
						<MDBInput
							onChange={handleChange}
							name='email'
							wrapperClass='mb-4'
							label='Your Email'
							size='lg'
							id='form2'
							type='email'
						/>
						<MDBInput
							onChange={handleChange}
							name='password'
							wrapperClass='mb-4'
							label='Password'
							size='lg'
							id='form3'
							type='password'
						/>
						<MDBInput
							onChange={handleChange}
							name='repeatPassword'
							wrapperClass='mb-4'
							label='Repeat your password'
							size='lg'
							id='form4'
							type='password'
						/>
						<div className='d-flex flex-row justify-content-center mb-4'>
							<MDBCheckbox
								name='flexCheck'
								id='flexCheckDefault'
								label='I agree all statements in Terms of service'
							/>
						</div>
						<MDBBtn className='mb-4 w-100 gradient-custom-4' size='lg'>
							Register
						</MDBBtn>
					</MDBCardBody>
				</MDBCard>
			</MDBContainer>
		</form>
	)
}

/* <div>
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
          
          </div>
          </form>
        </div> */
