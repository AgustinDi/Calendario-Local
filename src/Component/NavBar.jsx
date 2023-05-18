import React, { useEffect, useState } from "react";
import '../Styles/NavBar.css';
import movEvita from "../Data/movEvita.png";
import movEvitaMini from "../Data/movEvitaMini.png";
import Indice from "./Indice";
import { dragClicked } from "../Data/functions";

export default function NavBar() {
    const [movimiento, setMovimiento] = useState(window.screen.width > 400 ? movEvitaMini : movEvita)
    const [burger, setBurger] = useState(window.screen.width > 700)

    const updateMovimiento = () => {
        setMovimiento(window.screen.width > 400 ? movEvitaMini : movEvita)
        setBurger(window.screen.width > 700)
    }

    useEffect(() => {
        window.addEventListener("resize", updateMovimiento);
        return () => window.removeEventListener("resize", updateMovimiento);
    }, []);

    return (
        <div id="navBar">
            <img src={movimiento} alt="Movimiento evita" id="movEvita" href='body' onClick={dragClicked}></img>
            <Indice/>
            {burger ? null : null}
        </div>
    )
}