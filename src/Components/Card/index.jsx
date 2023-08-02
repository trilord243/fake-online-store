import React, { useState } from 'react'
import { useContext } from 'react'
import { ShoppingCartContext } from '../../Context'
import { PlusIcon } from '@heroicons/react/24/solid'
function Card(data) {

    const product = {
        id: data.data.id,
        title: data.data.title,
        price: data.data.price,
        image: data.data.images[0],
        description: data.data.description

    }

    const context = useContext(ShoppingCartContext)


    function trueDetail() {

        context.setDetail(true)
        context.setDetailData(product)
    }

    function addToCart() {

        const existingProduct = context.cart.find(p => p.id === product.id);

        if (existingProduct) {

            existingProduct.quantity += 1;


            const newCart = context.cart.map(p =>
                p.id === existingProduct.id ? existingProduct : p
            );

            context.setCart(newCart);
        } else {
            context.setCart(prevCart => [...prevCart, { ...product, quantity: 1 }]);
        }

        context.setCount(context.count + 1);
    }




    return (
        <div className='bg-white cursor-pointer w-56 h-60 rounded-lg' >
            <figure className='relative mb-2 w-full h-4/5 '>
                <span className='absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5'> {data.data.category.name} </span>
                <img className='w-full h-full object-cover rounded-lg' src={data.data.images[0]} alt={data.data.title} onClick={trueDetail} />
                <div className='absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1' onClick={addToCart} ><PlusIcon className='w-6 h-6 cursor-pointer' /></div>
            </figure>
            <p className='flex justify-between'>
                <span className='text-sm font-light '> {data.data.title}   </span>
                <span className='text-lg font-medium'> {data.data.price} </span>
            </p>
        </div>
    )
}

export default Card