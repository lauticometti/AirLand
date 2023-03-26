import PropTypes from 'prop-types'
import close from '../../../assets/icons/close_icon.svg'
import './Pills.css'
import { filterSlice } from '../../../redux/slices/filters/filterSlice'
import { useDispatch, useSelector } from 'react-redux'

export default function StringPill({ pill, type }) {
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
			<h2 className='pillTitle'>{pill}</h2>
			<div className='closeIconContainer' onClick={handleDelete}>
				<img src={close} alt='close' className='closeIcon' />
			</div>
		</div>
	)
}

StringPill.propTypes = {
	pill: PropTypes.string.isRequired,
	type: PropTypes.string
}
