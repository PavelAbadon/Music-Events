import { createRoot } from 'react-dom/client';
import { BrowserRouter } from "react-router";

import App from './App';

import './styles/styles.css';
import { UserProvider } from './contexts/UserContext';

createRoot(document.getElementById('root')).render(
    
    <BrowserRouter>
        <UserProvider>
            <App />
        </UserProvider>
    </BrowserRouter>
   
  
)
