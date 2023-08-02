import { createContext, useEffect, useState } from "react";

const ShoppingCartContext = createContext();


function ShoppingCartProvider({ children }) {

    const [count, setCount] = useState(0)
    const [detail, setDetail] = useState(false)
    const [detailData, setDetailData] = useState({
        title: '',
        price: '',
        image: '',
        description: '',
        quantity: 0,

    })
    const [filter, setFilter] = useState(null)
    const [cart, setCart] = useState([])
    const [items, setItems] = useState([])

    useEffect(() => {
        fetch('https://api.escuelajs.co/api/v1/products')
            .then(response => response.json())
            .then(data => setItems(data))



    }, [])


    return (
        <ShoppingCartContext.Provider value={{
            count,
            setCount,
            detail,
            setDetail,
            detailData,
            setDetailData,
            filter,
            setFilter,
            cart,
            setCart,
            items,
            setItems
        }} >


            {children}
        </ShoppingCartContext.Provider>
    )
}

export { ShoppingCartProvider, ShoppingCartContext }