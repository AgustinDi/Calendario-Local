import React, { useEffect, useState } from "react";
import '../Styles/NavBar.css';
import movEvita from "../Data/movEvita.png";
import movEvitaMini from "../Data/movEvitaMini.png";
import Indice from "./Indice";

export default function NavBar() {
    const [movimiento, setMovimiento] = useState(window.screen.width < 400 ? movEvitaMini : movEvita)

    const updateMovimiento = () => {
        setMovimiento(window.screen.width < 400 ? movEvitaMini : movEvita)
    }

    useEffect(() => {
        window.addEventListener("resize", updateMovimiento);
        return () => window.removeEventListener("resize", updateMovimiento);
    }, []);

    
    function dragClicked(e){
        e.preventDefault();
        const target = e.target.getAttribute('href');
        const element = document.querySelector(target);
        element.scrollIntoView({behavior: 'smooth'});
    }

    return (
        <div id="navBar">
            <img src={movimiento} alt="Movimiento evita" id="movEvita" href='body' onClick={dragClicked}></img>
            <Indice/>
        </div>
    )
}