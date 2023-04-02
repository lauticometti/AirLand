import PropTypes from 'prop-types'
import rightArrow from '../../../../../assets/icons/right_arrow-largeWhite.svg'
import styles from './EditAddress.module.css'
import { useState } from 'react'

export default function EditAddress({ onClose }) {
	const [input, setInput] = useState({
		firstName: ''
	})

	const handleFirstName = event => {
		const value = event.target.value
		setInput({
			...input,
			[event.target.name]: value
		})
	}

	return (
		<div className={styles.addAddressContainer}>
			<h3 className={styles.addAddressTitle}>Edit address</h3>
			<div className={styles.fullNameContainer}>
				<section>
					<label htmlFor='addAddress_firstName'>
						First Name <span className={styles.asterisc}>*</span>
					</label>
					<input
						type='text'
						name='firstName'
						id='addAddress_firstName'
						onChange={handleFirstName}
						value={input.firstName}
					/>
				</section>
				<section>
					<label htmlFor='addAddress_lastName'>
						Last name <span className={styles.asterisc}>*</span>
					</label>
					<input type='text' id='addAddress_lastName' />
				</section>
			</div>

			<section>
				<label htmlFor='addAddress_street'>
					Street Address <span className={styles.asterisc}>*</span>
				</label>
				<input type='text' id='addAddress_street' />
			</section>

			<div className={styles.cityStateContainer}>
				<section>
					<label htmlFor='addAddress_city'>
						City/Town <span className={styles.asterisc}>*</span>
					</label>
					<input type='text' id='addAddress_city' />
				</section>
				<section className={styles.cityStateSelectSection}>
					<select name='province'>
						<option value='province'>Province</option>
						<option value='buenosAires'>Buenos Aires</option>
					</select>
				</section>
			</div>
			<section className={styles.zipCodeSection}>
				<label htmlFor='addAddress_zipCode'>
					Zip Code <span className={styles.asterisc}>*</span>
				</label>
				<input type='text' id='addAddress_zipCode' />
			</section>
			<span className={styles.countrySpan}>
				<strong>Country: </strong>
				AR
			</span>

			<section>
				<label htmlFor='addAddress_phoneNumber'>
					Phone Number <span className={styles.asterisc}>*</span>
				</label>
				<input type='text' id='addAddress_phoneNumber' />
			</section>

			<button onClick={onClose} className={styles.button}>
				Save
				<img src={rightArrow} alt='' />
			</button>
			<button onClick={onClose} className={styles.buttonCancel}>
				Cancel
			</button>
		</div>
	)
}

EditAddress.propTypes = {
	onClose: PropTypes.func.isRequired
}
