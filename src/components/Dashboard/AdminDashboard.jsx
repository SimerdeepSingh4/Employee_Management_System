import React from 'react'
import Header from '../other/Header'
import CreateTask from '../other/CreateTask'
import AllTask from '../other/AllTask'

const AdminDashboard = ({data, onLogout}) => {
    console.log(data.name)
    return (
        
        <div className='h-screen w-full p-7'>
            
            <Header data={data} onLogout={onLogout}/>
            <CreateTask data={data}/>
            <AllTask data={data}/>
        </div>
    )
}

export default AdminDashboard
