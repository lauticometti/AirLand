import { useParams } from 'react-router-dom'
import { Footer, Loader, Navbar, NotFound } from '../../components'
import { useGetShoesByIdQuery } from '../../redux/services/services'
import styles from './Detail.module.css'

export function Detail() {
	const { shoeId } = useParams()
	const { data: shoe, isLoading, error } = useGetShoesByIdQuery(shoeId)

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
							src={shoe.sneaker.IMAGE[0]}
							alt={shoe.sneaker.NAME}
							className={styles.image}
						/>
						<div className={styles.descriptionContainer}>
							<h3 className={styles.title}>{shoe.sneaker.NAME}</h3>
							<span className={styles.code}>Item nr: {shoe.sneaker.CODE}</span>
							<h2 className={styles.shoePrice}>${shoe.sneaker.PRICE}</h2>
							<div className={styles.sizesContainer}>
								<p className={styles.sizesTitle}>Sizes</p>
								<ul className={styles.sizesChecks}>
									{Object.keys(shoe.sneaker.SIZE).map(size => {
										return (
											<li
												key={size}
												className={
													shoe.sneaker.SIZE[size]
														? styles.sizeCheck
														: styles.sizeDisabled
												}
											>
												<span className={styles.sizeSpan}>{size}</span>
											</li>
										)
									})}
								</ul>
							</div>
							<button className={styles.addToCartButton}>Add to cart</button>
							<div className={styles.description}>
								<h4 className={styles.descriptionh4}>Description</h4>
								<p className={styles.descriptionText}>
									{shoe.sneaker.DESCRIPTION}
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
