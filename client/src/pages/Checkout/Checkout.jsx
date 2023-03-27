import { Footer, Navbar } from '../../components'
import styles from './Checkout.module.css'

export function Checkout() {
	return (
		<>
			<Navbar />
			<div className={styles.formContainer}>
				<h2 className={styles.title}>Checkout details</h2>
				<form className={styles.form}>
					<h3 className={styles.formTitle}>Shipping adress</h3>
					<label htmlFor='name' className={styles.nameLabel}>
						Name
					</label>
					<input
						type='text'
						id='name'
						placeholder='Name'
						className={styles.nameInput}
					/>
					<label htmlFor='adress' className={styles.addressLabel}>
						Address
					</label>
					<input
						type='text'
						id='address'
						placeholder='Address'
						className={styles.addressInput}
					/>
					<label htmlFor='city' className={styles.cityLabel}>
						City
					</label>
					<input
						type='text'
						id='city'
						placeholder='City'
						className={styles.cityInput}
					/>
					<label htmlFor='state' className={styles.stateLabel}>
						State
					</label>
					<input
						type='text'
						id='state'
						placeholder='State'
						className={styles.stateInput}
					/>
					<label htmlFor='zipCode' className={styles.zipCodeLabel}>
						Zip code
					</label>
					<input
						type='text'
						id='zipCode'
						placeholder='Zip code'
						className={styles.zipCodeInput}
					/>
					<label htmlFor='country' className={styles.countryLabel}>
						Country
					</label>
					<input
						type='text'
						id='country'
						placeholder='Country'
						className={styles.countryInput}
					/>
					<label htmlFor='phone' className={styles.phoneLabel}>
						Phone
					</label>
					<input
						type='text'
						id='phone'
						placeholder='Phone'
						className={styles.phoneInput}
					/>
					<button className={styles.paymentButton}>Go payment</button>
				</form>
			</div>
			<Footer />
		</>
	)
}
