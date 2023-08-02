import { createContext, useState } from "react";

const ShoppingCartContext = createContext();


function ShoppingCartProvider({ children }) {

    const [count, setCount] = useState(0)
    const [detail, setDetail] = useState(false)
    const [detailData, setDetailData] = useState({
        title: '',
        price: '',
        image: '',
        description: '',
        quantity: 0
    })
    const [filter, setFilter] = useState(null)
    const [cart, setCart] = useState([])




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
            setCart
        }} >


            {children}
        </ShoppingCartContext.Provider>
    )
}

export { ShoppingCartProvider, ShoppingCartContext }