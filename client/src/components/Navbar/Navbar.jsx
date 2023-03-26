import { Link, useLocation } from 'react-router-dom'
import logo from '../../assets/icons/air_land-white.svg'
import styles from './Navbar.module.css'

import { SearchBar } from '../'

import SubNavbarRight from './SubNavbarRight/SubNavbarRight'

export function Navbar() {
	const { pathname } = useLocation()

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
