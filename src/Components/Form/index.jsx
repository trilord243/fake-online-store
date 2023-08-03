import React, { useContext, useState } from 'react'
import { NavLink, Navigate, redirect, useNavigate } from 'react-router-dom'
import { ShoppingCartContext } from '../../Context'

function Form() {
    const context = useContext(ShoppingCartContext)
    const navigate = useNavigate()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    function handleSubmit(e) {
        e.preventDefault()


    }
    function validateAccount() {
        if (context.usernames.find(user => user.username === email && user.password === password)) {
            context.setsigIn(true)
            context.setActiveSession(email)
            navigate('/')
        }
        else {
            alert('wrong password or email')
        }




    }



    return (
        <div className='h-screen w-screen flex justify-center content-center   '>
            <form className='w-[700px] h-[600px]  bg-white  shadow-2xl shadow-black rounded-2xl self-center border-solid border mb-7' onSubmit={handleSubmit}>
                <div className=' flex flex-col'>
                    <h1 className='text-4xl font-bold text-center mt-10 mb-10'>Sign In</h1>
                    <input className='h-[70px] w-[500px] self-center mt-10 mb-10  shadow-black border-2  rounded-2xl  p-3 text-xl font-semibold ' type="text" placeholder='Email' value={email} onChange={(e) => { setEmail(e.target.value) }} />

                    <input className='h-[70px] w-[500px] self-center mt-10 mb-10  shadow-black border-2  rounded-2xl  p-3 text-xl font-semibold ' type="text" placeholder='Password' value={password} onChange={(e) => { setPassword(e.target.value) }} />
                </div>
                <div className='w-full flex justify-end px-20'>

                    <button className=' w-32 h-16 p-3 border border-solid bg-blue-500  rounded-xl  text-white font-bold shadow-black' onClick={validateAccount}>Log in </button>
                </div>
                <p className='ml-28'>Dont have account <span className='text-blue-600 font-extrabold hover ' >Register!</span></p>


            </form>
        </div>
    )
}

export default Form