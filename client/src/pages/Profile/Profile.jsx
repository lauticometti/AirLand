import { useState } from 'react'
import { useSelector } from 'react-redux'

import { Footer, Navbar } from '../../components'
import Account from './Account/Account'
import Orders from './Orders/Orders'

import AdminDashboard from './AdminDashboard/AdminDashboard'

import logo from '../../assets/icons/air_land-black.svg'
import styles from './Profile.module.css'

export function Profile() {
	const { displayName, firstName, email } = useSelector(state => state.auth)

	const [currentComponent, setCurrentComponent] = useState('account')

	const components = {
		account: <Account />,
		orders: <Orders />,
		adminDashboard: <AdminDashboard />
	}

	const handleTabList = event => {
		const { id } = event.target

		if (id === currentComponent) return null
		setCurrentComponent(id)
	}

	return (
		<div>
			<Navbar />

			<div className={styles.header}>
				<div className={styles.topHeader}>
					<h2>Hi, {firstName || displayName}</h2>
					<img src={logo} alt='' className={styles.topHeaderLogo} />
				</div>
				<div className={styles.bottomHeader}>
					<ul className={styles.tabList}>
						<li
							onClick={handleTabList}
							id='account'
							className={
								currentComponent === 'account'
									? styles.listItemActive
									: styles.listItem
							}
						>
							Account
						</li>
						<li
							onClick={handleTabList}
							id='orders'
							className={
								currentComponent === 'orders'
									? styles.listItemActive
									: styles.listItem
							}
						>
							Purchases
						</li>
						{
							email === 'airland.henry@gmail.com'
								? <li
									onClick={handleTabList}
									id='adminDashboard'
									className={
										currentComponent === 'adminDashboard'
											? styles.listItemActive
											: styles.listItem
									}
								>
									Dashboard
								</li>
								: ''
						}
					</ul>
				</div>
			</div>
			{components[currentComponent]}
			<Footer />
		</div>
	)
}
