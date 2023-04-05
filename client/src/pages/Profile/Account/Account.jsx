import { useState } from 'react'
import PersonalData from './PersonalData/PersonalData'
import AddressBook from './AddressBook/AddressBook'
import rightArrow from '../../../assets/icons/right-arrow.svg'
import styles from './Account.module.css'

export default function Account() {
	const [currentComponent, setCurrentComponent] = useState('personalData')

	const components = {
		personalData: <PersonalData />,
		addresses: <AddressBook />
	}

	const handleSummaryLinks = event => {
		const { id } = event.target

		if (id === currentComponent) return null
		setCurrentComponent(id)
	}

	return (
		<div className={styles.main}>
			<div className={styles.summary}>
				<h4 className={styles.summaryTitle}>Account overview</h4>
				<div className={styles.summaryLinksContainer}>
					<ul className={styles.summaryLinks}>
						<li
							onClick={handleSummaryLinks}
							id='personalData'
							className={
								currentComponent === 'personalData'
									? styles.summaryLinkActive
									: styles.summaryLink
							}
						>
							Personal data
							<img src={rightArrow} alt='' className={styles.rightArrow} />
						</li>
						<li
							onClick={handleSummaryLinks}
							id='addresses'
							className={
								currentComponent === 'addresses'
									? styles.summaryLinkActive
									: styles.summaryLink
							}
						>
							Addresses
							<img src={rightArrow} alt='' className={styles.rightArrow} />
						</li>
						{/* <li
							onClick={handleSummaryLinks}
							id='favorites'
							className={
								currentComponent === 'favorites'
									? styles.summaryLinkActive
									: styles.summaryLink
							}
						>
							Favorites
							<img src={rightArrow} alt='' className={styles.rightArrow} />
						</li> */}
						{/* <li className={styles.summaryLink}>Log out</li> */}
					</ul>
				</div>
			</div>

			<div className={styles.currentComponent}>
				{components[currentComponent]}
			</div>
		</div>
	)
}
