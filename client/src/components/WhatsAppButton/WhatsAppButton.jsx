import { FaWhatsapp } from 'react-icons/fa'
import styles from './WhatsAppButton.module.css'

export function WhatsAppButton() {
	return (
		<a
			href='https://api.whatsapp.com/send?phone=5491164602560&text=Hi!+I+need+more+information+about...'
<<<<<<< HEAD
			className={styles.whatsappFloat}
			target='_blank'
			rel='noopener noreferrer'
		>
			<FaWhatsapp size={36} color='#fff' />
=======
			className={styles.whatsapp_float}
			target='_blank'
			rel='noopener noreferrer'
		>
			<FaWhatsapp size={28} color='#fff' />
>>>>>>> develop
		</a>
	)
}
