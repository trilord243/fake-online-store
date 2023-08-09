import React, { useContext } from 'react'
import { ShoppingCartContext } from '../../Context'

function UserData() {
    const context = useContext(ShoppingCartContext)
    return (
        < >


            < h1 className='text-6xl' > My account</ h1>
            <h2 className='text-3xl mt-5 self-center\' >Name : <span className='font-bold text-4xl'>{context.activeSession}😋</span>   </h2>



        </ >
    )
}

export default UserData