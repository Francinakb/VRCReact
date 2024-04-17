
const Items = ({name, price, stock, img}) => {
    return (
        <div>
            <p>Producto : {name}</p>
            <p>Precio : {price}</p>
            <p>Stock : {stock}</p>
            <img src={`../Assets/${img}`}/>
        </div>
    )
}

export default Items;