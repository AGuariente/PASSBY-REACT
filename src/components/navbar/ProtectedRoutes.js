import React from "react"; 
import Routering from './NavbarComp';

const ProtectedRoutes=({children})=>{
    const authenticated = localStorage.getItem('authenticated');
    return authenticated == 'true' ? children: <Login />;
}
export default ProtectedRoutes;