import PropTypes from 'prop-types'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import rightArrow from '../../../../../assets/icons/right_arrow-largeWhite.svg'
import { editUserInfo } from '../../../../../redux/slices/auth'

import styles from './EditData.module.css'


export default function EditData({ onClose }) {

	const dispatch = useDispatch()
	const { uid, firstName, lastName, birthDate, gender } = useSelector(state => state.auth)
	const [form, setForm] = useState({
		firstName: firstName,
		lastName: lastName,
		birthMonth: birthDate.split('/')[0],
		birthDay: birthDate.split('/')[1],
		birthYear: birthDate.split('/')[2],
		gender: gender
	})

	const handleInputChange = (e) => {
		setForm({
			...form,
			[e.target.name]: e.target.value
		})
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		const submitForm = {
			firstName: form.firstName,
			lastName: form.lastName,
			birthDate: `${form.birthMonth}/${form.birthDay}/${form.birthYear}`,
			gender: form.gender
		}
		dispatch(editUserInfo(uid, submitForm))
		setForm({
			firstName: firstName,
			lastName: lastName,
			birthMonth: birthDate.split('/')[0],
			birthDay: birthDate.split('/')[1],
			birthYear: birthDate.split('/')[2],
			gender: gender
		})
	}

	return (
		<div className={styles.editDataContainer}>
			<h3 className={styles.editDataTitle}>Edit your details</h3>

			<section className={styles.firstNameInputContainer}>
				<label htmlFor='editData_FirstName'>
					First Name <span className={styles.asterisc}>*</span>
				</label>
				<input type='text' id='editData_FirstName' name='firstName' value={form.firstName} onChange={handleInputChange} />
			</section>
			<section className={styles.lastNameInputContainer}>
				<label htmlFor='editData_LastName'>
					Last Name <span className={styles.asterisc}>*</span>
				</label>
				<input type='text' id='editData_LastName' name='lastName' value={form.lastName} onChange={handleInputChange} />
			</section>

			<div className={styles.birthDate}>
				<h4>Date of birth</h4>
				<div className={styles.birthDateInputs}>
					<section className={styles.birthDateMonthInputContainer}>
						<label htmlFor='editData_BirthDateMonth'>
							mm <span className={styles.asterisc}>*</span>
						</label>
						<input type='text' id='editData_BirthDateMonth' name='birthMonth' value={form.birthMonth} onChange={handleInputChange} />
					</section>
					<section className={styles.birthDateDayInputContainer}>
						<label htmlFor='editData_BirthDateDay'>
							dd <span className={styles.asterisc}>*</span>
						</label>
						<input type='text' id='editData_BirthDateDay' name='birthDay' value={form.birthDay} onChange={handleInputChange} />
					</section>
					<section className={styles.birthDateYearInputContainer}>
						<label htmlFor='editData_BirthDateYear'>
							yyyy <span className={styles.asterisc}>*</span>
						</label>
						<input type='text' id='editData_BirthDateYear' name='birthYear' value={form.birthYear} onChange={handleInputChange} />
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
							name='gender'
							value='male'
							onChange={handleInputChange}
							defaultChecked={form.gender === 'male' ? true : false}
						/>
						<label htmlFor='editData_GenderMaleInput'>Male</label>
					</section>
					<section className={styles.genderFemaleInputContainer}>
						<input
							type='radio'
							id='editData_GenderFemaleInput'
							name='gender'
							value='female'
							onChange={handleInputChange}
							defaultChecked={form.gender === 'female' ? true : false}
						/>
						<label htmlFor='editData_GenderFemaleInput'>Female</label>
					</section>
				</div>
			</div>
			<button
				onClick={(e) => {
					onClose()
					handleSubmit(e)
				}}
				className={styles.button}
				disabled={Object.values(form).some(input => input === '') ? true : false}
			>
				Update Details
				<img src={rightArrow} alt='' />
			</button>
			<button
				onClick={() => {
					onClose()
					setForm({
						firstName: firstName,
						lastName: lastName,
						birthMonth: birthDate.split('/')[0],
						birthDay: birthDate.split('/')[1],
						birthYear: birthDate.split('/')[2],
						gender: gender
					})
				}}
				className={styles.buttonCancel}
			>
				Cancel
			</button>
		</div>
	)
}

EditData.propTypes = {
	onClose: PropTypes.func.isRequired
}
