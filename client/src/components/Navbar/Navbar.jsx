import { Link } from 'react-router-dom'
import logo from '../../assets/air_land-black.svg'
import styles from './Navbar.module.css'
import {
	AiOutlineUser,
	AiOutlineShoppingCart,
	AiOutlinePhone,
	AiOutlineLogout
} from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { clearCart, getCart, startLogout } from '../../redux'

export function Navbar() {
	const onLogout = () => {
		dispatch(startLogout())
		dispatch(clearCart())
	}
	const { cart } = useSelector(state => state.cart)
	const { status, uid } = useSelector(state => state.auth)
	const dispatch = useDispatch()

	useEffect(() => {
		if (!uid) return
		dispatch(getCart(uid))
	}, [status])

	return (
		<nav className={styles.nav}>
			<ul className={styles.list}>
				<li>
					<Link to='/' className={styles.navLogo}>
						<img src={logo} alt='logo' className={styles.logo} />
					</Link>
				</li>

				<li className={styles.navCenteredElement}>
					<Link to='/snkrs' className={styles.navLink}>
						SNKRS
					</Link>
				</li>

				<li>
					<div className={styles.rightestLiContainer}>
						<Link to='/contact' className={styles.navLink}>
							<AiOutlinePhone />
						</Link>
						{
							uid
								? <Link to='/profile' className={styles.navLink}>
									<AiOutlineUser />
								</Link>
								: <Link to='/login' className={styles.navLink}>
									<AiOutlineUser />
								</Link>

						}
						<div className={styles.cartContainer}>
							<Link to='/store' className={styles.navLink}>
								<AiOutlineShoppingCart />
								{cart.length ? <span>{cart.length}</span> : ''}
							</Link>
						</div>
						<Link to='/' className={styles.navLink} onClick={onLogout}>
							<AiOutlineLogout />
						</Link>
					</div>
				</li>
			</ul>
		</nav>
	)
}
