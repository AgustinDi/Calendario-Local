import React, { useState } from "react";
import FloatImg from "./FloatImg";
const url = "https://res.cloudinary.com/agustindi/image/upload/v1679677372/Calendar/Captura_de_pantalla_2023-03-24_14021211_p8zyqy.png";

export default function Horario(){
    const [show, setShow] = useState(false);

    return(
        <>
            <img alt='horario' onClick={()=>setShow(true)} src={url}></img>
            {show && <FloatImg url={url} set={setShow}></FloatImg>}
        </>
    )
}