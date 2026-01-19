import { Route, Routes } from "react-router";
import { useState } from "react";

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import Logout from "./components/logout/Logout";

export default function App() {
	const [registerdUsers, setRegisterdUsers] = useState([]);
	const [user, setUser] = useState(null);
	
	const registerHandler = (email, password) => {
		if(registerdUsers.some(user => user.email === email )){
			throw new Error('A user with this email already exists.');
		}

		const newUser = {email, password}

		setRegisterdUsers(state => [...state,  newUser]);
		//automatic login user
		
		setUser (newUser);
	}

	const loginHandler = (email, password) => {

		const foundUser = registerdUsers.find(user => user.email === email && user.password === password);
		if(!foundUser){
			throw new Error('Invalid user');
		}

		if(email !== foundUser.email || password !== foundUser.password){
			throw new Error('Invalid email or password');
		}
		
		setUser({
			email, password
		})
	}

	const logoutHandler = () => {
		setUser(null);
		
	}
	

  return (
    <>
      <Header user={user}/>

      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login onLogin={loginHandler}/>} />
          <Route path="/register" element={<Register  onRegister={registerHandler} />} />
          <Route path="/logout" element={<Logout  onLogout={logoutHandler} />} />
      </Routes>
      
      <Footer />
    </>
  );
}
