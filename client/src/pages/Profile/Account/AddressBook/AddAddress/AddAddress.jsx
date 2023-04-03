import PropTypes from 'prop-types'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import rightArrow from '../../../../../assets/icons/right_arrow-largeWhite.svg'
import { editUserAddress } from '../../../../../redux/slices/auth'
import styles from './AddAddress.module.css'

const formData = {
	streetName: '',
	streetNumber: '',
	city: '',
	province: '',
	zipCode: '',
	country: 'AR',
	phone: ''
}

export default function AddAddress({ onClose }) {
	const [form, setForm] = useState(formData)
	const dispatch = useDispatch()
	const { uid } = useSelector(state => state.auth)

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
					/>
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
					/>
				</section>
			</div>

			{/* <section>
				<label htmlFor='addAddress_street'>
					Street Address <span className={styles.asterisc}>*</span>
				</label>
				<input type='text' id='addAddress_street' />
			</section> */}

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
					/>
				</section>
				<section className={styles.cityStateSelectSection}>
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
				/>
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
				/>
			</section>

			<button
				onClick={e => {
					onClose()
					handleSubmit(e)
				}}
				className={styles.button}
				disabled={Object.values(form).some(input => input === '')}
			>
				Save
				<img src={rightArrow} alt='' />
			</button>
			<button
				onClick={() => {
					onClose()
					setForm(formData)
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
