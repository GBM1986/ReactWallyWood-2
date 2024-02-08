import { Routes, Route, NavLink } from 'react-router-dom';
import { Home } from '../../Pages/Home/Home';

export const AppRouter = () => {
	return (
		<Routes>
			<Route index element={<Home />} />
		</Routes>
	);
}