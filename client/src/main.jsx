import { createRoot } from 'react-dom/client';
import { BrowserRouter } from "react-router";

import App from './App';

import './styles/styles.css';
import { UserProvider } from './contexts/UserContext';
import { EventProvider } from "./contexts/EventContext";


createRoot(document.getElementById('root')).render(
    
    <BrowserRouter>
        <UserProvider>
            <EventProvider>
                <App />
            </EventProvider>
        </UserProvider>
    </BrowserRouter>
   
  
)
