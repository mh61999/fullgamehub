import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import { auth } from './services/firebaseConfig'
import { onAuthStateChanged } from 'firebase/auth'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Layout from './components/Layout'
import About from './pages/About'

const App = () => {

  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user)
      } else {
        setUser(null)
      }
    })
  }, [])

  return (
    <Router>
     <Routes >
      <Route path='/' element={user? <Layout/> : <Login/>}>
        <Route index element={<Dashboard/>} />
        <Route path='/about' element={<About/>}/>
      </Route>
     </Routes>
    </Router>
  )
}

export default App