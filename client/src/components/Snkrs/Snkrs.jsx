import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { useGetShoesQuery } from '../../redux/services/filteredShoes'
import { useEffect, useState } from 'react'
import { Loader, NotFound } from '../'
import styles from './Snkrs.module.css'

export function Snkrs() {
	const filterState = useSelector(state => state.filter)
	const { data, isLoading, error } = useGetShoesQuery(filterState)
	const [windowWidth, setWindowWidth] = useState(window.innerWidth)

	useEffect(() => {
		const handleWindowResize = () => {
			setWindowWidth(window.innerWidth)
		}

		window.addEventListener('resize', handleWindowResize)

		return () => {
			window.removeEventListener('resize', handleWindowResize)
		}
	})

	const WIDTH_ONE_SHOE = 320

	const totalShoes =
		windowWidth < 500 ? 1 : Math.floor(windowWidth / WIDTH_ONE_SHOE)

	const slicedData = data?.slice(0, totalShoes)

	if (isLoading)
		return (
			<div className={styles.mt50vh}>
				<Loader />
			</div>
		)
	if (error)
		return (
			<div className={styles.mt50vh}>
				<NotFound />
			</div>
		)
	return (
		<div className={styles.section}>
			{slicedData.map((shoe, i) => (
				<Link to={`/detail/${shoe.id}`} key={i} className={styles.card}>
					<div className={styles.imageContainer}>
						<img
							className={styles.image}
							src={shoe.IMAGE.FULL}
							alt={shoe.NAME}
						/>
					</div>
					<h5 className={styles.price}>${shoe.PRICE}</h5>
					<h5 className={styles.name}>{shoe.NAME}</h5>
				</Link>
			))}
		</div>
	)
}
