import React, { useState } from "react";
import {Burger, Exit} from './Burger.jsx';

export default function Indice(){
    const [burgerState, setBurgerState] = useState(false);
    const visible = 'visible';

    
    function dragClicked(e){
        e.preventDefault();
        const target = e.target.getAttribute('href');
        const element = document.querySelector(target);
        element.scrollIntoView({behavior: 'smooth'});
    }

    return (
        <div id="indice">
        <button className="abrir-menu" onClick={()=>setBurgerState(true)}><Burger/></button>
        <nav className={`nav ${burgerState ? visible : null}`} id="nav">
            <button className="cerrar-menu" onClick={()=>setBurgerState(false)}><Exit/></button>
            <ul className="nav-list" onClick={e=>{dragClicked(e);setBurgerState(false)}}>
                <li>
                    <a href="#sobreNosotros">Sobre Nosotros #</a>
                </li>
                <li>
                    <a href="#nuestrosProfes">Nuestros Profes #</a>
                </li>
                <li>
                    <a href="#informacion" >Información #</a>
                </li>
            </ul>
        </nav>
        </div>
    )
}