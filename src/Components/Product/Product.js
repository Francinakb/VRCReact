import React, {useState, useEffect} from 'react'


//Componentes tipo clase
/*export default class Product extends React.Component {
    constructor(){
        super()
        this.state={
            nombre: 'Villegas Rugby Club'
        }
    }

    componentDidMount() {
        //2 Montaje
        console.log("el componente se encuentra en el dom")
    }

    componentDidUpdate() {
        //3 cuando se cambie nombre (Actualizacion)
        console.log("el componente o las props se actualizaron")
    }

    
    updateName = () => {
        console.log('satate nombre: ', this.state.nombre)
        this.setState({nombre : 'Villegas Hockey Club'})
    }

    render(){
        //1 Montaje
        console.log("el componente se renderizo")
        return(
            <div>
                <h1>
                    Nombre: {this.state.nombre}
                </h1>
                <button onClick={this.updateName}>Cambiar Nombre</button>
            </div>
        )
    }
}*/

//componentes funcionales

export default function Product({stock}){

    const [itemCount, setItemCount] = useState(0)

    const updateItem = () => {
        if(itemCount < stock){
            setItemCount(itemCount + 1)
        }
    }

    const removeItem = () => {
        itemCount >= 1 && setItemCount(itemCount - 1)
    }

    return(
        //Montaje
        <div>
            <h2>Remera de Entrenamiento</h2>
            {console.log("render")}
            <h1>{itemCount}</h1>
            <button onClick={removeItem}>-</button>
            <button onClick={updateItem}>+</button><br></br>
            <button>Agregar al carrito</button><br></br>
            <span> Stock: {stock}</span>
        </div>
    )
}