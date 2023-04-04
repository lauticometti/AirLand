import { useEffect, useState } from 'react'
import { firebaseStorage } from '../../../../firebase'
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage'
import styles from './CreateSneaker.module.css'
import { useDispatch } from 'react-redux'
import { useGetSizesQuery } from '../../../../redux/services/services'
import { Loader } from '../../../../components'
import Carousel from 'react-bootstrap/Carousel'
import { setEditCount } from '../../../../redux'
import swal from 'sweetalert'

export function CreateSneaker() {
	const dispatch = useDispatch()

	const { data: sizes } = useGetSizesQuery()

	const [shoe, setEditedShoe] = useState({})

	const handleInputChange = event => {
		const { name, value } = event.target
		setEditedShoe({ ...shoe, [name]: value })
	}

	const handleSizesChange = event => {
		let { name, value } = event.target
		if (value === 'true') value = true
		if (value === 'false') value = false
		setEditedShoe({
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
					setEditedShoe({
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
		setEditedShoe({
			...shoe,
			IMAGE: { ...shoe.IMAGE, [name]: value }
		})
	}

	const handleFormSubmit = event => {
		event.preventDefault()
		try {
			dispatch(setEditCount())
		} catch (error) {
			swal({
				title: 'An error occurred while creating',
				message: error.message,
				icon: 'warning',
				timer: 2000
			})
		}
	}

	useEffect(() => {
		setEditedShoe(shoe)
	}, [shoe])

	return (
		<>
			<form className={styles.shoeContainer} onSubmit={handleFormSubmit}>
				<div className={styles.allImagesContainer}>
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
						<img
							src={shoe?.IMAGE.TOPVIEW}
							alt='topview'
							className={styles.imageElement}
						/>
						<img
							src={shoe?.IMAGE.LEFT}
							alt='left'
							className={styles.imageElement}
						/>
						<img
							src={shoe?.IMAGE.RIGHT}
							alt='right'
							className={styles.imageElement}
						/>
						<img
							src={shoe?.IMAGE.FULL}
							alt='full'
							className={styles.imageElement}
						/>
						<img
							src={shoe?.IMAGE.THUMBNAIL}
							alt='thumbnail'
							className={styles.imageElement}
						/>
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
				<div>
					<div>
						<label htmlFor='full'>Full image:</label>
						<input
							type='file'
							id='full'
							accept='image/*'
							name='FULL'
							onChange={handleImageChange}
						/>
					</div>
					<div>
						<label htmlFor='left'>Left image:</label>
						<input
							type='file'
							id='left'
							name='LEFT'
							onChange={handleImageChange}
						/>
						<img src={images.LEFT} alt='' />
						<input
							type='text'
							id='left-url'
							name='LEFT'
							value={images.LEFT}
							onChange={handleImageURLChange}
						/>
					</div>
					<div>
						<label htmlFor='right'>Right image:</label>
						<input
							type='file'
							id='right'
							name='RIGHT'
							value={images.RIGHT}
							onChange={handleImageChange}
						/>
					</div>
					<div>
						<label htmlFor='thumbnail'>Thumbnail image:</label>
						<input
							type='file'
							id='thumbnail'
							name='THUMBNAIL'
							value={images.THUMBNAIL}
							onChange={handleImageChange}
						/>
					</div>
					<div>
						<label htmlFor='topview'>Top view image:</label>
						<input
							type='file'
							id='topview'
							name='TOPVIEW'
							value={images.TOPVIEW}
							onChange={handleImageChange}
						/>
					</div>
				</div>
				<div>
					<button type='submit'>Create</button>
				</div>
			</form>
		</>
	)
}

export default CreateSneaker
