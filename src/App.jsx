import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './utils/localStorage'
import { AuthContext } from './context/AuthProvider'


const App = () => {

  const [user, setUser] = useState(null)
  const [loggedInUserData, setloggedInUserData] = useState(null)
  const authData = useContext(AuthContext)
  

  useEffect(() => {

    if(authData) {
      const loggedInUser = localStorage.getItem("loggedInUser")
      if(loggedInUser){
        setUser(loggedInUser.role)
      }
    }
  }, [authData]);
  

  const handleLogin = (email, password) => {
    if(authData?.admin?.find(e => email === e.email && password === e.password)){
      setUser({role:'admin'})
      localStorage.setItem("loggedInUser", JSON.stringify("admin"))
      
    } else if(authData) {
      const emp = authData?.employee?.find(e => email === e.email && password === e.password)
      if(emp){
        setUser({role:'employee'})
      }
      localStorage.setItem("loggedInUser", JSON.stringify("employee"))
    }
    else{
      alert("Invalid Credentials")
    }
  }

  
  return (
    <>
    {!user && <Login handleLogin={handleLogin} />}
      {user === 'admin' && <AdminDashboard />}
      {user === 'employee' && <EmployeeDashboard />}

    </>
  )
}

export default App
