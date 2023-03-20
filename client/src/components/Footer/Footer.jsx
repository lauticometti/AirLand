import styles from './Footer.module.css'
import { Link } from 'react-router-dom'
import { exe, ivan, joan, juli, lauti, lichi, nico } from '../../assets/devs'
import logo from '../../assets/air_land-white.svg'

export function Footer() {
	const devs = {
		lauti: {
			img: lauti.default,
			github: 'https://github.com/lauticometti'
		},
		exe: {
			img: exe.default,
			github: 'https://github.com/exefiguee'
		},
		ivan: {
			img: ivan.default,
			github: 'https://github.com/ivanbvn'
		},
		nico: {
			img: nico.default,
			github: 'https://github.com/NMA44'
		},
		juli: {
			img: juli.default,
			github: 'https://github.com/julcontrerass'
		},
		joan: {
			img: joan.default,
			github: 'https://github.com/trollocat'
		},
		lichi: {
			img: lichi.default,
			github: 'https://github.com/LisandroRomero'
		}
	}

	return (
		<footer className={styles.footer}>
			<div className={styles.top}>
				<div className={styles.logoContainer}>
					<Link to='/'>
						<img src={logo} className={styles.logo} />
					</Link>
				</div>
				<p className={styles.cite}>
					Every dream shoe, get it{' '}
					<Link to='/snkrs' className={styles.hereLink}>
						here
					</Link>
				</p>
			</div>
			<div className={styles.bottom}>
				<p className={styles.copyright}>
					© 2023 Henry Devs. All Rights Reserved
				</p>

				<ul className={styles.devsList}>
					{Object.keys(devs).map((dev, i) => (
						<li className={styles.devItem} key={dev + i}>
							<a href={devs[dev].github} target='_blank' rel='noreferrer'>
								<img
									src={devs[dev].img}
									alt={dev}
									className={styles.devImage}
								/>
							</a>
						</li>
					))}
				</ul>

				<ul className={styles.list}>
					<li className={styles.li}>
						<Link to='/' className={styles.liLink}>
							Home
						</Link>
					</li>
					<li className={styles.li}>
						<Link to='/snkrs' className={styles.liLink}>
							Sneakers
						</Link>
					</li>
					<li className={styles.li}>
						<Link to='/about' className={styles.liLink}>
							About
						</Link>
					</li>
				</ul>
			</div>
		</footer>
	)
}
