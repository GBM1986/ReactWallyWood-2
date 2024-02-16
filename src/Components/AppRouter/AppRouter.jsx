import { Routes, Route } from "react-router-dom";
import { Home } from "../../Pages/Home/Home";
import { Kontakt } from "../../Pages/Kontakt/Kontakt"
import { Login } from "../../Pages/Login/Login.jsx";
import { Omos } from "../../Pages/Omos/Omos.jsx";
import { Posters } from "../../Pages/Posters/Posters.jsx"
import { PosterDetails } from "../../Components/Posters/PosterDetails";
import { PosterList } from "../../Components/Posters/PosterList";


export const AppRouter = () => {
	return (
		<Routes>
			<Route index element={<Home />} />
			<Route path="/posters" element={<Posters />} >
              <Route path=":genreSlug" element={<PosterList />} />
              <Route path=":genreSlug/:posterSlug" element={<PosterDetails />} />
            </Route>
			<Route path="/omos" element={<Omos />} />
			<Route  path="/kontakt" element={<Kontakt />} />
			<Route path="/login" element={<Login />} />
		</Routes>
	);
}