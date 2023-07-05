import { useNavigate } from 'react-router-dom'

import styles from './Favorites.module.css'

export default function Favorites() {
	const favorites = [
		// {
		// 	id: '0PMeMv3KIR1DlHShwcvM',
		// 	IMAGE: {
		// 		THUMBNAIL:
		// 			'https://firebasestorage.googleapis.com/v0/b/airland-9c55f.appspot.com/o/Zapatillas(images)%2FNike-Air-Force-1-Mid-NH-Vivid-Sulfur-Rush-Orange-(thumbnail).webp?alt=media&token=dd7ca7a7-8144-4be3-80b6-818fdc77f984'
		// 	},
		// 	NAME: 'Nike Air Force 1 Mid NH Vivid Sulfur Rush Orange',
		// 	PRICE: '140'
		// }
	]

	const navigate = useNavigate()

	const handleDetailFavorite = event => {
		let current = event.target
		while (!current.attributes.getNamedItem('name')) {
			current = current.parentNode
		}

		navigate(`/detail/${current.id}`)
	}

	return (
		<div className={styles.favorites}>
			<h3 className={styles.favoritesTitle}>My favorites</h3>
			{favorites.length ? (
				favorites.map((shoe, i) => (
					<div
						key={i}
						onClick={handleDetailFavorite}
						id={shoe.id}
						name='container'
						className={styles.cardContainer}
					>
						<div className={styles.imageContainer}>
							<img
								src={shoe.IMAGE.THUMBNAIL}
								alt={shoe.NAME}
								className={styles.cardImage}
							/>
						</div>
						<h5 className={styles.cardName}>
							{shoe.NAME.length < 48
								? shoe.NAME
								: shoe.NAME.slice(0, 48) + '...'}
						</h5>

						<div className={styles.cardBuy}>
							<div className={styles.cardPriceContainer}>
								<strong className={styles.cardPrice}>${shoe.PRICE}</strong>
							</div>
							<button className={styles.cardButton}>Buy now!</button>
						</div>
						<span
							onClick={e => e.stopPropagation()}
							className={styles.cardRemove}
						>
							Remove from favorites
						</span>
					</div>
				))
			) : (
				<div className={styles.emptyFavorites}>
					<p className={styles.emptyFavoritesParagraph}>
						It looks like you don&apos;t have any favorites
					</p>
					<h4 className={styles.emptyFavoritesTitle}>
						We thought you might like these sneakers
					</h4>
					<div className={styles.emptyFavoritesRecommended}></div>
				</div>
			)}
		</div>
	)
}
