import PropTypes from 'prop-types'
import styles from './AdminCard.module.css'
import { FaRegEdit } from 'react-icons/fa'
import { useState } from 'react'
import { EditSneaker } from '../../pages/Profile/AdminDashboard/'

export function AdminCard({ shoe }) {
	const [showEditModal, setShowEditModal] = useState(false)

	const handleCloseEditModal = () => {
		setShowEditModal(false)
	}

	const handleShowEditModal = () => {
		setShowEditModal(true)
	}

	return (
		<div className={styles.adminCardContainer}>
			{showEditModal ? (
				<div className={styles.editModal}>
					<div className={styles.editModalContent}>
						<span className={styles.close} onClick={handleCloseEditModal}>
							&times;
						</span>
						<EditSneaker shoeId={shoe.id} />
					</div>
				</div>
			) : null}
			<div className={styles.imageContainer}>
				<img
					src={shoe.IMAGE?.THUMBNAIL}
					alt={shoe.NAME}
					className={styles.image}
				/>
			</div>
			<div className={styles.textContainer}>
				<div className={styles.nameIdContainer}>
					<label className={styles.name}>{shoe.NAME}</label>
					<label className={styles.shoeId}>{shoe.id}</label>
				</div>
				<div className={styles.priceContainer}>
					{String(shoe.STATUS) === 'true' ? (
						<label className={`${styles.statusLabel} ${styles.statusTrue}`}>
							Status ON
						</label>
					) : String(shoe.STATUS) === 'false' ? (
						<label className={`${styles.statusLabel} ${styles.statusFalse}`}>
							Status OFF
						</label>
					) : null}
					<label className={styles.price}>${shoe.PRICE}</label>
				</div>
			</div>
			<div className={styles.iconsContainer}>
				<FaRegEdit
					onClick={handleShowEditModal}
					className={styles.editButton}
				/>
				{/* <FaRegTrashAlt className={styles.removeButton} /> */}
			</div>
		</div>
	)
}

AdminCard.propTypes = {
	shoe: PropTypes.object.isRequired
}
