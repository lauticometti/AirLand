import PropTypes from 'prop-types'
import { useState } from 'react'
import { useDispatch } from 'react-redux'

import rightArrow from '../../../../../assets/icons/right_arrow-largeWhite.svg'
import { editUserPassword } from '../../../../../redux/slices/auth'

import styles from './EditPassword.module.css'

export default function EditPassword({ onClose }) {
	const dispatch = useDispatch()
	const [password, setPassword] = useState('')
	const [errors, setErrors] = useState({
		password: ''
	})

	const handleErrors = e => {
		const { value } = event.target
		if (
			!value.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{8,}$/g)
		) {
			setErrors({
				password:
					'Password should contain at least 8 characters, a minus, a mayus, a number and a special character.'
			})
		} else {
			setErrors({
				password: ''
			})
		}
	}

	const handleInputChange = event => {
		setPassword(event.target.value)
	}

	const handleSubmit = event => {
		event.preventDefault()
		dispatch(editUserPassword(password))
	}

	return (
		<div className={styles.editPasswordContainer}>
			<h3 className={styles.editPasswordTitle}>Edit your password</h3>

			<section className={styles.newPasswordInputContainer}>
				<label htmlFor='editPassword_newPassword'>
					New password <span className={styles.asterisc}>*</span>
				</label>
				<input
					type='text'
					id='editPassword_newPassword'
					name='password'
					value={password}
					onChange={handleInputChange}
					onBlur={handleErrors}
				/>
				{errors.password ? <span>{errors.password}</span> : null}
			</section>
			<button
				onClick={e => {
					onClose()
					handleSubmit(e)
				}}
				className={styles.button}
				disabled={
					!password.match(
						/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{8,}$/g
					)
				}
			>
				Update Password
				<img src={rightArrow} alt='' />
			</button>
			<button
				onClick={() => {
					setErrors({
						password: ''
					})
					onClose()
				}}
				className={styles.buttonCancel}
			>
				Cancel
			</button>
		</div>
	)
}

EditPassword.propTypes = {
	onClose: PropTypes.func.isRequired
}
