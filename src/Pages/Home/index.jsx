import React, { useState, useEffect } from 'react'
import Layout from '../../Components/Layout'
import NavBar from '../../Components/Navbar'
import Card from '../../Components/Card/INDEX.JSX'

function Home() {
    const [items, setItems] = useState(null)

    useEffect(() => {
        fetch('https://api.escuelajs.co/api/v1/products')
            .then(response => response.json())
            .then(data => setItems(data))



    }, [])


    return (
        <Layout>
            <NavBar />
            <div className='grid gap-4 grid-cols-4 w-full max-w-screen-lg'>


                {
                    items ? items.map(item => <Card key={item.id} data={item} />) : <p>Cargando...</p>
                }
            </div>

        </Layout>
    )
}

export default Home