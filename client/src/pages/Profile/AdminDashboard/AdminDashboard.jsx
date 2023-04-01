import { useState } from 'react'
import Home from './Home/Home'
import Orders from './Orders/Orders'
import AllSneakers from './AllSneakers/AllSneakers'
import CreateSneaker from './CreateSneaker/CreateSneaker'
import rightArrow from '../../../assets/icons/right-arrow.svg'
import styles from './AdminDashboard.module.css'

export default function AdminDashboard() {
	const [currentComponent, setCurrentComponent] = useState('home')

	const components = {
		home: { title: 'Home', component: <Home /> },
		orders: { title: 'Orders', component: <Orders /> },
		allSneakers: { title: 'All Sneakers', component: <AllSneakers /> },
		createSneaker: { title: 'Create Sneaker', component: <CreateSneaker /> }
	}

	const handleSummaryLinks = event => {
		const { id } = event.target

		if (id === currentComponent) return null
		setCurrentComponent(id)
	}

	return (
		<div className={styles.main}>
			<div className={styles.summary}>
				<h4 className={styles.summaryTitle}>Admin dashboard</h4>
				<div className={styles.summaryLinksContainer}>
					<ul className={styles.summaryLinks}>
						{Object.keys(components).map(componentName => {
							return (
								<li
									onClick={handleSummaryLinks}
									id={componentName}
									key={componentName}
									className={
										currentComponent === componentName
											? styles.summaryLinkActive
											: styles.summaryLink
									}
								>
									{components[componentName].title}
									<img src={rightArrow} alt='' className={styles.rightArrow} />
								</li>
							)
						})}
					</ul>
				</div>
			</div>

			<div className={styles.currentComponent}>
				{components[currentComponent].component}
			</div>
		</div>
	)
}
