import { Route, Routes } from "react-router";

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import Logout from "./components/logout/Logout";
import Details from "./components/details/Details";
import UserContext from "./contexts/UserContext";
import { useContext } from "react";
import CreateEvent from "./components/createEvent/CreateEvent";
import EditEvent from "./components/editEvent/editEvent";
import DeleteEvent from "./components/deleteEvent/DeleteEvent";

export default function App() {
	const {user} = useContext(UserContext)
	

	return (
		<>
			<Header />

			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/concerts/:concertId/details" element={<Details user={user} />} />
				<Route path="/concerts/:concertId/edit" element={<EditEvent user={user} />} />
				<Route path="/concerts/:concertId/delete" element={<DeleteEvent user={user} />} />
				<Route path="/concerts/create" element={<CreateEvent />} />
				<Route path="/login" element={<Login />} />
				<Route path="/register" element={<Register />} />
				<Route path="/logout" element={<Logout />} />
			</Routes>
			
			<Footer />
		</>
	);
}
