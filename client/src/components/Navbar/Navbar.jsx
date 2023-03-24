import { Link, useLocation } from 'react-router-dom'
import logo from '../../assets/air_land-white.svg'
import styles from './Navbar.module.css'
import {
	AiOutlineUser,
	AiOutlineShoppingCart,
	AiOutlineLogout
} from 'react-icons/ai'
import { SearchBar } from '../'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getCart, startLogout } from '../../redux'

export function Navbar() {
	const dispatch = useDispatch()
	const { cart } = useSelector(state => state.cart)
	const { status, uid } = useSelector(state => state.auth)
	const { pathname } = useLocation()
	useEffect(() => {
		if (!uid) return
		dispatch(getCart(uid))
	}, [status])

	const handleLogout = () => {
		dispatch(startLogout())
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
							SNKRS
						</Link>
					)}
				</li>

				<li>
					<div className={styles.rightestLiContainer}>
						{uid ? (
							<Link to='/profile' className={styles.navLink}>
								<AiOutlineUser />
							</Link>
						) : (
							<Link to='/login' className={styles.navLink}>
								<AiOutlineUser />
							</Link>
						)}
						<div className={styles.cartContainer}>
							<Link to='/store' className={styles.navLink}>
								<AiOutlineShoppingCart />
								{cart.length ? <span>{cart.length}</span> : ''}
							</Link>
						</div>
						<span className={styles.navLink} onClick={handleLogout}>
							<AiOutlineLogout />
						</span>
					</div>
				</li>
			</ul>
		</nav>
	)
}
