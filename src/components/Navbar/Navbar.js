import React from 'react'
import { NavLink } from 'react-router-dom'
import { useAuth } from '../useAuth/auth'
export const Navbar = () => {
    const auth = useAuth()

    return (
        <div className='flex justify-around items-center pt-3 '>
            <NavLink className=' bg-indigo-600 px-5 py-2 text-xl text-white font-semibold rounded hover:scale-110 duration-300' to='/'>Home</NavLink>

            <NavLink className=' bg-indigo-600 px-5 py-2 text-xl text-white font-semibold rounded hover:scale-110 duration-300' to='/profile' >profile</NavLink>
            {
                !auth.user && <NavLink className=' bg-indigo-600 px-5 py-2 text-xl text-white font-semibold rounded hover:scale-110 duration-300' to='/login' >Login</NavLink>
            }
        </div>
    )
}
