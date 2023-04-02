import PropTypes from 'prop-types'
import { useState } from 'react'
import { useDispatch } from 'react-redux'

import rightArrow from '../../../../../assets/icons/right_arrow-largeWhite.svg'
import { editUserPassword } from '../../../../../redux/slices/auth'

import styles from './EditPassword.module.css'

export default function EditPassword({ onClose }) {

	const dispatch = useDispatch()
	const [password, setPassword] = useState('')

	const handleInputChange = (event) => {
		setPassword(event.target.value)
	}

	const handleSubmit = (event) => {
		event.preventDefault()
		dispatch(editUserPassword(password))
	}

	return (
		<div className={styles.editPasswordContainer}>
			<h3 className={styles.editPasswordTitle}>Edit your password</h3>
			{/* <section className={styles.oldPasswordInputContainer}>
				<label htmlFor='editPassword_OldPassword'>
					Old password <span className={styles.asterisc}>*</span>
				</label>
				<input type='text' id='editPassword_OldPassword' />
			</section> */}

			<section className={styles.newPasswordInputContainer}>
				<label htmlFor='editPassword_newPassword'>
					New password <span className={styles.asterisc}>*</span>
				</label>
				<input type='text' id='editPassword_newPassword' value={password} onChange={handleInputChange} />
			</section>
			<button
				onClick={(e) => {
					onClose()
					handleSubmit(e)
				}}
				className={styles.button}
				disabled={password.length >= 6 ? false : true}
			>
				Update Password
				<img src={rightArrow} alt='' />
			</button>
			<button onClick={onClose} className={styles.buttonCancel}>
				Cancel
			</button>
		</div>
	)
}

EditPassword.propTypes = {
	onClose: PropTypes.func.isRequired
}
