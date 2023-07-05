import PropTypes from 'prop-types'
import NumberPill from './NumberPill'
import StringPill from './StringPill'

export default function ArrayPill({ pill, type }) {
	if (!pill.length) return null

	return (
		<div className='pillArray'>
			{pill.map((el, i) => (
				<div key={i}>
					{typeof el === 'string' ? (
						<StringPill pill={el} type={type} />
					) : (
						<NumberPill pill={el} type={type} />
					)}
				</div>
			))}
		</div>
	)
}

ArrayPill.propTypes = {
	pill: PropTypes.array.isRequired,
	type: PropTypes.string
}
