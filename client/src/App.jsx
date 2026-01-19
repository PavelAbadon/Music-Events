import { Route, Routes } from "react-router";
import { useState } from "react";

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
import Login from "./components/login/Login";
import Register from "./components/register/Register";

export default function App() {
	const [registerdUsers, setRegisterdUsers] = useState([]);
	const [user, setUser] = useState(null);
	
	const registerHandler = (email, password) => {
		if(registerdUsers.some(user => user.email === email )){
			throw new Error('A user with this email already exists.');
		}

		setRegisterdUsers(state => [...state, { email, password }]);
		//automatic login user
	}

	const loginHandler = (email, password) => {
		if(!user){
			throw new Error('Invalid user');
		}

		if(email !== user.email || password !== user.password){
			throw new Error('Invalid email or password');
		}
		
		setUser({
			email, password
		})
	}
	

  return (
    <>
      <Header user={user}/>

      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login onLogin={loginHandler}/>} />
          <Route path="/register" element={<Register  onRegister={registerHandler} />} />
      </Routes>
      
      <Footer />
    </>
  );
}
