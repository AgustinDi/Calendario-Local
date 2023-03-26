import React from "react";
import '../Styles/FloatImg.css'

export default function FloatImg({url, set}){
    
    return(
        <div onClick={()=>set(false)} id='fondo'>
            <div id='container'>
                <img alt="horario" src={url} id='image'></img>
            </div>
        </div>
    )
}