import { useEffect, useState } from 'react'
import { Loader, NotFound } from '../../../../components'
import {
	useGetShoesByIdQuery,
	useGetSizesQuery,
	useEditShoeByIdMutation
} from '../../../../redux/services/services'
import { firebaseStorage } from '../../../../firebase'
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage'
import Carousel from 'react-bootstrap/Carousel'
import PropTypes from 'prop-types'
import styles from './EditSneaker.module.css'
import { useDispatch } from 'react-redux'
import { setEditCount } from '../../../../redux'
import swal from 'sweetalert'

export function EditSneaker({ shoeId }) {
	const dispatch = useDispatch()

	const { data: shoe, isLoading, error, refetch } = useGetShoesByIdQuery(shoeId)
	const { data: sizes } = useGetSizesQuery()

	const [editedShoe, setEditedShoe] = useState(shoe)
	const [updateShoe] = useEditShoeByIdMutation()

	const imageProperties = ['TOPVIEW', 'LEFT', 'FULL', 'RIGHT', 'THUMBNAIL']

	const handleInputChange = event => {
		const { name, value } = event.target
		setEditedShoe({ ...editedShoe, [name]: value })
	}

	const handleSizesChange = event => {
		let { name, value } = event.target
		if (value === 'true') value = true
		if (value === 'false') value = false
		setEditedShoe({
			...editedShoe,
			SIZE: { ...editedShoe.SIZE, [name]: value }
		})
	}

	const handleImagesChange = e => {
		const { name, files } = event.target
		const file = files[0]

		const storageRef = ref(
			firebaseStorage,
			`Zapatillas-images-uploaded/${file.name}`
		)
		const uploadTask = uploadBytesResumable(storageRef, file)

		uploadTask.on(
			'state_changed',
			snapshot => {
				const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
				console.log(progress)
			},
			error => {
				alert(error.message)
			},
			() => {
				getDownloadURL(uploadTask.snapshot.ref).then(downloadURL => {
					setEditedShoe({
						...editedShoe,
						IMAGE: { ...editedShoe.IMAGE, [name]: downloadURL }
					})
					console.log('Image uploaded successfully.')
				})
			}
		)
	}

	const handleImageURLChange = e => {
		const { name, value } = event.target
		setEditedShoe({
			...editedShoe,
			IMAGE: { ...editedShoe.IMAGE, [name]: value }
		})
	}

	const handleFormSubmit = event => {
		event.preventDefault()
		updateShoe({ id: shoeId, shoe: editedShoe })
			.unwrap()
			.then(updatedShoe => {
				swal({
					title: 'Updated sucessfully!',
					message: 'The sneakers details have been updated correctly.',
					icon: 'success',
					timer: 2000
				})
				dispatch(setEditCount())
				refetch()
			})
			.catch(error => {
				swal({
					title: 'An error occurred while updating',
					message: error.message,
					icon: 'warning',
					timer: 2000
				})
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
					<form className={styles.shoeContainer} onSubmit={handleFormSubmit}>
						<div className={styles.allImagesContainer}>
							<div className={styles.carouselContainer}>
								<Carousel variant='dark'>
									{editedShoe?.IMAGE ? (
										Object.keys(editedShoe.IMAGE).map((image, i) => {
											if (image === 'THUMBNAIL') return null
											return (
												<Carousel.Item key={i}>
													<img
														className='w-75 mx-auto d-block'
														src={editedShoe.IMAGE[image]}
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
								{imageProperties.map(image => {
									return (
										<div key={image + '-input'} className={styles.inputImage}>
											<label className={styles.imageTitle}>{image}:</label>
											<img
												className={styles.inputImagePreview}
												src={editedShoe?.IMAGE[image]}
												alt=''
											/>
											<div className={styles.inputImageFileWrapper}>
												<input
													className={styles.inputImageFile}
													type='file'
													id={image}
													name={image}
													onChange={handleImagesChange}
												/>
											</div>

											<input
												className={styles.inputImageURL}
												type='text'
												id={image + '-url'}
												name={image}
												value={editedShoe?.IMAGE[image]}
												onChange={handleImageURLChange}
											/>
										</div>
									)
								})}
							</div>
						</div>
						<div className={styles.descriptionContainer}>
							<div className={styles.inputFieldGrid}>
								<h1 className={styles.title}>
									Name:
									<input
										type='text'
										name='NAME'
										value={editedShoe?.NAME}
										onChange={handleInputChange}
									/>
								</h1>

								<h2 className={styles.title}>
									Code:
									<input
										type='text'
										name='CODE'
										value={editedShoe?.CODE}
										onChange={handleInputChange}
									/>
								</h2>
								<h2 className={styles.title}>
									Status:
									<div className={styles.statusContainer}>
										<select
											className={styles.selectStatus}
											type='text'
											name='STATUS'
											value={editedShoe?.STATUS}
											onChange={handleInputChange}
										>
											<option value='true'>
												true <span>✅</span>
											</option>
											<option value='false'>
												false <span>❌</span>
											</option>
										</select>
									</div>
								</h2>
								<h2 className={styles.title}>
									Price:
									<input
										type='text'
										name='PRICE'
										value={editedShoe?.PRICE}
										onChange={handleInputChange}
									/>
								</h2>
							</div>

							<div className={styles.sizesContainer}>
								<h1 className={styles.title}>Sizes:</h1>
								<ul className={styles.sizesChecks}>
									{sizes?.map(size => (
										<li className={styles.sizeCheckInputContainer} key={size}>
											<span
												key={size}
												className={
													Number(editedShoe?.SIZE[size]) > 0
														? styles.sizeCheck
														: styles.sizeDisabled
												}
												value={size}
											>
												{size}
											</span>
											<input
												className={styles.sizeInput}
												type='text'
												name={size}
												value={editedShoe?.SIZE[size]}
												onChange={handleSizesChange}
											/>
										</li>
									))}
								</ul>
							</div>
							<div className={styles.description}>
								<h4 className={styles.descriptionh4}>Description</h4>
								<p className={styles.descriptionText}>
									<textarea
										name='DESCRIPTION'
										className={styles.descriptionTextArea}
										value={editedShoe?.DESCRIPTION}
										onChange={handleInputChange}
										rows='6'
									/>
								</p>
							</div>
							<div>
								<button className={styles.saveButton} type='submit'>
									Save changes
								</button>
							</div>
						</div>
					</form>
				)}
			</div>
		</>
	)
}

EditSneaker.propTypes = {
	shoeId: PropTypes.string.isRequired
}
