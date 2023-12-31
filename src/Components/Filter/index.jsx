import React from 'react'

function Filter({ value, setValue }) {
    return (
        <>

            <h2 className='font-bold text-4xl  mb-5'> Busca tu producto!</h2>
            <input placeholder='Busca el producto especifico ' className='w-96 rounded-3xl h-auto shadow-lg shadow-black text-center p-3 mb-6 mt-4' value={value} onChange={(e) => { setValue(e.target.value) }}></input>
        </>
    )
}

export default Filter