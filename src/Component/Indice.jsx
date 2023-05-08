import React from "react";

export default function Indice(){
    function clicked(e){
        e.preventDefault();
        const target = e.target.getAttribute('href');
        const element = document.querySelector(target);
        element.scrollIntoView({ behavior: 'smooth' });
    }

    return (
        <div id='indice' onClick={clicked}>
                <span><a href="#sobreNosotros">#Sobre Nosotros</a></span>
                <span><a href="#nuestrosProfes">#Nuestros Profes</a></span>
                <span><a href="#informacion" >#Información</a></span>
        </div>
    )
}