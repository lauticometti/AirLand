import styles from './About.module.css'
import { Navbar, Footer, WhatsAppButton } from '../../components'
import logo from '../../assets/icons/air_land-black.svg'

export function About() {
	return (
		<>
			{' '}
			<Navbar />
			<div className={styles.prueba}>
				<img className={styles.imag} src={logo}></img>
				<p className={styles.p}>
					&quot;Nosotros somos un equipo de siete desarrolladores trabajando
					juntos en el proyecto final de Henry. Cada uno de nosotros aporta
					habilidades y experiencia únicas para lograr nuestros objetivos
					comunes. Nuestro equipo está comprometido a trabajar de manera
					colaborativa y enfocada en brindar soluciones innovadoras a los
					desafíos de programación que se presentan. Estamos emocionados de
					compartir nuestro conocimiento y habilidades para lograr el éxito en
					este proyecto final y en futuros proyectos&quot;.
				</p>
				<p className={styles.p}>
					&quot;We are a team of seven developers working together on the final
					project at Henry. Each of us brings unique skills and experience to
					achieve our common goals. Our team is committed to working
					collaboratively and focused on providing innovative solutions to
					programming challenges. We are excited to share our knowledge and
					skills to achieve success in this final project and in future
					endeavors&quot;.
				</p>
			</div>
			<WhatsAppButton />
			<Footer />
		</>
	)
}
