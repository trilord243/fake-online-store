import { createContext, useState } from "react";

const ShoppingCartContext = createContext();


function ShoppingCartProvider({ children }) {

    const [count, setCount] = useState(0)
    const [detail, setDetail] = useState(false)
    const [detailData, setDetailData] = useState({
        title: '',
        price: '',
        image: '',
        description: ''
    })
    const [filter, setFilter] = useState([])

    return (
        <ShoppingCartContext.Provider value={{
            count,
            setCount,
            detail,
            setDetail,
            detailData,
            setDetailData,
            filter,
            setFilter
        }} >


            {children}
        </ShoppingCartContext.Provider>
    )
}

export { ShoppingCartProvider, ShoppingCartContext }