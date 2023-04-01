import PropTypes from 'prop-types'
import rightArrow from '../../../../../assets/icons/right_arrow-largeWhite.svg'

import styles from './EditData.module.css'

export default function EditData({ onClose }) {
	return (
		<div className={styles.editDataContainer}>
			<h3 className={styles.editDataTitle}>Edit your details</h3>

			<section className={styles.firstNameInputContainer}>
				<label htmlFor='editData_FirstName'>
					First Name <span className={styles.asterisc}>*</span>
				</label>
				<input type='text' id='editData_FirstName' />
			</section>
			<section className={styles.lastNameInputContainer}>
				<label htmlFor='editData_LastName'>
					Last Name <span className={styles.asterisc}>*</span>
				</label>
				<input type='text' id='editData_LastName' />
			</section>

			<div className={styles.birthDate}>
				<h4>Date of birth</h4>
				<div className={styles.birthDateInputs}>
					<section className={styles.birthDateMonthInputContainer}>
						<label htmlFor='editData_BirthDateMonth'>
							mm <span className={styles.asterisc}>*</span>
						</label>
						<input type='text' id='editData_BirthDateMonth' />
					</section>
					<section className={styles.birthDateDayInputContainer}>
						<label htmlFor='editData_BirthDateDay'>
							dd <span className={styles.asterisc}>*</span>
						</label>
						<input type='text' id='editData_BirthDateDay' />
					</section>
					<section className={styles.birthDateYearInputContainer}>
						<label htmlFor='editData_BirthDateYear'>
							yyyy <span className={styles.asterisc}>*</span>
						</label>
						<input type='text' id='editData_BirthDateYear' />
					</section>
				</div>
			</div>

			<div className={styles.genderContainer}>
				<h4>Gender</h4>
				<div className={styles.genderInputs}>
					<section className={styles.genderMaleInputContainer}>
						<input
							type='radio'
							id='editData_GenderMaleInput'
							name='genderRadio'
						/>
						<label htmlFor='editData_GenderMaleInput'>Male</label>
					</section>
					<section className={styles.genderFemaleInputContainer}>
						<input
							type='radio'
							id='editData_GenderFemaleInput'
							name='genderRadio'
						/>
						<label htmlFor='editData_GenderFemaleInput'>Female</label>
					</section>
				</div>
			</div>
			<button onClick={onClose} className={styles.button}>
				Update Details
				<img src={rightArrow} alt='' />
			</button>
			<button onClick={onClose} className={styles.buttonCancel}>
				Cancel
			</button>
		</div>
	)
}

EditData.propTypes = {
	onClose: PropTypes.func.isRequired
}
