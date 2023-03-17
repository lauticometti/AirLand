import { Route, Routes } from 'react-router-dom'
import { Authentication, Detail, Home, Sneakers } from './pages'
import './styles/App.css'

function App() {
	return (
		<div className='App'>
			<Routes>
				<Route exact path='/' element={<Home />} />
				<Route exact path='/snkrs' element={<Sneakers />} />
				<Route exact path='/detail/:id' element={<Detail />} />
				<Route exact path='/auth' element={<Authentication />} />
			</Routes>
		</div>
	)
}

export default App
