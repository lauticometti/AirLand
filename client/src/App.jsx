import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Routes, Route, useLocation } from 'react-router-dom'
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
	Page404,
	Checkout,
	PaymentSuccess
} from './pages'
import { EditSneaker } from './pages/Profile/AdminDashboard/'
import './styles/App.css'

function App() {
	const { status, email } = useSelector(state => state.auth)
	const { pathname } = useLocation()

	useEffect(() => {
		if (pathname === '/login' || pathname === '/signup') return
		localStorage.setItem('lastPath', pathname)
	}, [pathname])

	const adminEmail = 'administrador@email.com'

	return (
		<>
			<Routes>
				{status === 'authenticated' ? (
					<>
						<Route exact path='/' element={<Home />} />
						<Route exact path='/snkrs' element={<Sneakers />} />
						<Route exact path='/detail/:shoeId' element={<Detail />} />
						<Route
							exact
							path='/detail/admin/:shoeId'
							element={<EditSneaker />}
						/>
						<Route exact path='/about' element={<About />} />
						<Route exact path='/store' element={<Cart />} />
						<Route exact path='/contact' element={<Contact />} />
						<Route exact path='/profile' element={<Profile />} />

						<Route exact path='/checkout' element={<Checkout />} />
						<Route
							exact
							path='/login'
							element={<Navigate to={localStorage.getItem('lastPath')} />}
						/>
						<Route
							exact
							path='/signup'
							element={<Navigate to={localStorage.getItem('lastPath')} />}
						/>
						<Route path='/payment-success' element={<PaymentSuccess />} />
						<Route path='*' element={<Page404 />} />
						{/* {email === 'adminEmail' ? (
							<Route path='/admin' element={<Admin />} />
						) : null} */}
					</>
				) : (
					<>
						<Route exact path='/' element={<Home />} />
						<Route exact path='/snkrs' element={<Sneakers />} />
						<Route exact path='/detail/:shoeId' element={<Detail />} />
						<Route exact path='/login' element={<Login />} />
						<Route exact path='/signup' element={<Register />} />
						<Route exact path='/about' element={<About />} />
						<Route
							exact
							path='/profile'
							element={<Navigate to={localStorage.getItem('lastPath')} />}
						/>
						<Route
							exact
							path='/store'
							element={<Navigate to={localStorage.getItem('lastPath')} />}
						/>
						<Route
							exact
							path='/checkout'
							element={<Navigate to={localStorage.getItem('lastPath')} />}
						/>
						<Route exact path='/contact' element={<Contact />} />
						<Route path='*' element={<Page404 />} />
					</>
				)}
			</Routes>
		</>
	)
}

export default App
