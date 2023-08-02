import React, { useState, useEffect, useContext } from 'react'
import Layout from '../../Components/Layout'
import NavBar from '../../Components/Navbar'
import Card from '../../Components/Card/INDEX.JSX'
import PorductDetail from '../../Components/ProductDetail'
import Filter from '../../Components/filter'
import { ShoppingCartContext } from '../../Context'


function Home() {

    const context = useContext(ShoppingCartContext)
    const [value, setValue] = useState('')





    let searchedProducts = context.items.filter(item => item.title.toLowerCase().includes(value.toLowerCase()))

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

export default Home