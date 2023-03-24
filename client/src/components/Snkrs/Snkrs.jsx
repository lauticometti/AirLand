import styles from './Snkrs.module.css'
import { Link } from 'react-router-dom'

export function Snkrs() {
	return (
		<div className={styles.section}>
			<Link to='/detail/gaIBES7VEgHNcCsgiHJu' className={styles.link}>
				<img
					className={styles.img}
					src="https://firebasestorage.googleapis.com/v0/b/airland-9c55f.appspot.com/o/Zapatillas(images)%2FNike-Air-Force-1-Mid-'07-Flax-(2022)-(full).webp?alt=media&token=0be6132f-33c1-476d-ab88-6a19ee67cd12"
					alt="'airforce1"
				/>
			</Link>
			<Link to='/detail/EeT7b7bK6qhBx8YppB2F' className={styles.link}>
				<img
					className={styles.img}
					src="https://firebasestorage.googleapis.com/v0/b/airland-9c55f.appspot.com/o/Zapatillas(images)%2FNike-Air-Force-1-High-Unlocked-By-You-(full).webp?alt=media&token=f07c8007-98fc-45b2-b7f5-5f8a58bf608e"
					alt="'airforce1"
				/>
			</Link>
			<Link to='/detail/xhz9pkXasQDGusDn4eDd ' className={styles.link}>
				<img
					className={styles.img}
					src="https://firebasestorage.googleapis.com/v0/b/airland-9c55f.appspot.com/o/Zapatillas(images)%2FNike-Air-Force-1-High-By-You-(full).webp?alt=media&token=e78b469d-6d68-4b46-8e4b-41c50b28c966"
					alt="'airforce1"
				/>
			</Link>
			<Link to='/detail/siGa15dpl2hXZkIcSlMP' className={styles.link}>
				<img
					className={styles.img}
					src="https://firebasestorage.googleapis.com/v0/b/airland-9c55f.appspot.com/o/Zapatillas(images)%2FAIR-FORCE-1-'07-UNO-(full).webp?alt=media&token=d72fc0fd-bb99-4ba4-8fe1-c2cdc6c0a52d"
					alt="'airforce1"
				/>
			</Link>
			<Link to='/detail/ZvzcfO4LfcrHWYcFcY6I' className={styles.link}>
				<img
					className={styles.img}
					src="https://firebasestorage.googleapis.com/v0/b/airland-9c55f.appspot.com/o/Zapatillas(images)%2FNike-Air-Force-1-Low-'07-White-Black-Pebbled-Leather-(full).webp?alt=media&token=141907eb-6bae-4f7e-9e32-d7272bb47669"
					alt="'airforce1"
				/>
			</Link>
		</div>
	)
}
