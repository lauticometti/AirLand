import './Dropdown.css'
import PropTypes from 'prop-types'

import downArrow from '../../assets/down-arrow.svg'
import { useState } from 'react'

export function Dropdown({
	title,
	items,
	type,
	filteredState,
	setFilteredState
}) {
	const [isOpen, setIsOpen] = useState(false)
	const toggling = () => setIsOpen(!isOpen)

	// ======== checkboxs handlers ======== //
	const [marked, setMarked] = useState([items.map(el => false)])

	const handleCheckbox = event => {
		const size = Number(event.target.id)
		const currentIndex = items.indexOf(size)
		console.log(currentIndex)
		const newMarked = [...marked]

		if (filteredState.includes(size)) {
			setFilteredState(filteredState.filter(el => el !== size))
			newMarked[currentIndex] = false
			setMarked(newMarked)
		} else {
			setFilteredState([...filteredState, size])
			newMarked[currentIndex] = true
			setMarked(newMarked)
		}
	}

	const handleRadio = event => {}

	return (
		<div className='dropdown'>
			<div className='dropdownContainer'>
				<div onClick={toggling} className='dropdownHeader'>
					<p className='headerP'>{title}</p>
					<img
						src={downArrow}
						alt=''
						className={`headerIcon ${isOpen ? '' : 'rotate'}`}
					/>
				</div>

				<div className={`dropdownListContainer ${isOpen ? 'displayed' : ''}`}>
					<ul
						className={title === 'Sizes' ? 'sizesDropdownList' : 'dropdownList'}
					>
						{items ? (
							items.map((el, i) => {
								if (title === 'Sizes') {
									return (
										<li
											key={i}
											onClick={handleCheckbox}
											id={el}
											className={`sizeListItem ${marked[i] ? 'active' : ''}`}
										>
											{el}
										</li>
									)
								} else {
									return (
										<li key={el + i} className='dropdownListItem'>
											<label htmlFor={el} className='label'>
												<p>{el}</p>
												<input
													type={type || 'radio'}
													name={title}
													id={el}
													className={`${type || 'radio'}Input ${
														marked[i] ? 'active' : ''
													}`}
													onClick={
														type === 'checkbox' ? handleCheckbox : handleRadio
													}
												/>
											</label>
										</li>
									)
								}
							})
						) : (
							<p>Loading...</p>
						)}
					</ul>
				</div>
			</div>
		</div>
	)
}

Dropdown.propTypes = {
	title: PropTypes.string.isRequired,
	items: PropTypes.arrayOf(
		PropTypes.oneOfType([PropTypes.string, PropTypes.number])
	).isRequired,
	type: PropTypes.string,
	filteredState: PropTypes.array,
	setFilteredState: PropTypes.func
}
