import icon from '../../assets/icons/order-icon.svg'
import { Modal } from '../'

import styles from './Order.module.css'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { filterSlice } from '../../redux'
import { capitalize } from '../../helpers/capitalize'

export function Order() {
	const dispatch = useDispatch()

	const [show, setShow] = useState(false)
	const [order, setOrder] = useState('up')
	const [sortType, setSortType] = useState('')

	const handleOrderOrientation = () => {
		const newOrder = order === 'up' ? 'down' : 'up'
		setOrder(newOrder)
	}

	useEffect(() => {
		dispatch(filterSlice.actions.setSort({ sortType, order }))
	}, [dispatch, order, sortType])

	const handleOrderInput = event => {
		const value = event.target.id

		if (sortType === value) {
			setSortType('')
			event.target.checked = false
		} else setSortType(value)
	}

	const handleInitialInput = () => {
		setSortType('')
	}

	return (
		<div>
			<button onClick={() => setShow(true)} className={styles.orderBox}>
				<img src={icon} alt='' className={styles.icon} />
				<span className={styles.span}>
					{capitalize(sortType || 'Initial results')}
				</span>
				<div
					className={styles.upArrowContainer}
					onClick={e => {
						e.stopPropagation()
						handleOrderOrientation()
					}}
				>
					<svg
						width='23'
						height='23'
						viewBox='0 0 23 23'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
						className={order === 'up' ? styles.upArrow : styles.downArrow}
					>
						<path d='M6.96875 11.15V22.3H15.3312V11.15H22.3L11.15 0L0 11.15H6.96875Z' />
					</svg>
				</div>
			</button>

			<Modal onClose={() => setShow(false)} show={show} buttonText='Done'>
				<ul className={styles.modalList}>
					<li className={styles.modalListItem}>
						<label htmlFor='initial' className={styles.label}>
							<p className={styles.labelP}>Initial results</p>
							<input
								type='radio'
								name='order'
								id='initial'
								className={styles.radioInput}
								onClick={handleInitialInput}
							/>
						</label>
					</li>
					<li className={styles.modalListItem}>
						<label htmlFor='price' className={styles.label}>
							<p className={styles.labelP}>Price</p>
							<input
								type='radio'
								name='order'
								id='price'
								className={styles.radioInput}
								onClick={handleOrderInput}
							/>
						</label>
					</li>
				</ul>
			</Modal>
		</div>
	)
}
