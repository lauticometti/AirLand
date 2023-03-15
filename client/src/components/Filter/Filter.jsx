import { useEffect, useState } from 'react'
import icon from '../../assets/order-icon.svg'
import { Dropdown, Modal } from '../'

import styles from './Filter.module.css'
import { useDispatch } from 'react-redux'

const SIZES = [38, 39, 40, 41, 42, 43, 44]

export function Filter() {
	const [show, setShow] = useState(false)
	const [currentSizes, setCurrentSizes] = useState(SIZES)

	const dispatch = useDispatch()

	useEffect(() => {
		// dispatch(filterBySizes(sizes)) // CREAR ACTION EN REDUCER E IMPORTARLA AQUI
	}, [])

	return (
		<div>
			<button onClick={() => setShow(true)} className={styles.filterBox}>
				<img src={icon} alt='' className={styles.icon} />
				<span className={styles.span}>Filter</span>
			</button>
			<Modal onClose={() => setShow(false)} show={show}>
				<Dropdown
					title='Sizes'
					items={SIZES}
					type='checkbox'
					setFilteredState={setCurrentSizes}
					filteredState={currentSizes}
				/>
			</Modal>
		</div>
	)
}
