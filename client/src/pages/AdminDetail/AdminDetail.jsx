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

import styles from './AdminDetail.module.css'
import { doc, setDoc } from 'firebase/firestore'
import { initializeApp } from 'firebase/app'

import { getFirestore } from 'firebase/firestore'

import {
	getStorage,
	ref,
	uploadBytes,
	uploadBytesResumable,
	getDownloadURL
} from 'firebase/storage'

export function AdminDetail() {
	const dispatch = useDispatch()
	const { uid } = useSelector(state => state.auth)
	const { shoeId } = useParams()

	const [sizeSelected, setSizeSelected] = useState('')
	const [addCartAlert, setAddCartAlert] = useState('')

	const { data: shoe, isLoading, error } = useGetShoesByIdQuery(shoeId)
	const { data: sizes } = useGetSizesQuery()

	console.log('adasdasdasd')

	// TODO: Replace the following with your app's Firebase project configuration
	// See: https://support.google.com/firebase/answer/7015592
	const firebaseConfig = {
		apiKey: 'AIzaSyDUoOvEHAy2u93FJdEZOIMvNc7FVj0zzyI',
		authDomain: 'airland-9c55f.firebaseapp.com',
		projectId: 'airland-9c55f',
		storageBucket: 'airland-9c55f.appspot.com',
		messagingSenderId: '950391872961',
		appId: '1:950391872961:web:40c3157f0aba3381b26340',
		measurementId: 'G-PKRM4MYBT2'
	}

	// Initialize Firebase
	const app = initializeApp(firebaseConfig)
	const storage = getStorage(app)
	const handleAddToCart = async event => {
		const valorNOMBRE = document.getElementById('miInput').value
		const valorPRICE = document.getElementById('miPrice').value

		const valorDESCRIPTION = document.getElementById('miDESCRIPTION').value
		const FULL = document.getElementById('FULL').value
		const LEFT = document.getElementById('LEFT').value
		const RIGHT = document.getElementById('RIGHT').value
		const THUMBNAIL = document.getElementById('THUMBNAIL').value
		const TOPVIEW = document.getElementById('TOPVIEW').value
		const miCODE = document.getElementById('miCODE').value

		var checkbox = document.getElementById('miCheckbox')
		if (checkbox.checked) {
			console.log(true)
			checkbox = true
		} else {
			console.log(false)
			checkbox = false
		}

		await setDoc(doc(db, 'ZAPATILLAS-PRUEBA', shoeId), {
			ACTION: '',
			CODE: miCODE,
			DESCRIPTION: valorDESCRIPTION,
			IMAGE: {
				FULL: FULL,
				LEFT: LEFT,
				RIGHT: RIGHT,
				THUMBNAIL: THUMBNAIL,
				TOPVIEW: TOPVIEW
			},
			NAME: valorNOMBRE,
			PRICE: valorPRICE,
			RATING: '',
			REVIEW: '',
			STATUS: checkbox,
			STOCK: checkbox,
			SIZE: '',
			TYPE: ''
		})
		console.log('guardado')
		//agregar size
	}
	const handleImageChange = e => {
		console.log('ggola')
		const file = e.target.files[0]
		// console.log(file);

		const storageRef = ref(storage, `Zapatillas-prueba-exe/${file.name}`)
		const uploadTask = uploadBytesResumable(storageRef, file)

		uploadTask.on(
			'state_changed',
			snapshot => {
				const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
				console.log(progress)
			},
			error => {
				toast.error(error.message)
			},
			() => {
				getDownloadURL(uploadTask.snapshot.ref).then(downloadURL => {
					document.getElementById('FULL').value = downloadURL

					//setProduct({ ...product, imageURL: downloadURL })
					toast.success('Image uploaded successfully.')
				})
			}
		)
	}

	const handleSizeChange = event => {
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
						<label className={styles.title}>
							FULL
							<input type='NAME' id='FULL' />
							<input
								type='file'
								accept='image/*'
								placeholder='Product Image'
								name='image'
								onChange={e => handleImageChange(e)}
							/>
						</label>
						<label className={styles.title}>
							LEFT
							<input type='NAME' id='LEFT' />
							<input
								type='file'
								accept='image/*'
								placeholder='Product Image'
								name='image'
								onChange={e => handleImageChange(e)}
							/>
						</label>

						<label className={styles.title}>
							RIGHT
							<input type='NAME' id='RIGHT' />
							<input
								type='file'
								accept='image/*'
								placeholder='Product Image'
								name='image'
								onChange={e => handleImageChange(e)}
							/>
						</label>

						<label className={styles.title}>
							THUMBNAIL
							<input type='NAME' id='THUMBNAIL' />
							<input
								type='file'
								accept='image/*'
								placeholder='Product Image'
								name='image'
								onChange={e => handleImageChange(e)}
							/>
						</label>
						<label className={styles.title}>
							TOPVIEW
							<input type='NAME' id='TOPVIEW' />
							<input
								type='file'
								accept='image/*'
								placeholder='Product Image'
								name='image'
								onChange={e => handleImageChange(e)}
							/>
						</label>
						<Carousel />
						<div className={styles.descriptionContainer}>
							<div>
								CAMBIAR EL NOMBRE:
								<label className={styles.title}>
									<input type='NAME' id='miInput' placeholder={shoe.NAME} />
								</label>
							</div>
							<div>
								CAMBIAR CODIGO:
								<div>
									<label className={styles.title}>
										<input
											type='CODE'
											name='CODE'
											id='miCODE'
											placeholder={shoe.CODE}
										/>
									</label>
								</div>
								<span className={styles.code}>Item No. {shoe.CODE}</span>
							</div>

							<div>
								CAMBIAR EL PRECIO:
								<label className={styles.title}>
									<input
										type='PRICE'
										name='PRICE'
										id='miPrice'
										placeholder={shoe.PRICE}
									/>
								</label>
							</div>
							<div>
								STATUS:
								<label class={styles.micheckbox}>
									<input
										type='checkbox'
										id='miCheckbox'
										placeholder={shoe.STOCK}
									/>
								</label>
							</div>

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
											<input placeholder={shoe.SIZE[size]} />
										</li>
									))}
								</ul>
							</div>
							<div className={styles.description}>
								<h4 className={styles.descriptionh4}>Description</h4>
								<p className={styles.descriptionText}>{shoe.DESCRIPTION}</p>
								<div>
									<label className={styles.title}>
										<input
											type='DESCRIPTION'
											name='DESCRIPTION'
											id='miDESCRIPTION'
											placeholder={shoe.DESCRIPTION}
										/>
									</label>
								</div>
							</div>
							<div className={styles.addCartContainer}>
								<button
									className={styles.addToCartButton}
									onClick={handleAddToCart}
								>
									GUARDAR CAMBIOS
								</button>
								{addCartAlert}
							</div>
						</div>
					</div>
				)}
			</div>
			<WhatsAppButton />
			<Footer />
		</>
	)
}
