import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import {
	Footer,
	Loader,
	Navbar,
	NotFound,
	WhatsAppButton
} from '../../components'
import { addItem } from '../../redux'
import {
	useGetShoesByIdQuery,
	useGetSizesQuery
} from '../../redux/services/services'
import Carousel from 'react-bootstrap/Carousel'
import StarsRating from 'react-star-rate'

import styles from './Detail.module.css'

export function Detail() {
	const dispatch = useDispatch()
	const { uid } = useSelector(state => state.auth)
	const { shoeId } = useParams()

	const [sizeSelected, setSizeSelected] = useState('')
	const [addCartAlert, setAddCartAlert] = useState('')

	const { data: shoe, isLoading, error } = useGetShoesByIdQuery(shoeId)
	const { data: sizes } = useGetSizesQuery()

	const handleAddToCart = event => {
		event.preventDefault()
		if (sizeSelected === '') {
			setAddCartAlert(
				<span className={styles.addCartAlert}>
					Please, select a size before adding to cart
				</span>
			)
			return
		}
		if (!uid) {
			setAddCartAlert(
				<span className={styles.addCartAlert}>
					Please, <Link to='/login'>login</Link> before adding to cart
				</span>
			)
			return
		}
		setAddCartAlert('')
		dispatch(addItem(shoeId, uid, sizeSelected))
	}

	const handleSizeChange = event => {
		setSizeSelected(event.target.value)
	}
	let reviews
	if (shoe?.REVIEW) {
		reviews = Object.keys(shoe?.REVIEW).map(user => shoe.REVIEW[user])
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
						<div className={styles.carouselContainer}>
							<Carousel variant='dark'>
								{shoe.IMAGE ? (
									Object.keys(shoe.IMAGE).map((image, i) => {
										if (image === 'THUMBNAIL') return null
										return (
											<Carousel.Item key={i}>
												<img
													className='w-75 mx-auto d-block'
													src={shoe.IMAGE[image]}
													alt={`Slide ${i + 1}`}
												/>
											</Carousel.Item>
										)
									})
								) : (
									<Loader />
								)}
							</Carousel>
						</div>
						<div className={styles.descriptionContainer}>
							<h3 className={styles.title}>{shoe.NAME}</h3>
							<span className={styles.code}>Item No. {shoe.CODE}</span>
							<h2 className={styles.shoePrice}>${shoe.PRICE}</h2>
							<div className={styles.sizesContainer}>
								<p className={styles.sizesTitle}>Sizes</p>
								<ul className={styles.sizesChecks}>
									{sizes?.map(size => (
										<li
											key={size}
											className={
												sizeSelected === size
													? styles.sizeChecked
													: Number(shoe.SIZE[size])
													? styles.sizeCheck
													: styles.sizeDisabled
											}
											value={size}
											onClick={
												Number(shoe.SIZE[size]) ? handleSizeChange : null
											}
										>
											{size}
										</li>
									))}
								</ul>
							</div>

							<div className={styles.addCartContainer}>
								<button
									className={styles.addToCartButton}
									onClick={handleAddToCart}
								>
									Add to cart
								</button>
								{addCartAlert}
							</div>

							<div className={styles.description}>
								<h4 className={styles.descriptionh4}>Description</h4>
								<p className={styles.descriptionText}>{shoe.DESCRIPTION}</p>
							</div>
						</div>
					</div>
				)}
				{ reviews?.length ? (
				<div>
					<h4 style={{ textAlign: 'center' }}>Customer reviews</h4>
					<Carousel>
						{reviews ? (
							reviews.map(review => (
								<Carousel.Item
									style={{
										textAlign: 'center',
										height: '200px',
										marginTop: '15px'
									}}
									interval={3000}
								>
									<h5>{review.name}</h5>
									<div>
										<StarsRating value={review.stars} disabled={true} />
									</div>
									<p>{review.comment}</p>
								</Carousel.Item>
							))
						) : (
							<Loader />
						)}
					</Carousel>
				</div>):""}
			</div>
			<WhatsAppButton />
			<Footer />
		</>
	)
}
