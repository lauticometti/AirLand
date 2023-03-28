import { useState } from 'react'
import { useSelector } from 'react-redux'

import { Footer, Navbar } from '../../components'
import Account from './Account/Account'
import Purchases from './Purchases/Purchases'
import styles from './Profile.module.css'
import logo from '../../assets/icons/air_land-black.svg'

export function Profile() {
	const { displayName } = useSelector(state => state.auth)

	const [currentComponent, setCurrentComponent] = useState('account')

	const components = {
		account: <Account />,
		purchases: <Purchases />
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
					<h2>Hi, {displayName}</h2>
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
							id='purchases'
							className={
								currentComponent === 'purchases'
									? styles.listItemActive
									: styles.listItem
							}
						>
							Purchases
						</li>
					</ul>
				</div>
			</div>
			{components[currentComponent]}
			<Footer />
		</div>
	)
}
