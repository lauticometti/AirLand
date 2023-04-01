// import { useGetAllShoesQuery } from '../../../../redux/services/services';
import { useGetShoesQuery } from '../../../redux/services/filteredShoes'
import { AdminCard } from '../../../components'
import { useSelector } from 'react-redux'

export default function Dashboard() {
	let slicedData = []
	const filterState = useSelector(state => state.filter)
	const { data } = useGetShoesQuery(filterState)
	if (data) {
		// const filteredData = data.filter((shoe) => shoe.STATUS === true)
		// if ((page - 1) * pageSize > data.length) dispatch(setPage(1))
		// dispatch(setTotalEntries(data.length))
		slicedData = data
	}
	return (
		<div>
			{slicedData.map(shoe => (
				<AdminCard key={shoe.id} shoe={shoe} />
			))}
		</div>
	)
}
