import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Footer, Navbar } from '../../components'
import { getPayment } from '../../redux'
import styles from './Checkout.module.css'

export function Checkout() {
	const { uid } = useSelector(state => state.auth)
	const { totalPrice } = useSelector(state => state.shopping)
	const dispatch = useDispatch()

	const [form, setForm] = useState({
		zipCode: '',
		streetName: '',
		streetNumber: '',
		cityName: '',
		stateName: '',
		countryName: 'Argentina'
	})

	const handleCheckoutSubmit = event => {
		event.preventDefault()
		dispatch(getPayment(uid, form, totalPrice))
	}

	const handleInputChange = event => {
		setForm({
			...form,
			[event.target.name]: event.target.value
		})
	}

	return (
		<>
			<Navbar />
			<div className={styles.formContainer}>
				<h2 className={styles.title}>Checkout details</h2>
				<form className={styles.form} onSubmit={handleCheckoutSubmit}>
					<h3 className={styles.formTitle}>Shipping address</h3>
					<section>
						<label htmlFor='streetName' className={styles.cityLabel}>
							Street Name
						</label>
						<input
							type='text'
							id='streetName'
							className={styles.cityInput}
							name='streetName'
							value={form.streetName}
							onChange={handleInputChange}
						/>
					</section>
					<section>
						<label htmlFor='streetNumber' className={styles.stateLabel}>
							Street Number
						</label>
						<input
							type='text'
							id='streetNumber'
							className={styles.stateInput}
							name='streetNumber'
							value={form.streetNumber}
							onChange={handleInputChange}
						/>
					</section>

					<section>
						<label htmlFor='cityName' className={styles.phoneLabel}>
							City
						</label>
						<input
							type='text'
							id='cityName'
							className={styles.phoneInput}
							name='cityName'
							value={form.cityName}
							onChange={handleInputChange}
						/>
					</section>
					<section className={styles.selectContainer}>
						<label htmlFor='addAddress_province'>
							Province <span className={styles.asterisc}>*</span>
						</label>
						<select
							name='stateName'
							value={form.province}
							onChange={handleInputChange}
						>
							<option value=''>Choose your province</option>
							<option value='Buenos Aires'>Buenos Aires</option>
							<option value='Catamarca'>Catamarca</option>
							<option value='Chaco'>Chaco</option>
							<option value='Chubut'>Chubut</option>
							<option value='C.A.B.A.'>C.A.B.A.</option>
							<option value='Cordoba'>Cordoba</option>
							<option value='Corrientes'>Corrientes</option>
							<option value='Entre Ríos'>Entre Ríos</option>
							<option value='Formosa'>Formosa</option>
							<option value='Jujuy'>Jujuy</option>
							<option value='La Pampa'>La Pampa</option>
							<option value='La Rioja'>La Rioja</option>
							<option value='Mendoza'>Mendoza</option>
							<option value='Misiones'>Misiones</option>
							<option value='Neuquén'>Neuquén</option>
							<option value='Río Negro'>Río Negro</option>
							<option value='Salta'>Salta</option>
							<option value='San Juan'>San Juan</option>
							<option value='San Luis'>San Luis</option>
							<option value='Santa Cruz'>Santa Cruz</option>
							<option value='Santa Fe'>Santa Fe</option>
							<option value='Santiago del Estero'>Santiago del Estero</option>
							<option value='Tierra del Fuego'>Tierra del Fuego</option>
							<option value='Tucumán'>Tucumán</option>
						</select>
					</section>
					<section>
						<label htmlFor='zipCode' className={styles.zipCodeLabel}>
							Zip code
						</label>
						<input
							type='text'
							id='zipCode'
							className={styles.zipCodeInput}
							name='zipCode'
							value={form.zipCode}
							onChange={handleInputChange}
						/>
					</section>

					<p htmlFor='countryName' className={styles.country}>
						Country: <span>AR</span>
					</p>

					<button
						className={styles.paymentButton}
						disabled={Object.values(form).some(input => input === '')}
					>
						Go payment
					</button>
				</form>
			</div>
			<Footer />
		</>
	)
}
