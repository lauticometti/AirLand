import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchShoes } from '../../redux/slices/shoesSlice'
import { Card } from '../../components'
import './Cards.css'

export function Cards() {
	const { shoes, status, error } = useSelector(state => state.shoes)
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(fetchShoes())
	}, [dispatch])
	console.log(shoes)
	return (
		<>
			{status === 'loading' ? (
				<div className='cardsContainer'>
					<h5 className='loadingText'>Loading sneakers...</h5>
				</div>
			) : status === 'failed' ? (
				<div className='cardsContainer'>
					<h5 className='errorMessageText'>Error: {error}</h5>
				</div>
			) : (
				<div className='cardsContainer'>
					<div className='cardsGrid'>
						{shoes.sneakers.map(shoe => (
							<Card
								key={shoe.id}
								id={shoe.id}
								PRECIO={shoe.PRECIO}
								NOMBRE={shoe.NOMBRE}
								DETALLE={shoe.DETALLE}
							/>
						))}
					</div>
				</div>
			)}
		</>
	)
}
