import React from 'react'

import { Link, useParams } from 'react-router-dom'
import { FirebaseApp, firebaseDb, storage } from '../../../../firebase/config'
import { doc, setDoc } from 'firebase/firestore'
import { v4 as uuidv4 } from 'uuid'
import {
	getStorage,
	ref,
	uploadBytes,
	uploadBytesResumable,
	getDownloadURL
} from 'firebase/storage'

const click = async event => {
	const uniqueId = uuidv4()
	const valorNOMBRE = document.getElementById('miInput').value
	const valorPRICE = document.getElementById('miPrice').value
	const valorDESCRIPTION = document.getElementById('miDESCRIPTION').value
	const miCODE = document.getElementById('miCODE').value

	//talles jajaja
	const primero = document.getElementById('zize38').value
	const segundo = document.getElementById('zize39').value
	const tercero = document.getElementById('zize40').value
	const cuarto = document.getElementById('zize41').value
	const quinto = document.getElementById('zize42').value
	const sexto = document.getElementById('zize43').value
	const septimo = document.getElementById('zize44').value
	const octabvo = document.getElementById('zize45').value

	//imagnes xD
	const FULL = document.getElementById('FULL').value
	const LEFT = document.getElementById('LEFT').value
	const RIGHT = document.getElementById('RIGHT').value
	const THUMBNAIL = document.getElementById('THUMBNAIL').value
	const TOPVIEW = document.getElementById('TOPVIEW').value

	var checkbox = document.getElementById('miCheckbox')
	if (checkbox.checked) {
		console.log(true)
		checkbox = true
	} else {
		console.log(false)
		checkbox = false
	}

	console.log('gola')
	const docData = {
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
		TYPE: ''
	}
	await setDoc(doc(firebaseDb, 'ZAPATILLAS-PRUEBA', uniqueId), docData)
	console.log('guardado')
}

const handleImageChange = e => {
	const file = e.target.files[0]
	console.log(file)

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
				//console.log(downloadURL)
				//document.getElementById('FULL').value = downloadURL
				var imagenqliada = document.getElementById('FULL').type
				console.logimagenqliada

				if (imagenqliada == 'FULL') {
					document.getElementById('FULL').value = downloadURL
				}

				//	console.log(imagenqliada)
				//setProduct({ ...product, imageURL: downloadURL })
				toast.success('Image uploaded successfully.')
			})
		}
	)

	function agregarurlalinptuhijodemilputa(value) {
		console.log(value + 'asdasd')
	}
}

function CreateSneaker() {
	const { shoeId } = useParams()
	return (
		<div>
			CreateSneaker
			<div>
				NOMBRE:
				<label>
					<input type='NAME' id='miInput' placeholder='{shoe.NAME}' />
				</label>
			</div>
			<div>
				CODIGO:
				<label>
					<input
						type='CODE'
						name='CODE'
						id='miCODE'
						placeholder='{shoe.CODE}'
					/>
				</label>
			</div>
			<div>
				PRECIO:
				<label>
					<input
						type='PRICE'
						name='PRICE'
						id='miPrice'
						placeholder='{shoe.PRICE}'
					/>
				</label>
			</div>
			<div>
				STATUS:
				<label>
					<input type='checkbox' id='miCheckbox' placeholder='{shoe.STOCK}' />
				</label>
			</div>
			<div>
				<h4>Description</h4>

				<input
					type='DESCRIPTION'
					name='DESCRIPTION'
					id='miDESCRIPTION'
					placeholder='{shoe.DESCRIPTION}'
				/>
			</div>
			<div>
				<label>
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
				<label>
					LEFT
					<input type='NAME' id='FULL' />
					<input
						type='file'
						accept='image/*'
						placeholder='Product Image'
						name='image'
						onChange={e => handleImageChange(e)}
					/>
				</label>

				<label>
					RIGHT
					<input type='NAME' id='FULL' />
					<input
						type='file'
						accept='image/*'
						placeholder='Product Image'
						name='image'
						onChange={e => handleImageChange(e)}
					/>
				</label>

				<label>
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
				<label>
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
			</div>
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
			<button onClick={click}>GUARDAR CAMBIOS</button>
		</div>
	)
}

export default CreateSneaker
