import Items from "../Items/Items.js"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import Product from '../Product/Product.js'

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

    return (
        <div>
            <h1>Productos Destacados</h1>
            <Product/>
        </div>
    )
}

export default ListItems;

