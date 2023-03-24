import {
	Navbar,
	HomeCarousel,
	Footer,
	Snkrs,
	WhatsAppButton
} from '../../components'
import styles from './Home.module.css'
export function Home() {
	return (
		<div>
			<Navbar />

			<section className={styles.carouselSection}>
				<h2 className={styles.h2}>Collabs with our stars</h2>
				<HomeCarousel />
			</section>

			<section className={styles.bestSellingSection}>
				<h2 className={styles.h2}>Best selling sneakers</h2>
				<Snkrs />
			</section>

			<WhatsAppButton />
			<Footer />
		</div>
	)
}
