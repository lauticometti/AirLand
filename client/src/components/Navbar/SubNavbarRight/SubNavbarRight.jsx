import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import {
	AiOutlineUser,
	AiOutlineShoppingCart,
	AiOutlineLogout
} from 'react-icons/ai'

import { getCart, startLogout } from '../../../redux'
import styles from './SubNavbarRight.module.css'
import { Link, useNavigate } from 'react-router-dom'

export default function SubNavbarRight() {
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const { cartItems } = useSelector(state => state.shopping)
	const { status, uid, displayName, firstName } = useSelector(
		state => state.auth
	)

	useEffect(() => {
		if (!uid) return
		dispatch(getCart(uid))
	}, [status])

	const handleLogout = () => {
		dispatch(startLogout())
		navigate('/')
	}

	return (
		<div className={styles.container}>
			{uid ? (
				<Link to='/profile' className={styles.signContainer}>
					<p className={styles.userGreet}>Hi, {firstName || displayName}</p>
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
				{uid ? (
					<Link to='/store' className={styles.cartLink}>
						<AiOutlineShoppingCart />
						{cartItems.length ? (
							<span className={styles.cartSpan}>{cartItems.length}</span>
						) : (
							''
						)}
					</Link>
				) : null}
			</div>
			{uid ? (
				<span className={styles.logout} onClick={handleLogout}>
					<AiOutlineLogout />
				</span>
			) : null}
		</div>
	)
}
