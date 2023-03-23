import { useState } from 'react'
import icon from '../../assets/order-icon.svg'
import { Dropdown, Modal, SizesFilter, TypesFilter, PriceFilter } from '..'

import styles from './FilterButton.module.css'

export function FilterButton() {
	const [show, setShow] = useState(false)

	return (
		<div>
			<button
				onClick={() => {
					setShow(true)
				}}
				className={styles.filterBox}
			>
				<img src={icon} alt='' className={styles.icon} />
				<span className={styles.span}>Filter</span>
			</button>
			<Modal onClose={() => setShow(false)} show={show}>
				<Dropdown title='Sizes'>
					<SizesFilter />
				</Dropdown>
				<Dropdown title='Types'>
					<TypesFilter />
				</Dropdown>
				<Dropdown title='Min price'>
					<PriceFilter />
				</Dropdown>
			</Modal>
		</div>
	)
}
