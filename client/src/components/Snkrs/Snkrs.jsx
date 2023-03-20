import styles from './Snkrs.module.css'
import { Link } from 'react-router-dom'

export function Snkrs() {
	return (
		<div className={styles.section}>
			<Link to='/detail/gaIBES7VEgHNcCsgiHJu'  className={styles.link}>
				<img
					className={styles.img}
					src='https://tododetenis.com/wp-content/uploads/2022/11/13fda717-33be-43af-bccf-74c351665aa4-600x750.webp'
					alt="'airforce1"
				/>
			</Link>
			<Link to='/detail/EeT7b7bK6qhBx8YppB2F' className={styles.link}>
				<img
					className={styles.img}
					src='https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/08a5c18e-e220-4261-9577-6ac518db10e2/custom-nike-air-force-1-high-unlocked-by-you.png'
					alt="'airforce1"
				/>
			</Link>
			<Link to='/detail/xhz9pkXasQDGusDn4eDd ' className={styles.link}>
				<img
					className={styles.img}
					src='https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/ee711f04-eac6-4043-9d5d-39934515c09b/custom-nike-air-force-1-high-by-you-shoes.png'
					alt="'airforce1"
				/>
			</Link>
			<Link to='/detail/4fMxAHNv7sijFB5yD0B7' className={styles.link}>
				<img
					className={styles.img}
					src='https://static.nike.com/a/images/f_auto,cs_srgb/w_1536,c_limit/2444e0b8-40a3-4fb2-9485-439e118e0703/air-force-1-07-uno.png'
					alt="'airforce1"
				/>
			</Link>
			<Link to='white /detail/ZvzcfO4LfcrHWYcFcY6I' className={styles.link}>
				<img
					className={styles.img}
					src='https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/dce93a1d-ebcb-4300-b8cf-f71da0820ea1/air-force-1-07-zapatillas-Pbt0tj.png'
					alt="'airforce1"
				/>
			</Link>
		</div>
	)
}
