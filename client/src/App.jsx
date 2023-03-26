import { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import {
	Login,
	Register,
	Detail,
	Home,
	Sneakers,
	About,
	Contact,
	Cart,
	Profile,
	Page404
} from './pages'
import './styles/App.css'

function App() {

	const { pathname } = useLocation()
	useEffect(() => {
		if (pathname === '/login' || pathname === '/signup') return
		localStorage.setItem('lastPage', pathname)
	}, [pathname])
  
	return (
		<div className='App'>
			<Routes>
				<Route exact path='/' element={<Home />} />
				<Route exact path='/snkrs' element={<Sneakers />} />
				<Route exact path='/detail/:shoeId' element={<Detail />} />
				<Route exact path='/login' element={<Login />} />
				<Route exact path='/signup' element={<Register />} />
				<Route exact path='/about' element={<About />} />
				<Route exact path='/store' element={<Cart />} />
				<Route exact path='/contact' element={<Contact />} />
				<Route exact path='/profile' element={<Profile />} />
				<Route path='*' element={<Page404 />} />
			</Routes>
		</div>
	)
}

export default App
