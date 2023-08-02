import React, { useContext } from 'react'
import Layout from '../../Components/Layout'
import { ShoppingCartContext } from '../../Context'
import ListOrder from '../../Components/ListOrder'
import Navbar from '../../Components/Navbar'

function MyOrders() {
    const context = useContext(ShoppingCartContext)

    const totalPrice = context.cart.reduce((acc, item) => acc + item.price * item.quantity, 0)
    return (
        <Layout>
            <Navbar />
            <h1>My Order</h1>
            {context.cart.length > 0 ? context.cart.map((order) => <ListOrder title={order.title} image={order.image} price={order.price} totalPrice={totalPrice} quantity={order.quantity} />) : <h1>No hay ordenes</h1>}


            <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>

            <div className='flex justify-between w-1/3'>

                <p className='font-thin text-2xl'>Total price:</p>
                <p className='font-bold text-2xl'>{totalPrice}$</p>
            </div>

        </Layout>
    )
}

export default MyOrders