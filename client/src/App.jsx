import { Route, Routes } from "react-router";
import { useState } from "react";

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import Logout from "./components/logout/Logout";
import UserContext from "./contexts/UserContext";
import UseRequest from "./hooks/useFetch";



export default function App() {
	const [user, setUser] = useState(null);
	const {requsest} = UseRequest()

	
	const registerHandler = async (email, password) => {
		const newUser = {email, password}

		//TODO api Call
		const result = await requsest ('users/register', 'POST', newUser);

		console.log(result);

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

	const userContextValues = { 
		user, 
		loginHandler, 
		registerHandler, 
		logoutHandler, 
		isAuthtenticated: !! user?.accessToken }
	

  return (
    <UserContext.Provider value={userContextValues}>
      <Header user={user}/>

      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login onLogin={loginHandler}/>} />
          <Route path="/register" element={<Register />} />
          <Route path="/logout" element={<Logout  onLogout={logoutHandler} />} />
      </Routes>
      
      <Footer />
    </UserContext.Provider>
  );
}
