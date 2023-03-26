import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
import close from '../../../assets/icons/close_icon.svg'
import { filterSlice } from '../../../redux/slices/filters/filterSlice'
import './Pills.css'

export default function NumberPill({ pill, type }) {
	if (!pill) return null

	const dispatch = useDispatch()
	const { filters } = useSelector(state => state.filter)

	const cleanFilter =
		typeof filters[type] === 'string'
			? ''
			: typeof filters[type] === 'number'
			? 0
			: filters[type].filter(el => el !== pill)

	const handleDelete = event => {
		dispatch(
			filterSlice.actions.setFilters({
				filterType: type,
				data: cleanFilter
			})
		)
	}

	return (
		<div className='pillContainer'>
			<h2 className='pillTitle'>
				{type === 'minPrice' ? '$' : null}
				{pill}
			</h2>
			<div className='closeIconContainer' onClick={handleDelete}>
				<img src={close} alt='close' className='closeIcon' />
			</div>
		</div>
	)
}

NumberPill.propTypes = {
	pill: PropTypes.number.isRequired,
	type: PropTypes.string
}
