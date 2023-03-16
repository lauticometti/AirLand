import { Link } from 'react-router-dom'
import logo from '../../../public/nike_icon.svg'
import styles from './Navbar.module.css'
import { AiOutlineUser, AiOutlineShoppingCart} from 'react-icons/ai'

export function Navbar() {
	return (
		<nav className={styles.nav}>
			<ul className={styles.container}>
				<li className={styles.listItemIcon}>
					<Link to='/'>
						<img src={logo} alt='logo' className={styles.logo} />
					</Link>
				</li>
				<li className={styles.li}>
					<Link to='/snkrs' className={styles.namelink}>
						SNKRS
					</Link>
				</li>
				<li className={styles.li}>
					<div className={styles.divlogin}>
						<Link to='/login' className={styles.namelink}>
							<AiOutlineUser />
						</Link>
						
						<Link to='/login' className={styles.namelink}>
							<AiOutlineShoppingCart />
						</Link>
						
					</div>
				</li>
			</ul>
		</nav>
	)
}
