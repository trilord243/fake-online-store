import React, { useContext } from 'react'


import { XMarkIcon } from '@heroicons/react/24/solid'
import { ShoppingCartContext } from '../../Context'


function PorductDetail() {
    const context = useContext(ShoppingCartContext)

    function toggleDetail() {
        context.setDetail(!context.detail)
    }

    const display = context.detail ? '' : 'hidden'

    return (
        <>
            <aside className={`flex flex-col fixed right-0 border bg-white border-black rounded-lg w-[360px] h-[calc(100vh-80px)] ${display} `}>
                <div className='flex  justify-between items-center p-6'>
                    <h2 className='font-medium text-xl'>Detail</h2>

                    <div onClick={toggleDetail}>
                        <XMarkIcon className='w-6 h-6 cursor-pointer' />

                    </div>


                </div>
                <div className='flex flex-col items-center justify-center mt-8'>

                    <img className='w-56 h-56 rounded-3xl' src={context.detailData.image} alt={context.detailData.title} />
                    <h1 className='font-bold text-2xl mb-4 ' > {context.detailData.title} </h1>
                    <h3 className='font-medium text-2xl mb-2 '> {context.detailData.price}$ </h3>
                    <p className='text-center text-lg'> {context.detailData.description} </p>



                </div>




                <h2> {context.title} </h2>


            </aside >

        </>
    )
}

export default PorductDetail