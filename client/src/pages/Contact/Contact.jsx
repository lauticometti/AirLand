import styles from './Contact.module.css'
import {
	Navbar,
	Footer,
	Services,
	GoogleMap,
	WhatsAppButton
} from '../../components'
import emailjs from '@emailjs/browser'
import swal from 'sweetalert'
import { useState } from 'react'

const formData = {
	name: '',
	email: '',
	message: ''
}

export function Contact() {
	const [form, setForm] = useState(formData)
	const handleChange = event => {
		setForm({
			...form,
			[event.target.name]: event.target.value
		})
	}
	const sendEmail = event => {
		event.preventDefault()
		if (form.name && form.email && form.message) {
			mostrarAlerta(true)
			emailjs
				.sendForm(
					'service_4pkdd5m',
					'template_0ui2buc',
					event.target,
					'R7XgKtrSj-Vs5_RTL'
				)
				.then(response => console.log(response))
				.catch(error => console.log(error))
		} else mostrarAlerta(false)
	}
	const mostrarAlerta = isSent => {
		isSent
			? swal({
					title: 'Message sent',
					text: 'We will contact you soon',
					icon: 'success',
					timer: '2000'
			  })
			: swal({
					title: 'Error',
					text: 'Please complete the fields before sending',
					icon: 'error',
					timer: '2500'
			  })
	}
	return (
		<div>
			<Navbar />
			<h1 className={styles.contactTitle}>Contact us</h1>
			<Services />
			<h1 className={styles.contactTitle}>Come visit our store</h1>
			<GoogleMap />
			<div className={styles['contact-page']}>
				<h1 className={styles.contactTitle}>Send us a message here</h1>
				<form onSubmit={sendEmail}>
					<div className={styles.formField}>
						<label>Name</label>
						<input
							type='text'
							name='name'
							value={form.name}
							onChange={handleChange}
						/>
					</div>
					<div className={styles.formField}>
						<label>Email</label>
						<input
							type='email'
							name='email'
							value={form.email}
							onChange={handleChange}
						/>
					</div>
					<div className={styles.formField}>
						<label>Message</label>
						<textarea
							name='message'
							rows='5'
							value={form.message}
							onChange={handleChange}
						/>
					</div>
					<button type='submit'>Send</button>
				</form>
			</div>
			<WhatsAppButton />
			<Footer />
		</div>
	)
}
