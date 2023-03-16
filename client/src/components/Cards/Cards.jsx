import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchShoes } from '../../redux/slices/shoesSlice'
import { Card } from '../../components'
import './Cards.css'

export function Cards() {
	const shoes = useSelector(state => state.shoes.shoes)
	const status = useSelector(state => state.shoes.status)
	const error = useSelector(state => state.shoes.error)
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(fetchShoes())
	}, [dispatch])

	if (status === 'loading') {
		return <div>Loading...</div>
	}

	if (status === 'failed') {
		return <div>Error: {error}</div>
	}

	return (
		<div className='cardsContainer'>
			<div className='cardsGrid'>
				{shoes.sneakers.map(shoe => (
					<Card key={shoe.id} id={shoe.id} PRECIO={shoe.PRECIO} NOMBRE={shoe.NOMBRE} DETALLE={shoe.DETALLE} />
				))}
			</div>
		</div>
	)
}
