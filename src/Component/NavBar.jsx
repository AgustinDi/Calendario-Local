import React, { useState, useEffect } from "react";
import '../Styles/NavBar.css';
import movEvita from "../Data/movEvita.png";
import Indice from "./Indice";

export default function NavBar() {
    const [resolution, setResolution] = useState({})

    const updateDimensions = (e) => {
        console.log(window.screen.width);
    }

    useEffect(() => {
        window.addEventListener("resize", updateDimensions);
        return () => window.removeEventListener("resize", updateDimensions);
    }, []);

    return (
        <div id="navBar">
            <img src={movEvita} alt="Movimiento evita" id="movEvita"></img>
            {/* <Indice/> */}
        </div>
    )
}