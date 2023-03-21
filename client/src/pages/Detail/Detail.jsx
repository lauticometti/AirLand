import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { Footer, Loader, Navbar, NotFound } from '../../components'
import { addItem } from '../../redux'
import { useGetShoesByIdQuery, useGetSizesQuery } from '../../redux/services/services'
import styles from './Detail.module.css'

export function Detail() {
	const { shoeId } = useParams()
	const { data: shoe, isLoading, error } = useGetShoesByIdQuery(shoeId)
	const { data: sizes } = useGetSizesQuery()
	const dispatch = useDispatch()
	const { uid } = useSelector(state => state.auth)
	const [sizeSelected, setSizeSelected] = useState('')

	const handleAddToCart = (event) => {
		event.preventDefault()
		dispatch(addItem(shoeId, uid, sizeSelected))
	}

	const handleSizeChange = (event) => {
		setSizeSelected(event.target.value)
	}

	return (
		<>
			<Navbar />

			<div className={styles.mainContainer}>
				{isLoading ? (
					<div className={styles.loader}>
						<Loader />
					</div>
				) : error ? (
					<div className={styles.error}>
						<NotFound />
					</div>
				) : (
					<div className={styles.shoeContainer}>
						<img
							src={shoe.IMAGE[0]}
							alt={shoe.NAME}
							className={styles.image}
						/>
						<div className={styles.descriptionContainer}>
							<h3 className={styles.title}>{shoe.NAME}</h3>
							<span className={styles.code}>Item nr: {shoe.CODE}</span>
							<h2 className={styles.shoePrice}>${shoe.PRICE}</h2>
							<div className={styles.sizesContainer}>
								<p className={styles.sizesTitle}>Sizes</p>
								<ul className={styles.sizesChecks}>
									{
										sizes?.map((size) =>
										(
											<li
												key={size}
												className={Number(shoe.SIZE[size]) ? styles.sizeCheck : styles.sizeDisabled}
												value={size}
												onClick={handleSizeChange}
											>
												{size}
											</li>
										)
										)
									}
								</ul>
							</div>
							<button className={styles.addToCartButton} onClick={handleAddToCart}>Add to cart</button>
							<div className={styles.description}>
								<h4 className={styles.descriptionh4}>Description</h4>
								<p className={styles.descriptionText}>
									{shoe.DESCRIPTION}
								</p>
							</div>
						</div>
					</div>
				)}
			</div>

			<Footer />
		</>
	)
}
