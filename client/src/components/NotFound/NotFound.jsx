import styles from './NotFound.module.css'
import { error } from '../../assets/images'
import { Link, useNavigate } from 'react-router-dom'

export function NotFound() {
	const navigate = useNavigate()
	return (
		<div className={styles.wrapper}>
			<div className={styles.container}>
				<h1 className={styles.title}>Oops! You seem to be lost.</h1>
				<div className={styles.imageContainer}>
					<img src={error.default} className={styles.errorImage} />
				</div>
				<button onClick={() => navigate(-1)} className={styles.goBack}>
					Go back
				</button>
				<p className={styles.or}>or</p>
				<ul className={styles.list}>
					<li>
						<Link to='/snkrs' className={styles.link}>
							See sneakers
						</Link>
					</li>
				</ul>
			</div>
		</div>
	)
}
