import styles from './EditPassword.module.css'

export default function EditPassword() {
	return (
		<div className={styles.editPasswordContainer}>
			<h3 className={styles.editPasswordTitle}>Edit your password</h3>
			<section className={styles.oldPasswordInputContainer}>
				<label htmlFor='editPassword_OldPassword'>
					Old password <span className={styles.asterisc}>*</span>
				</label>
				<input type='text' id='editPassword_OldPassword' />
			</section>

			<section className={styles.newPasswordInputContainer}>
				<label htmlFor='editPassword_newPassword'>
					New password <span className={styles.asterisc}>*</span>
				</label>
				<input type='text' id='editPassword_newPassword' />
			</section>
		</div>
	)
}
