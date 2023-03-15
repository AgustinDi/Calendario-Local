import React from "react";
import logo from "../whatsapp.png";

export default function CardPeople({people}){
    const { name, rol, cellphone, rango } = people;
    return (
        <div className="CardPeople">
            <div>
                <h4>{name}</h4>
                <p>{rol} - {rango}</p>
            </div>
            <a href={`https://wa.me/${cellphone}`}>
                <img src={logo} alt={cellphone} className="wtspImage"/>
            </a>
        </div>
    )
}