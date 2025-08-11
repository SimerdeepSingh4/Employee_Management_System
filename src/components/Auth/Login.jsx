import React, { useState } from 'react'

const Login = () => {
    
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const submitHandler = (e) =>{
        e.preventDefault()
        console.log("email is: ", email);
        console.log("password is: ", password)
        
        setEmail('')
        setPassword('')
    }
  return (
    <div className='flex items-center justify-center h-screen w-screen'>
      <div className='border-2 border-emerald-600 p-20 rounded-xl'>
        <form
        onSubmit = {(e) =>{
            submitHandler(e)
        }}
        className="flex flex-col items-center justify-center">
            <input
            value={email}
            onChange ={(e)=>{
                setEmail(e.target.value)
                console.log(e.target.value)
            }}
            required className ='text-black outline-none bg-transparent rounded-full border-2 border-emerald-600 py-3 px-5 text-xl plcaeholder:text-white' type="email" placeholder='Enter your email'/>
            <input
            value={password}
            onChange ={(e)=>{
                setPassword(e.target.value)
                console.log(e.target.value)
            }}
            required className ='text-black outline-none bg-transparent rounded-full border-2 border-emerald-600 py-3 px-5 text-xl plcaeholder:text-white mt-3' type="password" placeholder='Enter password'/>
            <button className ='mt-5 text-white outline-none rounded-full border-2 bg-emerald-600 py-3 px-5 text-xl plcaeholder:text-white'>Log in</button>
        </form>
      </div>
    </div>
  )
}

export default Login
