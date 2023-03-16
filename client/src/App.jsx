import { Route, Routes } from 'react-router-dom'
import { Detail, Home, Sneakers } from './pages'
import './styles/App.css'

function App() {
	return (
		<div className='App'>
			<Routes>
				<Route exact path='/' element={<Home />} />
				<Route exact path='/sneakers' element={<Sneakers />} />
				<Route exact path='/detail/:id' element={<Detail />} />
			</Routes>
		</div>
	)
}

export default App
