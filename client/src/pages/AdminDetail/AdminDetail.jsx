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

<<<<<<< guardoadmin
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
=======
import { doc, setDoc } from 'firebase/firestore'

import { getFirestore } from 'firebase/firestore'
import styles from '../Detail/Detail.module.css'
>>>>>>> local

import {
	getStorage,
	ref,
	uploadBytes,
	uploadBytesResumable,
	getDownloadURL
} from 'firebase/storage'

import { FirebaseApp, firebaseDb, storage } from '../../firebase/config'
import { initializeApp } from 'firebase/app'

import 'firebase/storage'

export function AdminDetail() {
	const dispatch = useDispatch()
	const { uid } = useSelector(state => state.auth)
	const { shoeId } = useParams()

	const [sizeSelected, setSizeSelected] = useState('')
	const [addCartAlert, setAddCartAlert] = useState('')

	const { data: shoe, isLoading, error } = useGetShoesByIdQuery(shoeId)
	const { data: sizes } = useGetSizesQuery()

<<<<<<< guardoadmin
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
=======
	console.log('Functin AdminDetail')

	// TODO: Replace the following with your app's Firebase project configuration
	// See: https://support.google.com/firebase/answer/7015592

>>>>>>> local
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

<<<<<<< guardoadmin
=======
		//talles
		const primero = document.getElementById('zize38').value
		const segundo = document.getElementById('zize39').value
		const tercero = document.getElementById('zize40').value
		const cuarto = document.getElementById('zize41').value
		const quinto = document.getElementById('zize42').value
		const sexto = document.getElementById('zize43').value
		const septimo = document.getElementById('zize44').value
		const octabvo = document.getElementById('zize45').value

>>>>>>> local
		var checkbox = document.getElementById('miCheckbox')
		if (checkbox.checked) {
			console.log(true)
			checkbox = true
		} else {
			console.log(false)
			checkbox = false
		}

<<<<<<< guardoadmin
		await setDoc(doc(db, 'ZAPATILLAS-PRUEBA', shoeId), {
=======
		await setDoc(doc(firebaseDb, 'ZAPATILLAS-PRUEBA', shoeId), {
>>>>>>> local
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
<<<<<<< guardoadmin
			SIZE: '',
=======
			SIZE: {
				38: primero,
				39: segundo,
				40: tercero,
				41: cuarto,
				42: quinto,
				43: sexto,
				44: septimo,
				45: octabvo
			},
>>>>>>> local
			TYPE: ''
		})
		console.log('guardado')
		//agregar size
	}
	const handleImageChange = e => {
<<<<<<< guardoadmin
		console.log('ggola')
		const file = e.target.files[0]
		// console.log(file);
=======
		const file = e.target.files[0]
		console.log(file)
>>>>>>> local

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
<<<<<<< guardoadmin
					document.getElementById('FULL').value = downloadURL
=======
					if (document.getElementById('FULL').value == 'FULL') {
						console.log('entro aca')
						document.getElementById('FULL').value = downloadURL
					}
>>>>>>> local

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
<<<<<<< guardoadmin
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
=======
			<div>
				{isLoading ? (
					<div>
						<Loader />
					</div>
				) : error ? (
					<div>
						<NotFound />
					</div>
				) : (
					<div>
						<label>
>>>>>>> local
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
<<<<<<< guardoadmin
						<label className={styles.title}>
=======
						<label>
>>>>>>> local
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

<<<<<<< guardoadmin
						<label className={styles.title}>
=======
						<label>
>>>>>>> local
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

<<<<<<< guardoadmin
						<label className={styles.title}>
=======
						<label>
>>>>>>> local
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
<<<<<<< guardoadmin
						<label className={styles.title}>
=======
						<label>
>>>>>>> local
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
<<<<<<< guardoadmin
						<div className={styles.descriptionContainer}>
							<div>
								CAMBIAR EL NOMBRE:
								<label className={styles.title}>
=======
						<div>
							<div>
								CAMBIAR EL NOMBRE:
								<label>
>>>>>>> local
									<input type='NAME' id='miInput' placeholder={shoe.NAME} />
								</label>
							</div>
							<div>
								CAMBIAR CODIGO:
								<div>
<<<<<<< guardoadmin
									<label className={styles.title}>
=======
									<label>
>>>>>>> local
										<input
											type='CODE'
											name='CODE'
											id='miCODE'
											placeholder={shoe.CODE}
										/>
									</label>
								</div>
<<<<<<< guardoadmin
								<span className={styles.code}>Item No. {shoe.CODE}</span>
=======
								<span>Item No. {shoe.CODE}</span>
>>>>>>> local
							</div>

							<div>
								CAMBIAR EL PRECIO:
<<<<<<< guardoadmin
								<label className={styles.title}>
=======
								<label>
>>>>>>> local
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

<<<<<<< guardoadmin
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
=======
							<div>
								<p>Sizes</p>
								<ul>
									<label>
										38
										<input type='NAME' id='zize38' />
									</label>
									<label>
										39
										<input type='NAME' id='zize39' />
									</label>
									<label>
										40
										<input type='NAME' id='zize40' />
									</label>
									<label>
										41
										<input type='NAME' id='zize41' />
									</label>
									<label>
										42
										<input type='NAME' id='zize42' />
									</label>
									<label>
										43
										<input type='NAME' id='zize43' />
									</label>
									<label>
										44
										<input type='NAME' id='zize44' />
									</label>
									<label>
										45
										<input type='NAME' id='zize45' />
									</label>
								</ul>
							</div>
							<div>
								<h4>Description</h4>
								<p>{shoe.DESCRIPTION}</p>
>>>>>>> local
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
