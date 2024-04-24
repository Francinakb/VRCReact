import * as React from 'react';
import '../../Components/NavBar/NavBar.css';
import AppBar from '@mui/material/AppBar';
import logo from "../../Assets/logovrc.png";
import '../../Components/NavBar/NavBar.css';
import CartWidget from '../CartWidget/Cartwidget';

export default function NavBar() {

    return (
        <AppBar className='NavBar' position='static'>
            <nav>
                <div className='container'>
                <div className='container-logo'>
                    <img className='logo-vrc' src={logo} alt='logo-ecommerce' />
                </div>
                <div className='container-li'>
                <ul>
                    <li>Inicio</li>
                    <li>Productos</li>
                    <li>Contacto</li>
                    <li>Sobre Nosotros</li>
                </ul>
                <CartWidget/>
                </div>
                </div>
            </nav>
        </AppBar>
    );
}
