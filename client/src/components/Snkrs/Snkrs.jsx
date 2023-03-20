import styles from './Snkrs.module.css'
import {Link} from 'react-router-dom'

export function Snkrs() {
	return (
		<div className={styles.section}>
			<img
				className={styles.img}
				src='https://tododetenis.com/wp-content/uploads/2022/11/13fda717-33be-43af-bccf-74c351665aa4-600x750.webp'
				alt="'07"
				to='/snkrs'
                
			/>
            
			<img
				className={styles.img}
				src='https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/08a5c18e-e220-4261-9577-6ac518db10e2/custom-nike-air-force-1-high-unlocked-by-you.png'
				alt="'07"
			/>

			<img
				className={styles.img}
				src='https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/ee711f04-eac6-4043-9d5d-39934515c09b/custom-nike-air-force-1-high-by-you-shoes.png'
				alt="'07"
			/>
			<img
				className={styles.img}
				src='https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/0e668a79-27eb-42c9-91a9-5babe9870d63/air-force-1-mid-07-lv8-zapatillas-pzhhVG.png'
				alt="'07"
			/>
			<img
				className={styles.img}
				src='https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/dce93a1d-ebcb-4300-b8cf-f71da0820ea1/air-force-1-07-zapatillas-Pbt0tj.png'
				alt="'07"
			/>
		</div>
        
	)
}
