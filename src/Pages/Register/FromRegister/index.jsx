import React, { useContext } from 'react'
import { ShoppingCartContext } from '../../../Context'
import { useNavigate } from 'react-router-dom'
import { EyeIcon } from '@heroicons/react/24/solid'

function FromRegister() {

    const navigate = useNavigate()
    const context = useContext(ShoppingCartContext)
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')


    function handleSubmit(e) {
        e.preventDefault()
    }

    function registerUser() {
        localStorage.setItem('usernames', JSON.stringify([...context.usernames, { username: email, password: password }]))
        context.setUsernames([...context.usernames, { username: email, password: password }])
        alert('user created')
        navigate('/sign-in')



    }

    return (


        <div className='h-screen w-screen flex justify-center content-center   '>
            <form className='w-[700px] h-[600px]  bg-white  shadow-2xl shadow-black rounded-2xl self-center border-solid border mb-7' onSubmit={handleSubmit} >
                <div className=' flex flex-col relative'>
                    <h1 className='text-4xl font-bold text-center mt-10 mb-10'>Register</h1>
                    <input className='h-[70px] w-[500px] self-center mt-10 mb-10  shadow-black border-2  rounded-2xl  p-3 text-xl font-semibold ' type="text" placeholder='Email' value={email} onChange={(e) => { setEmail(e.target.value) }} />

                    <EyeIcon className='absolute  h-6 w-6 text-gray-400 right-28 top-[335px] cursor-pointer ' />


                    <input className='h-[70px] w-[500px] self-center mt-10 mb-10  shadow-black border-2  rounded-2xl  p-3 text-xl font-semibold ' type="password" placeholder='Password' value={password} typeof='password' onChange={(e) => { setPassword(e.target.value) }} />

                </div>
                <div className='w-full flex justify-end px-20'>

                    <button className=' w-32 h-16 p-3 border border-solid bg-blue-500  rounded-xl  text-white font-bold shadow-black' onClick={registerUser}> Register </button>
                </div>



            </form>
        </div>)
}

export default FromRegister