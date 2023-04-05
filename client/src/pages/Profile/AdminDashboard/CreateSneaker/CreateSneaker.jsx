import { useEffect, useState } from 'react'
import { Loader } from '../../../../components'
import {
	useAddShoeMutation,
	useGetSizesQuery
} from '../../../../redux/services/services'
import { firebaseStorage } from '../../../../firebase'
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage'
import Carousel from 'react-bootstrap/Carousel'
import styles from './CreateSneaker.module.css'
import { useDispatch } from 'react-redux'
import { setEditCount } from '../../../../redux'
import swal from 'sweetalert'

export function CreateSneaker() {
	const dispatch = useDispatch()

	const [addShoe] = useAddShoeMutation()

	const { data: sizes } = useGetSizesQuery()

	const [shoe, setShoe] = useState({
		TYPE: 'Low',
		IMAGE: {
			TOPVIEW:
				"https://firebasestorage.googleapis.com/v0/b/airland-9c55f.appspot.com/o/Zapatillas(images)%2FNike%20Air%20Force%201%20'07%20White%20(topview).webp?alt=media&token=e1e6a029-ad28-4e4d-b9ed-91b810fc8626",
			LEFT: "https://firebasestorage.googleapis.com/v0/b/airland-9c55f.appspot.com/o/Zapatillas(images)%2FNike%20Air%20Force%201%20'07%20White%20(left).webp?alt=media&token=2e4a03ec-eeb9-4d5f-9c03-578e83320b40",
			RIGHT:
				"https://firebasestorage.googleapis.com/v0/b/airland-9c55f.appspot.com/o/Zapatillas(images)%2FNike%20Air%20Force%201%20'07%20White%20(right).webp?alt=media&token=8203ee98-c8c2-4ede-b008-4f3b379e3a79",
			THUMBNAIL:
				"https://firebasestorage.googleapis.com/v0/b/airland-9c55f.appspot.com/o/Zapatillas(images)%2FNike%20Air%20Force%201%20'07%20White%20(thumbnail).webp?alt=media&token=7a1109fc-1303-40df-81ae-11a59b3f857d",
			FULL: "https://firebasestorage.googleapis.com/v0/b/airland-9c55f.appspot.com/o/Zapatillas(images)%2FNike%20Air%20Force%201%20'07%20White%20(full).webp?alt=media&token=df47e90a-9c8e-471d-95d1-d80bcf047571"
		},
		NAME: 'Nike Air Force',
		DESCRIPTION: '',
		CODE: '',
		PRICE: '0',
		STATUS: true,
		SIZE: {
			38: '0',
			39: '0',
			40: '0',
			41: '0',
			42: '0',
			43: '0',
			44: '0',
			45: '0'
		},
		REVIEW: {}
	})

	const imageProperties = ['TOPVIEW', 'LEFT', 'FULL', 'RIGHT', 'THUMBNAIL']

	const handleInputChange = event => {
		const { name, value } = event.target
		setShoe({ ...shoe, [name]: value })
	}

	const handleSizesChange = event => {
		let { name, value } = event.target
		if (value === 'true') value = true
		if (value === 'false') value = false
		setShoe({
			...shoe,
			SIZE: { ...shoe.SIZE, [name]: value }
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
					setShoe({
						...shoe,
						IMAGE: { ...shoe.IMAGE, [name]: downloadURL }
					})
					console.log('Image uploaded successfully.')
				})
			}
		)
	}

	const handleImageURLChange = e => {
		const { name, value } = event.target
		setShoe({
			...shoe,
			IMAGE: { ...shoe.IMAGE, [name]: value }
		})
	}

	const handleFormSubmit = event => {
		event.preventDefault()
		addShoe(shoe)
			.unwrap()
			.then(addedShoe => {
				swal({
					title: 'Created sucessfully!',
					message: 'The sneaker has been added to the database.',
					icon: 'success',
					timer: 2000
				})
				dispatch(setEditCount())
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
		setShoe(shoe)
	}, [shoe])

	return (
		<div className={styles.mainContainer}>
			<form className={styles.shoeContainer} onSubmit={handleFormSubmit}>
				<div className={styles.allImagesContainer}>
					<p>
						<span style={{ fontWeight: 'bold' }}>
							Recommended Image format:
						</span>{' '}
						alpha bg WEBP 1000x1000px
					</p>
					<p>
						<span style={{ fontWeight: 'bold' }}>
							Recommended Thumbnail format:
						</span>{' '}
						white bg WEBP 300x300px
					</p>
					<div className={styles.carouselContainer}>
						<Carousel variant='dark'>
							{shoe?.IMAGE ? (
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
						{imageProperties.map(image => {
							return (
								<div key={image + '-input'} className={styles.inputImage}>
									<label className={styles.imageTitle}>{image}:</label>
									<img
										className={styles.inputImagePreview}
										src={shoe?.IMAGE[image]}
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
										value={shoe?.IMAGE[image]}
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
								value={shoe?.NAME}
								onChange={handleInputChange}
							/>
						</h1>

						<h2 className={styles.title}>
							Code:
							<input
								type='text'
								name='CODE'
								value={shoe?.CODE}
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
									value={shoe?.STATUS}
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
							Type:
							<div className={styles.statusContainer}>
								<select
									className={styles.selectStatus}
									style={{ textAlign: 'left' }}
									type='text'
									name='TYPE'
									value={shoe?.TYPE}
									onChange={handleInputChange}
								>
									<option value='Low'>Low</option>
									<option value='Mid'>Mid</option>
									<option value='High'>High</option>
								</select>
							</div>
						</h2>
						<h2 className={styles.title}>
							Price:
							<input
								type='text'
								name='PRICE'
								value={shoe?.PRICE}
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
											Number(shoe?.SIZE[size]) > 0
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
										value={shoe?.SIZE[size]}
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
								value={shoe?.DESCRIPTION}
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
		</div>
	)
}
