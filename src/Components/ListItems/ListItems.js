import Items from "../Items/Items.js"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import Product from '../Product/Product.js'
import React, { useEffect } from "react"

//functional component
const ListItems = ({name, price, stock, img}) => {
    const dataProducts = [
        {
            name: "Remera",
            price: 2500,
            stock: 28,
            img: "https://dcdn.mitiendanube.com/stores/001/415/614/products/short-rugby-gilbert811-7f17b1f54962b9e32816369754680533-480-0.webp"
        },
        {
            name: "Short",
            price: 2800,
            stock: 40,
            img: "short1.png"
        },
        {
            name: "Musculosa",
            price: 2200,
            stock: 12,
            img: "musculosa1.png"
        },
        {
            name: "Medias",
            price: 1400,
            stock: 24,
            img: "medias1.png"
        }
    ]

    //Promises

    const promesa1 = new Promise((resolve, reject) => {
        resolve(dataProducts)
    })

    useEffect(() => {
        promesa1.then((data) => {
            console.log("respusta de promesa:", data)
        })
    }, [])

    return (
        <div>
            <h1>Productos Destacados</h1>
            <Product stock={10}/>
            <Product stock={2}/>
            <Product stock={13}/>
            <Product stock={4}/>
            <br></br>
        </div>
    )
}

export default ListItems;

