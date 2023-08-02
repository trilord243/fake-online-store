import React, { useContext, useState } from 'react'
import { ShoppingCartContext } from '../../../Context'
import Layout from '../../../Components/Layout'
import Filter from '../../../Components/filter'
import PorductDetail from '../../../Components/ProductDetail'
import Card from '../../../Components/Card/INDEX.JSX'
import Navbar from '../../../Components/Navbar'

function Toys() {
    const [value, setValue] = useState('')

    const context = useContext(ShoppingCartContext)

    const Toys = context.items.filter(item => item.category.name === 'Toys')


    let searchedProducts = Toys.filter(item => item.title.toLowerCase().includes(value.toLowerCase()))

    return (
        <Layout>
            <Navbar />
            <Filter value={value} setValue={setValue} />
            <div className='grid gap-4 grid-cols-4 w-full max-w-screen-lg'>


                {
                    context.items ? searchedProducts.map(item => <Card key={item.id} data={item} />) : <p>Cargando...</p>
                }
                {searchedProducts.length === 0 && <p>No hay productos que coincidan con tu busqueda</p>}
            </div>
            <PorductDetail />

        </Layout>
    )
}

export default Toys