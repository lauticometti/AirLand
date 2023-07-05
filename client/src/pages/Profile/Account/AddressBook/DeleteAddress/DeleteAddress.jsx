import PropTypes from 'prop-types'
import rightArrowWhite from '../../../../../assets/icons/right_arrow-largeWhite.svg'
import styles from './DeleteAddress.module.css'

export default function DeleteAddress({ onClose }) {
	return (
		<div className={styles.deleteAddressContainer}>
			<h3 className={styles.deleteAddressTitle}>
				You&apos;re about to delete this address
			</h3>

			<button onClick={onClose} className={styles.button}>
				Delete
				<img src={rightArrowWhite} alt='' />
			</button>
			<button onClick={onClose} className={styles.buttonCancel}>
				Cancel
			</button>
		</div>
	)
}

DeleteAddress.propTypes = {
	onClose: PropTypes.func.isRequired
}
