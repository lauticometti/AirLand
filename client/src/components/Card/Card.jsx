import PropTypes from 'prop-types'
import './Card.css'

export function Card({ id, PRECIO, NOMBRE, DETALLE }) {
	return (
		<div className='cardContainer'>
			<h1 className='cardTitle'>
				<p>Zapatilla {NOMBRE}</p>
			</h1>
			<img src={`https://i.pravatar.cc/200?u=${id}`} alt='shoe card' />
			<div className='cardWrapper'>
				<p>PRECIO: {PRECIO}</p>
				<p>DETALLE: {DETALLE}</p>
			</div>
		</div>
	)
}

Card.propTypes = {
	id: PropTypes.string.isRequired,
	PRECIO: PropTypes.string.isRequired,
	NOMBRE: PropTypes.string.isRequired,
	DETALLE: PropTypes.string.isRequired
}
