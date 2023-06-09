import PropTypes from 'prop-types'
import { useCallback, useEffect } from 'react'
import './Modal.css'

export function Modal({ onClose, children, show, buttonText }) {
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
		<div onClick={onClose} className={`customModal ${show ? 'show' : ''}`}>
			<div onClick={e => e.stopPropagation()} className='modalContent'>
				<div className='modalBody'>{children}</div>
				<div className='modalFooter'>
					<button onClick={onClose} className='button'>
						{buttonText}
					</button>
				</div>
			</div>
		</div>
	)
}

Modal.propTypes = {
	onClose: PropTypes.func.isRequired,
	children: PropTypes.node.isRequired,
	show: PropTypes.bool.isRequired,
	buttonText: PropTypes.string.isRequired
}
