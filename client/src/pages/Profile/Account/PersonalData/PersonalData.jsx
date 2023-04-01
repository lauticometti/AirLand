import { useSelector } from 'react-redux'
import styles from './PersonalData.module.css'
import rightArrowLarge from '../../../../assets/icons/right_arrow-large.svg'
import { Modal } from '../../../../components'
import { useState } from 'react'

export default function PersonalData() {
	const { displayName, email } = useSelector(state => state.auth)

	const [show, setShow] = useState(false)

	const birthday = '2003/04/02'
	const password = '20030402'
	const gender = 'Male'

	return (
		<article className={styles.personalData}>
			<h3 className={styles.myDataTitle}>My details</h3>
			<p>Modify your personal details below to keep your account up to date.</p>
			<div className={styles.myData}>
				<h4 className={styles.myDataDetail}>Details</h4>
				<p className={styles.myDataName}>{displayName}</p>
				<p className={styles.myDataBirthday}>{birthday || null}</p>
				<p className={styles.myDataGender}>{gender}</p>
				<span onClick={() => setShow(true)}>Edit</span>
				<Modal onClose={() => setShow(false)} show={show} />
			</div>
			<div className={styles.accessData}>
				<h4 className={styles.accessDataTitle}>Login details</h4>
				<h5 className={styles.accessDataMail}>Email</h5>
				<p className={styles.email}>{email || null}</p>
				<h5 className={styles.accessDataPassword}>Password</h5>
				<p className={styles.email}>{password || null}</p>
				<span>Edit</span>
			</div>
			<div className={styles.logout}>
				<h5 className={styles.logoutTitle}>Log out from all web browsers</h5>
				<p className={styles.logoutText}>
					Choosing this option will log you out of all web browsers you have
					used to access the Air Land website. To log in again, you will need to
					enter your credentials.
				</p>
				<button className={styles.logoutButton}>
					<span>Log Me Out</span>
					<img src={rightArrowLarge} alt='-->' className={styles.logoutArrow} />
				</button>
			</div>
			<div className={styles.delete}>
				<h5 className={styles.deleteTitle}>Manage Account</h5>
				<button className={styles.deleteButton}>
					<span>Delete account</span>
					<img src={rightArrowLarge} alt='-->' className={styles.deleteArrow} />
				</button>
				<p className={styles.deleteText}>
					If you delete your account, you will no longer have access to the
					information stored in your account
				</p>
			</div>
		</article>
	)
}