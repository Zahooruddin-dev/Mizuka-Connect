import './App.css';
import Login from './Pages/Login/Login';
import Signup from './Pages/SignUp/SignUp';
import AuthLayout from './Components/HandleUser/HandleUser';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import NotFound from './NotFound/NotFound';
import Home from './Pages/HomePage/HomePage';
import AuthRequired from './Components/AuthRequired';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				{/* Public routes */}
				<Route path='/' element={<AuthLayout />}>
					<Route path='login' element={<Login />} />
					<Route path='signup' element={<Signup />} />
				</Route>

				{/* Protected route for Home */}
				<Route path='/home' element={<AuthRequired />}>
					<Route index element={<Home />} /> {/* Home component is protected */}
				</Route>

				{/* Catch all other routes */}
				<Route path='*' element={<NotFound />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
