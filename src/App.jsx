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


  // useEffect(() => {
  //   setLocalStorage();
  //   if(authData) {
  //     const loggedInUser = localStorage.getItem("loggedInUser")
  //     if(loggedInUser){
  //       setUser(loggedInUser.role)
  //     }
  //   }
  // }, [authData]);
  

  const handleLogin = (email, password) => {
    const admin = authData.admins.find((e) => email === e.email && password === e.password)
    if(admin){
      setUser('admin')
      setloggedInUserData(admin)
      localStorage.setItem("loggedInUser", JSON.stringify("admins"))
    } else if(authData) {
      const emp = authData.employees.find((e) => email === e.email && password === e.password)
      if(emp){
        setUser('employee')
        setloggedInUserData(emp)
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
      {user == 'admin' ?  <AdminDashboard data={loggedInUserData}/> : user == 'employee' ? <EmployeeDashboard data={loggedInUserData} /> : null}

    </>
  )
}

export default App
