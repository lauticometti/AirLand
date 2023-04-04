import { useEffect, useState } from 'react'
import { Loader, NotFound } from '../../../../components'
import {
	useGetShoesByIdQuery,
	useGetSizesQuery,
	useEditShoeByIdMutation
} from '../../../../redux/services/services'
import Carousel from 'react-bootstrap/Carousel'
import PropTypes from 'prop-types'
import styles from './EditSneaker.module.css'
import { useDispatch } from 'react-redux'
import { setEditCount } from '../../../../redux'

export function EditSneaker({ shoeId }) {
	const dispatch = useDispatch()
	const [sizeSelected, setSizeSelected] = useState('')

	const { data: shoe, isLoading, error, refetch } = useGetShoesByIdQuery(shoeId)
	const { data: sizes } = useGetSizesQuery()

	const [editedShoe, setEditedShoe] = useState(shoe)
	const [updateShoe] = useEditShoeByIdMutation()

	const handleSizeChange = event => {
		setSizeSelected(event.target.value)
	}

	const handleInputChange = event => {
		const { name, value } = event.target
		setEditedShoe({ ...editedShoe, [name]: value })
	}

	const handleFormSubmit = event => {
		event.preventDefault()
		updateShoe({ id: shoeId, shoe: editedShoe })
			.unwrap()
			.then(updatedShoe => {
				alert(`Updated successfully!`)
				dispatch(setEditCount())
				refetch()
			})
			.catch(error => {
				alert(error.message)
			})
	}

	useEffect(() => {
		setEditedShoe(shoe)
	}, [shoe])

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
						<form onSubmit={handleFormSubmit}>
							<label>
								Price:
								<input
									type='text'
									name='PRICE'
									value={editedShoe?.PRICE}
									onChange={handleInputChange}
								/>
							</label>
							<label>
								Name:
								<input
									type='text'
									name='NAME'
									value={editedShoe?.NAME}
									onChange={handleInputChange}
								/>
							</label>
							<button type='submit'>Save changes</button>
						</form>
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
									alt='topview'
									className={styles.imageElement}
								/>
								<img
									src={shoe.IMAGE.LEFT}
									alt='left'
									className={styles.imageElement}
								/>
								<img
									src={shoe.IMAGE.RIGHT}
									alt='right'
									className={styles.imageElement}
								/>
								<img
									src={shoe.IMAGE.FULL}
									alt='full'
									className={styles.imageElement}
								/>
								<img
									src={shoe.IMAGE.THUMBNAIL}
									alt='thumbnail'
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
							<div className={styles.description}>
								<h4 className={styles.descriptionh4}>Description</h4>
								<p className={styles.descriptionText}>{shoe.DESCRIPTION}</p>
							</div>
							<div className={styles.addCartContainer}>
								<button className={styles.addToCartButton}>Save changes</button>
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
