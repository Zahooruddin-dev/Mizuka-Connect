import './App.css';
import Login from './Pages/Login/Login';
import Signup from './Pages/SignUp/SignUp';
import AuthLayout from './Components/HandleUser/HandleUser';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import NotFound from './NotFound/NotFound';
import Home from './Pages/HomePage/HomePage';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<AuthLayout />}>
					<Route path='login' element={<Login />} />
					<Route path='signup' element={<Signup />} />
				</Route>
        <Route path='/home' element={<Home />} />

				{/* Catch all other routes */}
				<Route path='*' element={<NotFound />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
