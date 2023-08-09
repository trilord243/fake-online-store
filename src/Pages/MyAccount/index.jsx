import React, { useContext } from 'react'
import Layout from '../../Components/Layout'
import Navbar from '../../Components/Navbar'
import { ShoppingCartContext } from '../../Context'
import UserData from '../UserData'
import { Navigate } from 'react-router-dom'

function MyAccount() {
    const context = useContext(ShoppingCartContext)
    return (
        <Layout>
            <Navbar />


            {context.sigIn && <UserData />}
            {!context.sigIn && <Navigate to='/sign-in' />}




        </Layout>
    )
}

export default MyAccount