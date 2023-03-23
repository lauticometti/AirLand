import { TbCurrencyDollar, TbShoe } from 'react-icons/tb'
import { MdOutlineTextsms } from 'react-icons/md'
import styles from './Services.module.css'

export function Services() {
	const handleScroll = () => {
		window.scrollTo({
			top: document.body.scrollHeight,
			behavior: 'smooth'
		})
	}
	return (
		<div className={styles.servicesContainer}>
			<div className={styles.serviceElement}>
				<span className={styles.serviceIcon}>
					<MdOutlineTextsms />
				</span>
				<h4>Contact</h4>
				<p>
					To get in touch, feel free to send us a message on Whatsapp at +54 11
					23456789.
				</p>
			</div>
			<div className={styles.serviceElement}>
				<span className={styles.serviceIcon}>
					<TbShoe />
				</span>
				<h4>Orders</h4>
				<p>
					We currently only offer in-store pick up for shoe orders. Check out
					our map location{' '}
					<span className={styles.serviceClickableText} onClick={handleScroll}>
						below
					</span>
					.
				</p>
			</div>
			<div className={styles.serviceElement}>
				<span className={styles.serviceIcon}>
					<TbCurrencyDollar />
				</span>
				<h4>Payment methods</h4>
				<p>
					You can pay through MercadoPago or receive a 10% discount when paying
					with cash.
				</p>
			</div>
		</div>
	)
}
