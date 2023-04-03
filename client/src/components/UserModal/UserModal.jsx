import PropTypes from 'prop-types'
import { useCallback, useEffect } from 'react'
import styles from './UserModal.module.css'

export function UserModal({ onClose, children, show, background }) {
	const closeOnEscapeKeyDown = useCallback(
		e => {
			if ((e.charCode || e.keyCode) === 27) {
				onClose()
			}
		},
		[onClose]
	)
	useEffect(() => {
		document.body.addEventListener('keydown', closeOnEscapeKeyDown)
		return function cleanup() {
			document.body.removeEventListener('keydown', closeOnEscapeKeyDown)
		}
	}, [closeOnEscapeKeyDown])

	return (
		<div
			onClick={onClose}
			style={background ? { background } : null}
			className={show ? styles.customModalShow : styles.customModal}
		>
			<div onClick={e => e.stopPropagation()} className={styles.modalContent}>
				<div className={styles.modalBody}>{children}</div>
			</div>
		</div>
	)
}

UserModal.propTypes = {
	onClose: PropTypes.func.isRequired,
	children: PropTypes.node.isRequired,
	show: PropTypes.bool.isRequired,
	background: PropTypes.string
}
