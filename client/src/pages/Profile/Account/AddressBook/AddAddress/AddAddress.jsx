import PropTypes from 'prop-types'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import rightArrow from '../../../../../assets/icons/right_arrow-largeWhite.svg'
import { editUserAddress } from '../../../../../redux/slices/auth'
import styles from './AddAddress.module.css'
import addressDataHasError from '../../../../../helpers/addressDataHasError'

const formData = {
	streetName: '',
	streetNumber: '',
	city: '',
	province: '',
	zipCode: '',
	country: 'AR',
	phone: ''
}

const errorsData = {
	streetName: '',
	streetNumber: '',
	city: '',
	zipCode: '',
	phone: ''
}

export default function AddAddress({ onClose }) {
	const [form, setForm] = useState(formData)
	const dispatch = useDispatch()
	const { uid } = useSelector(state => state.auth)

	const [errors, setErrors] = useState(errorsData)

	const handleErrors = e => {
		const { name, value } = e.target

		const error = addressDataHasError(name, value)
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

	const handleInputChange = e => {
		setForm({
			...form,
			[e.target.name]: e.target.value
		})
	}

	const handleSubmit = e => {
		e.preventDefault()
		dispatch(editUserAddress(uid, form))
	}

	return (
		<div className={styles.addAddressContainer}>
			<h3 className={styles.addAddressTitle}>Add new address</h3>
			<div className={styles.fullNameContainer}>
				<section>
					<label htmlFor='addAddress_streetName'>
						Street Name <span className={styles.asterisc}>*</span>
					</label>
					<input
						type='text'
						id='addAddress_streetName'
						name='streetName'
						value={form.streetName}
						onChange={handleInputChange}
						onBlur={handleErrors}
					/>
					{errors.streetName ? (
						<span className={styles.error}>{errors.streetName}</span>
					) : null}
				</section>
				<section>
					<label htmlFor='addAddress_streetNumber'>
						Street Number <span className={styles.asterisc}>*</span>
					</label>
					<input
						type='text'
						id='addAddress_streetNumber'
						name='streetNumber'
						value={form.streetNumber}
						onChange={handleInputChange}
						onBlur={handleErrors}
					/>
					{errors.streetNumber ? (
						<span className={styles.error}>{errors.streetNumber}</span>
					) : null}
				</section>
			</div>

			<div className={styles.cityStateContainer}>
				<section>
					<label htmlFor='addAddress_city'>
						City/Town <span className={styles.asterisc}>*</span>
					</label>
					<input
						type='text'
						id='addAddress_city'
						name='city'
						value={form.city}
						onChange={handleInputChange}
						onBlur={handleErrors}
					/>
					{errors.city ? (
						<span className={styles.error}>{errors.city}</span>
					) : null}
				</section>
				<section className={styles.cityStateSelectSection}>
					<label htmlFor='addAddress_province'>
						Province <span className={styles.asterisc}>*</span>
					</label>
					<select
						name='province'
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
			</div>
			<section className={styles.zipCodeSection}>
				<label htmlFor='addAddress_zipCode'>
					Zip Code <span className={styles.asterisc}>*</span>
				</label>
				<input
					type='text'
					id='addAddress_zipCode'
					name='zipCode'
					value={form.zipCode}
					onChange={handleInputChange}
					onBlur={handleErrors}
				/>
				{errors.zipCode ? (
					<span className={styles.error}>{errors.zipCode}</span>
				) : null}
			</section>
			<span className={styles.countrySpan}>
				<strong>Country: </strong>
				AR
			</span>

			<section>
				<label htmlFor='addAddress_phoneNumber'>
					Phone Number <span className={styles.asterisc}>*</span>
				</label>
				<input
					type='text'
					id='addAddress_phoneNumber'
					name='phone'
					value={form.phone}
					onChange={handleInputChange}
					onBlur={handleErrors}
				/>
				{errors.phone ? (
					<span className={styles.error}>{errors.phone}</span>
				) : null}
			</section>

			<button
				onClick={e => {
					onClose()
					handleSubmit(e)
				}}
				className={styles.button}
				disabled={
					Object.values(form).some(input => input === '') ||
					Object.values(errors).some(input => input !== '')
				}
			>
				Save
				<img src={rightArrow} alt='' />
			</button>
			<button
				onClick={() => {
					onClose()
					setForm(formData)
					setErrors(errorsData)
				}}
				className={styles.buttonCancel}
			>
				Cancel
			</button>
		</div>
	)
}

AddAddress.propTypes = {
	onClose: PropTypes.func.isRequired
}
