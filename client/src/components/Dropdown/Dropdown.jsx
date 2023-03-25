import styles from './Dropdown.module.css'
import PropTypes from 'prop-types'

import downArrow from '../../assets/icons/down-arrow.svg'
import { useState } from 'react'

export function Dropdown({ title, children }) {
	const [isOpen, setIsOpen] = useState(false)
	const toggling = () => setIsOpen(!isOpen)

	return (
		<div className={styles.dropdown}>
			<div className={styles.dropdownContainer}>
				<div onClick={toggling} className={styles.dropdownHeader}>
					<p className={styles.headerP}>{title}</p>
					<img
						src={downArrow}
						alt=''
						className={isOpen ? styles.headerIconRotate : styles.headerIcon}
					/>
				</div>

				<div
					className={
						isOpen
							? styles.dropdownListContainerDisplayed
							: styles.dropdownListContainer
					}
				>
					{children}
				</div>
			</div>
		</div>
	)
}

Dropdown.propTypes = {
	title: PropTypes.string.isRequired,
	children: PropTypes.node
}
