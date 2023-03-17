import styles from './Footer.module.css'

export function Footer() {
	return (
		<footer className={styles.footer}>
			<div className={styles.container}>
				<div className={styles.row}>
					<div className={styles.p}>
						<h3>E-commerce Airland</h3>
						<p>
							In our online store you can find all the nike air force 1 shoes
						</p>
					</div>
				</div>
			</div>
			<p className={styles.p}>
				All rights reserved © 2023 Airland. Final project
			</p>
		</footer>
	)
}
