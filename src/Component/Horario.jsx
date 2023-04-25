import React from "react";
const url = "https://res.cloudinary.com/agustindi/image/upload/v1679677372/Calendar/Captura_de_pantalla_2023-03-24_14021211_p8zyqy.png";

export default function Horario(){

    return(
        <>
            <img id="horario" alt='horario' src={url}></img>
        </>
    )
}