import React, { useContext } from 'react'
import Layout from '../../Components/Layout'
import NavBar from '../../Components/Navbar'
import { ShoppingCartContext } from '../../Context'
import ListOrder from '../../Components/ListOrder'

function MyOrder() {
    const context = useContext(ShoppingCartContext)

    return (
        <Layout>
            <NavBar />
            <h1>My Order</h1>


        </Layout>
    )
}

export default MyOrder