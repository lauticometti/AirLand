import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import {
	AiOutlineUser,
	AiOutlineShoppingCart,
	AiOutlineLogout
} from 'react-icons/ai'

import { getCart, startLogout } from '../../../redux'
import styles from './SubNavbarRight.module.css'
import { Link } from 'react-router-dom'

export default function SubNavbarRight() {
	const dispatch = useDispatch()
	const { cart } = useSelector(state => state.cart)
	const { status, uid, displayName } = useSelector(state => state.auth)

	useEffect(() => {
		if (!uid) return
		dispatch(getCart(uid))
	}, [status])

	const handleLogout = () => {
		dispatch(startLogout())
	}

	return (
		<div className={styles.container}>
			{uid ? (
				<Link to='/profile' className={styles.signContainer}>
					<p className={styles.userGreet}>Hi, {displayName}</p>
					<AiOutlineUser className={styles.userPhoto} />
				</Link>
			) : (
				<div className={styles.notSignContainer}>
					<Link to='/signup' className={styles.createAccountLink}>
						Create an account
					</Link>
					<Link to='/login' className={styles.signInLink}>
						Sign In
					</Link>
				</div>
			)}
			<div className={styles.cartContainer}>
				<Link to='/store' className={styles.cartLink}>
					<AiOutlineShoppingCart />
					{cart.length ? (
						<span className={styles.cartSpan}>{cart.length}</span>
					) : (
						''
					)}
				</Link>
			</div>
			{uid ? (
				<span className={styles.logout} onClick={handleLogout}>
					<AiOutlineLogout />
				</span>
			) : null}
		</div>
	)
}
