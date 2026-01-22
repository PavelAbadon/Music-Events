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
	
	const registerHandler = async (email, password) => {
		const newUser = {email, password}

		//TODO api Call
		const response = await fetch ('http://localhost:3030/users/register', {
			method:'POST',
			headers: { 
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(newUser),
		}, newUser);
		
		const result = await response.json();
		console.log(result);

		setRegisterdUsers(state => [...state,  newUser]);
		//automatic login user
		
		setUser (result);
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
