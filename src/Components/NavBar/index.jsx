import React, { useContext, useState } from 'react'
import { NavLink } from 'react-router-dom'

import { ShoppingCartContext } from '../../Context'

import { ShoppingCartIcon } from '@heroicons/react/24/solid'

function Navbar() {
    function handleSignOut() {
        context.setsigIn(false)
        context.setActiveSession('')
    }


    const context = useContext(ShoppingCartContext)
    const activeStyle = `underline underline-thickness: 2px underline-offset: 2px underline-color: #000`

    return (
        <nav className='flex justify-between items-center fixed z-10 w-full py-5 px-8 text-sm font-light top-0'>
            <ul className='flex items-center gap-3'>
                <li className='font-semibold text-lg'>
                    <NavLink to="/" >Shopi</NavLink>
                </li>
                <li>
                    <NavLink to="/" className={({ isActive }) => isActive ? activeStyle : undefined}>All</NavLink>
                </li>
                <li>
                    <NavLink to="/clothes" className={({ isActive }) => isActive ? activeStyle : undefined}>Clothes</NavLink>
                </li>
                <li>
                    <NavLink to="/electronics" className={({ isActive }) => isActive ? activeStyle : undefined}>Electronics</NavLink>
                </li>
                <li>
                    <NavLink to="/furnitures" className={({ isActive }) => isActive ? activeStyle : undefined}>Furnitures</NavLink>
                </li>
                <li>
                    <NavLink to="/toys" className={({ isActive }) => isActive ? activeStyle : undefined}>Toys</NavLink>
                </li>
                <li>
                    <NavLink to="/others" className={({ isActive }) => isActive ? activeStyle : undefined}>Others</NavLink>
                </li>
            </ul>

            <ul className='flex justify-center gap-3'>
                {context.sigIn && <li className='text-black/60'>
                    {context.activeSession}
                </li>}
                <li>
                    <NavLink to="/my-orders" className={({ isActive }) => isActive ? activeStyle : undefined}>My Orders</NavLink>
                </li>
                {context.sigIn &&
                    <li>
                        <NavLink to="/my-account" className={({ isActive }) => isActive ? activeStyle : undefined}>My Account</NavLink>
                    </li>}
                {!context.sigIn && <li>
                    <NavLink to="/sign-in" className={({ isActive }) => isActive ? activeStyle : undefined}>Sign in </NavLink>
                </li>}
                {
                    !context.sigIn && <li>
                        <NavLink to="/register" className={({ isActive }) => isActive ? activeStyle : undefined}>Register </NavLink>
                    </li>
                }

                {
                    context.sigIn && <li>
                        <p className='cursor-pointer ' onClick={handleSignOut}  >Sign out </p>
                    </li>
                }
                <li className='flex items-center '>
                    <ShoppingCartIcon className='h-6 w-6 '></ShoppingCartIcon> <div> {context.count}  </div>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar