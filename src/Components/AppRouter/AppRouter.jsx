import { Routes, Route, NavLink } from 'react-router-dom';
import { Home } from '../../Pages/Home/Home';
import { Kontakt } from '../../Pages/Kontakt/Kontakt'
import { Login } from '../../Pages/Login/Login.jsx';
import { Omos } from '../../pages/Omos/Omos.jsx';

export const AppRouter = () => {
	return (
		<Routes>
			<Route index element={<Home />} />
			<Route path="/omos" element={<Omos />} />
			<Route  path="/kontakt" element={<Kontakt />} />
			<Route path="/login" element={<Login />} />
		</Routes>
	);
}