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
		countryName: ''
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
					<h3 className={styles.formTitle}>Shipping adress</h3>
					<label htmlFor='streetName' className={styles.cityLabel}>
						Street Name
					</label>
					<input
						type='text'
						id='streetName'
						placeholder='Street Name'
						className={styles.cityInput}
						name='streetName'
						value={form.streetName}
						onChange={handleInputChange}
					/>
					<label htmlFor='streetNumber' className={styles.stateLabel}>
						Street Number
					</label>
					<input
						type='text'
						id='streetNumber'
						placeholder='Street Number'
						className={styles.stateInput}
						name='streetNumber'
						value={form.streetNumber}
						onChange={handleInputChange}
					/>
					<label htmlFor='zipCode' className={styles.zipCodeLabel}>
						Zip code
					</label>
					<input
						type='text'
						id='zipCode'
						placeholder='Zip code'
						className={styles.zipCodeInput}
						name='zipCode'
						value={form.zipCode}
						onChange={handleInputChange}
					/>
					<label htmlFor='cityName' className={styles.phoneLabel}>
						City
					</label>
					<input
						type='text'
						id='cityName'
						placeholder='City'
						className={styles.phoneInput}
						name='cityName'
						value={form.cityName}
						onChange={handleInputChange}
					/>
					<label htmlFor='stateName' className={styles.nameLabel}>
						State
					</label>
					<input
						type='text'
						id='stateName'
						placeholder='State'
						className={styles.nameInput}
						name='stateName'
						value={form.stateName}
						onChange={handleInputChange}
					/>
					<label htmlFor='countryName' className={styles.addressLabel}>
						Country
					</label>
					<input
						type='text'
						id='countryName'
						placeholder='Country'
						className={styles.addressInput}
						name='countryName'
						value={form.countryName}
						onChange={handleInputChange}
					/>
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
