import React, { useContext } from 'react'
import { TrashIcon } from '@heroicons/react/24/solid'
import { ShoppingCartContext } from '../../Context'

function ListOrder({ title, image, price, quantity }) {
    const context = useContext(ShoppingCartContext)
    function deleteProduct() {

        const existingProduct = context.cart.find(product => product.title === title);

        if (existingProduct.quantity > 1) {

            existingProduct.quantity -= 1;


            const newCart = context.cart.map(p =>
                p.title === existingProduct.title ? existingProduct : p
            );

            context.setCart(newCart);
        } else {

            context.setCart(context.cart.filter(product => product.title !== title));
        }

        context.setCount(context.count - 1);
    }
    return (
        <div className='flex flex-col mt-5 w-1/3'>
            <div className='flex justify-between content-center items-center'>
                <img className='w-24 h-24  rounded-2xl' src={image} alt={title} />
                <h2 className='text'> {title} </h2>
                <h3> {quantity} </h3>
                <h3> {price * quantity}$ </h3>
                <TrashIcon className='w-6 h-6 cursor-pointer ' onClick={deleteProduct} />

            </div>



        </div>
    )
}

export default ListOrder