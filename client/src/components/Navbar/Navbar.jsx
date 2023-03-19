import { Link } from 'react-router-dom'
import logo from '../../assets/air_land-black.svg'
import styles from './Navbar.module.css'
import { AiOutlineUser, AiOutlineShoppingCart } from 'react-icons/ai'

export function Navbar() {
	return (
		<nav className={styles.nav}>
			<ul className={styles.list}>
				<li className={styles.li}>
					<Link to='/' className={styles.navLogo}>
						<img src={logo} alt='logo' className={styles.logo} />
					</Link>
				</li>
				<li className={styles.li}>
					<Link to='/snkrs' className={styles.navLink}>
						SNKRS
					</Link>
				</li>
				<li className={styles.li}>
					<div className={styles.rightestLiContainer}>
						<Link to='/login' className={styles.navLink}>
							<AiOutlineUser />
						</Link>

						<Link to='/store' className={styles.navLink}>
							<AiOutlineShoppingCart />
						</Link>
					</div>
				</li>
			</ul>
		</nav>
	)
}
