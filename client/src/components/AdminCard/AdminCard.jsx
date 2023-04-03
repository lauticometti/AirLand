import PropTypes from 'prop-types'
import styles from './AdminCard.module.css'
import { Link } from 'react-router-dom'
import { FaRegEdit, FaRegTrashAlt } from 'react-icons/fa'
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
			) : (
				<>
					<Link to={`/detail/admin/${shoe.id}`} className={styles.link}>
						<div className={styles.imageContainer}>
							<img
								src={shoe.IMAGE.THUMBNAIL}
								alt={shoe.NAME}
								className={styles.image}
							/>
						</div>
					</Link>
					<div className={styles.textContainer}>
						<label className={styles.name}>{shoe.NAME}</label>
						<label className={styles.price}>${shoe.PRICE}</label>
					</div>
					<div className={styles.iconsContainer}>
						<FaRegEdit
							onClick={handleShowEditModal}
							className={styles.editButton}
						/>
						<FaRegTrashAlt className={styles.removeButton} />
					</div>
				</>
			)}
		</div>
	)
}

AdminCard.propTypes = {
	shoe: PropTypes.object.isRequired
}
