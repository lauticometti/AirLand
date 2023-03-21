import { Link } from 'react-router-dom'
import logo from '../../assets/air_land-black.svg'
import styles from './Navbar.module.css'
import { AiOutlineUser, AiOutlineShoppingCart, AiOutlinePhone } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getCart } from '../../redux'

export function Navbar() {
	const { cart } = useSelector(state => state.cart)
	const { status, uid } = useSelector(state => state.auth)
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(getCart(uid))
	}, [status])

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
						<Link to='/contact' className={styles.navLink}>
						<AiOutlinePhone />
						</Link>
						<Link to='/login' className={styles.navLink}>
							<AiOutlineUser />
						</Link>

						<Link to='/store' className={styles.navLink}>
							<AiOutlineShoppingCart />
						</Link>

						{cart.length ? <p>{cart.length}</p> : ''}
					</div>
				</li>
			</ul>
		</nav>
	)
}
