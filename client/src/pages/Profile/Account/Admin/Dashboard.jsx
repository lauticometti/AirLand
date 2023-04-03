import React from 'react'
// import { useGetAllShoesQuery } from '../../../../redux/services/services';
import { useGetShoesQuery } from '../../../../redux/services/filteredShoes'
import { AdminCard, FilterButton, Order } from '../../../../components'
import { useSelector } from 'react-redux'
import styles from './Dashboard.module.css'

const Dashboard = () => {
	let slicedData = []
	const filterState = useSelector(state => state.filter)
	const { data } = useGetShoesQuery(filterState)
	if (data) {
		slicedData = data
	}
	return (
		<div class={styles.contenedor}>
			<div>
				{slicedData.map(shoe => (
					<AdminCard key={shoe.id} shoe={shoe} />
				))}
			</div>
			<div>
				<FilterButton />
			</div>
		</div>
	)
}

export default Dashboard
