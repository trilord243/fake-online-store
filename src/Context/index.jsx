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
    const [sigIn, setsigIn] = useState(false)

    useEffect(() => {
        fetch('https://api.escuelajs.co/api/v1/products')
            .then(response => response.json())
            .then(data => setItems(data))



    }, [])

    const [usernames, setUsernames] = useState([{ 'username': 'admin', 'password': 'admin' }])

    useEffect(() => {
        if (localStorage.getItem('usernames') != null) {
            setUsernames(JSON.parse(localStorage.getItem('usernames')))
        } else {
            localStorage.setItem('usernames', JSON.stringify(usernames))
        }

    }, [])

    const [activeSession, setActiveSession] = useState('')


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
            setItems,
            sigIn,
            setsigIn,
            usernames,
            setUsernames,
            activeSession,
            setActiveSession
        }} >


            {children}
        </ShoppingCartContext.Provider>
    )
}

export { ShoppingCartProvider, ShoppingCartContext }