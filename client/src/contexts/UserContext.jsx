import { createContext } from "react";

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

export default UserContext;