import React, { useEffect, useState } from "react";
import '../Styles/NavBar.css';
import movEvita from "../Data/movEvita.png";
import movEvitaMini from "../Data/movEvitaMini.png";
import Indice from "./Indice";

export default function NavBar() {
    const [movimiento, setMovimiento] = useState(window.screen.width > 400 ? movEvitaMini : movEvita)

    const updateMovimiento = (e) => {
        setMovimiento(window.screen.width > 400 ? movEvitaMini : movEvita)
    }

    useEffect(() => {
        window.addEventListener("resize", updateMovimiento);
        return () => window.removeEventListener("resize", updateMovimiento);
    }, []);

    return (
        <div id="navBar">
            <img src={movimiento} alt="Movimiento evita" id="movEvita"></img>
            <Indice/>
        </div>
    )
}