import React from "react";
import logo from "../whatsapp.png";

export default function CardPeople({people}){
    const { name, rol, cellphone, rango } = people;
    return (
        <div className="CardPeople">
            <h4>{name}: {cellphone}</h4>
            <p>{rol} - {rango}</p>
            <a href={`https://wa.me/${cellphone}`}>
                <img src={logo} alt={cellphone}/>
            </a>
        </div>
    )
}