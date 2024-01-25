import React from 'react'
import {auth} from '../services/firebaseConfig'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {

  const navigate = useNavigate();

  const logoutAction = async() => {
    auth.signOut()
    navigate("/")
  }

  return (
    <div>Dashboard<br/>
    
        <button onClick={logoutAction} className='btn btn-outline-danger'>Logout</button>
        
    </div>

  )
}

export default Dashboard