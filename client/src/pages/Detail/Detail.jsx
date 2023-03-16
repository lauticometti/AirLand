import { Navbar } from '../../components'
import styles from './Detail.module.css'

export function Detail() {
	const shoe = {
		code: 124214,
		description:
			'Es un zapatilla icónica para un juego icónico. Como un pilar de las noches de juegos alrededor del mundo, UNO trasciende la edad, la cultura y el idioma. ',
		image:
			'https://www.digitalsport.com.ar/files/products/62e27ea096282-598879-500x500.jpg',
		name: 'Air Force 1 07 Uno',
		price: '120',
		size: {
			38: 2,
			39: 2,
			40: 2,
			41: 4,
			42: 2,
			43: 6,
			44: 8
		},
		status: 'Available',
		stock: 20
	}

	return (
		<>
			<Navbar />

			<div className={styles.shoeContainer}>
				<img src={shoe.image} alt={shoe.name} className={styles.image} />
				<div className={styles.descriptionContainer}>
					<h3 className={styles.title}>{shoe.name}</h3>
					<span className={styles.code}>Item nr: {shoe.code}</span>
					<h2 className={styles.shoePrice}>${shoe.price}</h2>
					<div className={styles.sizesContainer}>
						<p className={styles.sizesTitle}>Sizes</p>
						<ul className={styles.sizesChecks}>
							{Object.keys(shoe.size).map(size => {
								return (
									<li
										key={size}
										className={
											shoe.size[size] ? styles.sizeCheck : styles.sizeDisabled
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
						<p className={styles.descriptionText}>{shoe.description}</p>
					</div>
				</div>
			</div>
		</>
	)
}
