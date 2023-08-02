import React, { useContext, useState } from 'react'
import { ShoppingCartContext } from '../../../Context'
import Layout from '../../../Components/Layout'
import NavBar from '../../../Components/Navbar'
import Filter from '../../../Components/filter'
import PorductDetail from '../../../Components/ProductDetail'
import Card from '../../../Components/Card/INDEX.JSX'

function Electronics() {
    const [value, setValue] = useState('')

    const context = useContext(ShoppingCartContext)

    const Electronics = context.items.filter(item => item.category.name === 'Electronics')


    let searchedProducts = Electronics.filter(item => item.title.toLowerCase().includes(value.toLowerCase()))

    return (
        <Layout>
            <NavBar />
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

export default Electronics