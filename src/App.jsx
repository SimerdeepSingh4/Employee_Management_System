import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './utils/localStorage'
import { AuthContext } from './context/AuthProvider'


const App = () => {

  const [user, setUser] = useState(null)
  const authData = useContext(AuthContext)
  console.log(authData)

  const handleLogin = (email, password) => {
    if(email == 'admin@me.com' && password == '123'){
      setUser("admin")
      
    } else if(authData && authData.employees.find((e) =>email == e.email && password == e.password)) {
      setUser("employees")
    }
    else{
      alert("Invalid Credentials")
    }
  }

  
  return (
    <>
    {!user && <Login handleLogin={handleLogin} />}
      {user === 'admin' && <AdminDashboard />}
      {user === 'employees' && <EmployeeDashboard />}

    </>
  )
}

export default App
