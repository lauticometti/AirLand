import { Link, useLocation } from 'react-router-dom'
import logo from '../../assets/icons/air_land-white.svg'
import styles from './Navbar.module.css'
import { SearchBar } from '../'
import SubNavbarRight from './SubNavbarRight/SubNavbarRight'
import { useState, useEffect } from 'react'

export function Navbar() {
	const { pathname } = useLocation()

	const [windowWidth, setWindowWidth] = useState(window.innerWidth)

	useEffect(() => {
		const handleWindowResize = () => {
			setWindowWidth(window.innerWidth)
		}

		window.addEventListener('resize', handleWindowResize)

		return () => {
			window.removeEventListener('resize', handleWindowResize)
		}
	})

	if (windowWidth < 600) {
		return (
			<div className={styles.container}>
				<nav className={styles.nav}>
					<ul className={styles.list}>
						<li>
							<Link to='/' className={styles.navLogo}>
								<img src={logo} alt='logo' className={styles.logo} />
							</Link>
						</li>
						{pathname === '/snkrs' ? null : (
							<li>
								<Link to='/snkrs' className={styles.navLink}>
									Sneakers
								</Link>
							</li>
						)}
						<li>
							<SubNavbarRight />
						</li>
					</ul>
				</nav>

				{pathname === '/snkrs' ? (
					<div className={styles.searchbarContainer}>
						<SearchBar />
					</div>
				) : null}
			</div>
		)
	}

	return (
		<nav className={styles.nav}>
			<ul className={styles.list}>
				<li>
					<Link to='/' className={styles.navLogo}>
						<img src={logo} alt='logo' className={styles.logo} />
					</Link>
				</li>

				<li className={styles.navCenteredElement}>
					{pathname === '/snkrs' ? (
						<SearchBar />
					) : (
						<Link to='/snkrs' className={styles.navLink}>
							Sneakers
						</Link>
					)}
				</li>
				<li>
					<SubNavbarRight />
				</li>
			</ul>
		</nav>
	)
}
