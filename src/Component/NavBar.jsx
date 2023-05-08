import React from "react";
import '../Styles/NavBar.css';
import movEvita from "../Data/movEvita.png";
import Indice from "./Indice";

export default function NavBar() {
    return (
        <div id="navBar">
            <img src={movEvita} alt="Movimiento evita" id="movEvita"></img>
            <Indice/>
        </div>
    )
}