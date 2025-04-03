import React, { useState } from 'react'
import { useAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const {login} = useAuth()
  const [username,setUsername] = useState("")
  const navigate = useNavigate()

  const handleLogin = (e)=>{
      e.preventDefault()
      login(username)
      navigate("/cart")
  }
  return (
    <div className='flex justify-center items-center bg-gray-100 relative top-10 py-10'>
      <form onSubmit={handleLogin} className='p-10 bg-white shadow-lg rounded-2xl' >
        <h2 className='text-2xl font-bold mb-4 text-center'>Login</h2>
        <input 
        className='border p-2 rounded-md w-full mb-4'
        onChange={(e)=>setUsername(e.target.value)} 
        value={username}
        type="text" 
        placeholder='Enter Username' 
        required />
        <input 
        className='border p-2 rounded-md w-full mb-4' 
        type="password" 
        placeholder='Enter Password' 
        required />
        <button className='w-full bg-gray-800 text-white p-2 rounded-3xl transform duration-500 hover:scale-105 hover:shadow-2xl' type='submit'>Login</button>
      </form>
    </div>
  )
}

export default Login