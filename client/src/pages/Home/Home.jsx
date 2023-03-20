import { Navbar, HomeCarousel, Footer, Snkrs} from '../../components'
import styles from './Home.module.css'
export function Home() {
	return (
		<div>
			<Navbar />
			<h2 className={styles.h2}>Collabs with nike</h2>
			<HomeCarousel />
			<h2 className={styles.h2}>Best selling sneakers</h2>
			< Snkrs />
			<Footer />
		</div>
	)
}
