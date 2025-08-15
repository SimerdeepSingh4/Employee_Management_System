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

  setLocalStorage();
  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser");
    if (loggedInUser) {
      const userData = JSON.parse(loggedInUser);
      if (userData.tasks) { 
        setUser('employee');
      } else {
        setUser('admin');
      }
      setloggedInUserData(userData);
    }
  }, []);


  const handleLogin = (email, password) => {
    const admin = authData.admins.find((e) => email === e.email && password === e.password)
    if(admin){
      setUser('admin')
      setloggedInUserData(admin)
      localStorage.setItem("loggedInUser", JSON.stringify(admin))
    } else if(authData) {
      const emp = authData.employees.find((e) => email === e.email && password === e.password)
      if(emp){
        setUser('employee')
        setloggedInUserData(emp)
        localStorage.setItem("loggedInUser", JSON.stringify(emp))
      } else {
        alert("Invalid Credentials")
      }
    }
    else{
      alert("Invalid Credentials")
    }
  }

    const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    setUser(null);
    setloggedInUserData(null);
    };
  
  return (
    <>
    {!user && <Login handleLogin={handleLogin} />}
      {user == 'admin' ?  <AdminDashboard data={loggedInUserData} onLogout={handleLogout}/> : user == 'employee' ? <EmployeeDashboard data={loggedInUserData} onLogout={handleLogout} /> : null}

    </>
  )
}

export default App
