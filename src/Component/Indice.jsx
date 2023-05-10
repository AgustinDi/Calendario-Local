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
                <a href="#sobreNosotros">#Sobre Nosotros</a>
                <a href="#nuestrosProfes">#Nuestros Profes</a>
                <a href="#informacion" >#Información</a>
        </div>
    )
}