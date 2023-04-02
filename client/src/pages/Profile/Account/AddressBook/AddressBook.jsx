import styles from './AddressBook.module.css'
import addSign from '../../../../assets/icons/add_sign.svg'
import { useState } from 'react'
import { UserModal } from '../../../../components'
import AddAddress from './AddAddress/AddAddress'
import DeleteAddress from './DeleteAddress/DeleteAddress'
import EditAddress from './EditAddress/EditAddress'

export default function AddressBook() {
	const [showAddAddress, setShowAddAddress] = useState(false)
	const [showEditAddress, setShowEditAddress] = useState(false)
	const [showDeleteAddress, setShowDeleteAddress] = useState(false)

	const addresses = [
		{
			firstName: 'Lautaro',
			lastName: 'Cometti',
			streetAddress: 'Roque Saenz Peña',
			number: '3876',
			city: 'Chajari',
			province: 'Entre Rios',
			zipCode: '3228',
			phoneNumber: '1134158607',
			default: true
		},
		{
			firstName: 'Lautaro',
			lastName: 'Cometti',
			streetAddress: 'Roque Saenz Peña',
			number: '3876',
			city: 'Chajari',
			province: 'Entre Rios',
			zipCode: '3228',
			phoneNumber: '1134158607',
			default: false
		},
		{
			firstName: 'Lautaro',
			lastName: 'Cometti',
			streetAddress: 'Roque Saenz Peña',
			number: '3876',
			city: 'Chajari',
			province: 'Entre Rios',
			zipCode: '3228',
			phoneNumber: '1134158607',
			default: false
		},
		{
			firstName: 'Lautaro',
			lastName: 'Cometti',
			streetAddress: 'Roque Saenz Peña',
			number: '3876',
			city: 'Chajari',
			province: 'Entre Rios',
			zipCode: '3228',
			phoneNumber: '1134158607',
			default: false
		}
	]

	const slots = 5 - addresses.length

	return (
		<div className={styles.addressBookContainer}>
			<h3 className={styles.addressBookTitle}>Address Book</h3>
			<p className={styles.addressBookParagraph}>
				You have <span>{slots}/5 address slots</span> availables
			</p>

			<div className={styles.addresses}>
				{slots ? (
					<div
						className={styles.addressCard}
						onClick={() => setShowAddAddress(true)}
					>
						<div className={styles.addressCardTitle}>New Address</div>
						<div className={styles.addressCardSpace}></div>
						<div className={styles.addressCardAddContainer}>
							<img src={addSign} alt='' className={styles.addressCardAdd} />
						</div>
					</div>
				) : null}

				<UserModal
					onClose={() => setShowAddAddress(false)}
					show={showAddAddress}
					buttonText='Save'
				>
					<AddAddress onClose={() => setShowAddAddress(false)} />
				</UserModal>

				{addresses.map((address, i) => (
					<div
						key={i}
						className={
							address.default ? styles.addressCardDefault : styles.addressCard
						}
					>
						<strong className={styles.addressCardTitle}>
							{address.firstName + ' ' + address.lastName}
						</strong>
						<div className={styles.addressCardContent}>
							<div>{address.streetAddress + ', ' + address.number}</div>
							<div>
								{address.city +
									', ' +
									address.province +
									', ' +
									address.zipCode +
									', AR'}
							</div>
							<div>{address.phoneNumber}</div>
						</div>

						<div className={styles.addressCardBottom}>
							<div>
								<button
									className={styles.addressCardModifyButton}
									onClick={() => setShowEditAddress(true)}
								>
									Edit address
								</button>
								<UserModal
									onClose={() => setShowEditAddress(false)}
									show={showEditAddress}
								>
									<EditAddress onClose={() => setShowEditAddress(false)} />
								</UserModal>

								<button
									className={styles.addressCardDeleteButton}
									onClick={() => setShowDeleteAddress(true)}
								>
									Delete address
								</button>
								<UserModal
									onClose={() => setShowDeleteAddress(false)}
									show={showDeleteAddress}
								>
									<DeleteAddress onClose={() => setShowDeleteAddress(false)} />
								</UserModal>
							</div>
							<div>
								<button className={styles.addressCardDefaultButton}>
									{address.default ? 'Default' : 'Set as default'}
								</button>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}
