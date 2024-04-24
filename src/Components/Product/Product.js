import React, {useState} from 'react'

/*
Componentes tipo clase
export default class Product extends React.Component {
    constructor(){
        super()
        this.state={
            nombre: 'Francina'
        }
    }

    updateName = () => {
        console.log('satate nombre: ', this.state.nombre)
        this.setState({nombre : 'Ailen'})
    }

    render(){
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

export default function Product(){

    const [nombre, setNombre] = useState('Francina')    //estado que tiene un valor dentro

    const updateNombre = () => {
        console.log('state nombre: ', nombre)
        setNombre('Ailen')
    }

    return(
        <div>
            <h1>
                Nombre: {nombre}
            </h1>
            <button onClick={updateNombre}>Cambiar Nombre</button>
        </div>
    )
}