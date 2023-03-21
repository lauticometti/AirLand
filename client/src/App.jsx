import { Route, Routes } from 'react-router-dom'
import { Login, Register, Detail, Home, Sneakers, About, Contact } from './pages'
import './styles/App.css'

function App() {
	return (
		<div className='App'>
			<Routes>
				<Route exact path='/' element={<Home />} />
				<Route exact path='/snkrs' element={<Sneakers />} />
				<Route exact path='/detail/:shoeId' element={<Detail />} />
				<Route exact path='/login' element={<Login />} />
				<Route exact path='/signup' element={<Register />} />
				<Route exact path='/about' element={<About />} />
				<Route exact path='/contact' element={<Contact/>}/>
			</Routes>
		</div>
	)
}

export default App
