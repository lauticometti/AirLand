import './Contact.css'
import {
	Navbar,
	Footer,
	Services,
	GoogleMap,
	WhatsAppButton
} from '../../components'
import React from 'react'
import emailjs from '@emailjs/browser'
import swal from 'sweetalert'

export function Contact() {
	const sendEmail = event => {
		event.preventDefault()

		emailjs
			.sendForm(
				'service_4pkdd5m',
				'template_0ui2buc',
				event.target,
				'R7XgKtrSj-Vs5_RTL'
			)
			.then(response => console.log(response))
			.catch(error => console.log(error))
	}
	const mostrarAlerta = () => {
		swal({
			title: 'Message sent',
			text: 'We will contact you soon',
			icon: 'success',
			timer: '2000'
		})
	}
	return (
		<div>
			<Navbar />
			<h1 className='h1'>Contact us</h1>
			<Services />
			<GoogleMap />
			<div className='contact-page'>
				<h1>leave us a message</h1>
				<form onSubmit={sendEmail}>
					<label>Name</label>
					<input type='text' name='name' />
					<label>Email</label>
					<input type='email' name='email' />
					<label>Message</label>
					<textarea name='message' rows='5' />
					<button type='submit' onClick={() => mostrarAlerta()}>
						Send
					</button>
				</form>
			</div>
			<WhatsAppButton />
			<Footer />
		</div>
	)
}
