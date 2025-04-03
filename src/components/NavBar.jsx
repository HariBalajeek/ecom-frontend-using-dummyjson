import React from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { useAuth } from '../context/AuthContext'

const NavBar = () => {
  const {cart} = useCart()
  const {user , logout} = useAuth()

  const totalItems = cart.reduce((sum,item)=>sum+item.quantity,0)
  return (
    <nav className=' bg-gray-800 text-white p-4 fixed top-0 z-10 w-full shadow-md flex flex-col justify-between md:flex-row'>
        <h1 className='text-xl font-bold cursor-pointer'>
            <Link to='/'>MyShoppy</Link>
        </h1>
        <div className='flex flex-col gap-10 text-center text-lg md:flex-row'>
            <Link to='/' className='transform transition duration-500 hover:scale-150'>Home</Link>
            <Link to='/contact' className='navbar-btn'>Contact</Link>
            <Link to='/about' className='navbar-btn'>About</Link>
            <Link to='/cart' className='navbar-btn'>Cart 🛒 {totalItems > 0 && <span className='bg-red-600 px-2 py-1 rounded-full p-1 '>{totalItems}</span>}</Link>
            {
              user?
                <button className='navbar-btn' onClick={logout}>Logout</button>
              :
                <Link to='/login' className='navbar-btn'>Login</Link>
            }
        </div>
    </nav>
  )
}

export default NavBar