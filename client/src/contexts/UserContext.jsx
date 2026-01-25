import { createContext, useState } from "react";
import UseRequest from "../hooks/useRequest";

const UserContext = createContext({ 
    loginHandler() {}, 
    registerHandler() {}, 
    logoutHandler() {}, 
    isAuthtenticated: false,
    user:{
        email: '',
        password: '',
        _createdOn: 0,
        _id: '',
        accessToken: '',

    }
})

export function UserProvider (props) {
    	const [user, setUser] = useState(null);
	const {request} = UseRequest()

	
	const registerHandler = async (email, password) => {
		const newUser = {email, password}

		//TODO api Call
		const result = await request ('users/register', 'POST', newUser);

		console.log(result);

		//automatic login user
		
		setUser (result);
	}

	const loginHandler = async (email, password) => {
		const user = {email, password}
		const result = await request ('/users/login', 'POST', user);
		console.log(result);
		
		setUser(result)
	}

	const logoutHandler = async () => {
		
        return request('/users/logout', 'GET', null, { accessToken: user.accessToken })
        .finally(() => setUser(null));
	}

    

	const userContextValues = { 
		user, 
		loginHandler, 
		registerHandler, 
		logoutHandler, 
		isAuthtenticated: !! user?.accessToken }

    return(
        <UserContext.Provider value={userContextValues}>
            {props.children}
        </UserContext.Provider>
    );

}

export default UserContext;