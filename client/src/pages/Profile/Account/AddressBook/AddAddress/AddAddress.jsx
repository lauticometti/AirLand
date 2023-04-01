import PropTypes from 'prop-types'
import rightArrow from '../../../../../assets/icons/right_arrow-largeWhite.svg'
import styles from './AddAddress.module.css'

export default function AddAddress({ onClose }) {
	return (
		<div className={styles.addAddresContainer}>
			<h3 className={styles.addAddressTitle}>Add new address</h3>
			<div className={styles.fullNameContainer}>
				<section>
					<label htmlFor='addAddress_firstName'>
						First Name <span className={styles.asterisc}>*</span>
					</label>
					<input type='text' id='addAddress_firstName' />
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

AddAddress.propTypes = {
	onClose: PropTypes.func.isRequired
}
