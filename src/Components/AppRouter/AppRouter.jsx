import { Routes, Route, NavLink } from 'react-router-dom';
import { Home } from '../../Pages/Home/Home';
import { Kontakt } from '../../Pages/Kontakt/Kontakt'

export const AppRouter = () => {
	return (
		<Routes>
			<Route index element={<Home />} />
			<Route  path="/kontakt" element={<Kontakt />} />
		</Routes>
	);
}