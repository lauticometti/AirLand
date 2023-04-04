import { useState } from 'react'
import { Loader, NotFound } from '../../../../components'
import {
	useGetShoesByIdQuery,
	useGetSizesQuery
} from '../../../../redux/services/services'
import Carousel from 'react-bootstrap/Carousel'
import PropTypes from 'prop-types'
import styles from './EditSneaker.module.css'

export function EditSneaker({ shoeId }) {
	const [sizeSelected, setSizeSelected] = useState('')

	const { data: shoe, isLoading, error } = useGetShoesByIdQuery(shoeId)
	const { data: sizes } = useGetSizesQuery()

	const handleSizeChange = event => {
		setSizeSelected(event.target.value)
	}

	return (
		<>
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
						<div className={styles.allImagesContainer}>
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
							<div className={styles.separateImagesContainer}>
								<img
									src={shoe.IMAGE.TOPVIEW}
									alt='cat'
									className={styles.imageElement}
								/>
								<img
									src={shoe.IMAGE.LEFT}
									alt='cat'
									className={styles.imageElement}
								/>
								<img
									src={shoe.IMAGE.RIGHT}
									alt='cat'
									className={styles.imageElement}
								/>
								<img
									src={shoe.IMAGE.FULL}
									alt='cat'
									className={styles.imageElement}
								/>
								<img
									src={shoe.IMAGE.THUMBNAIL}
									alt='cat'
									className={styles.imageElement}
								/>
							</div>
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
								<button className={styles.addToCartButton}>Save changes</button>
							</div>

							<div className={styles.description}>
								<h4 className={styles.descriptionh4}>Description</h4>
								<p className={styles.descriptionText}>{shoe.DESCRIPTION}</p>
							</div>
						</div>
					</div>
				)}
			</div>
		</>
	)
}

EditSneaker.propTypes = {
	shoeId: PropTypes.string.isRequired
}
