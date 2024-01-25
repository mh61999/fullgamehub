import React from 'react'
import {auth} from '../services/firebaseConfig'
const Navbar = () => {
    
    const logoutAction = async () => {
        auth.signOut()
    }
    return (
        <nav className="navbar navbar-light bg-light ">
            <span className="navbar-brand mb-0 h1">Navbar</span>
            <button onClick={logoutAction} className='btn btn-outline-danger'>Logout</button>
        </nav>
    )
}

export default Navbar