import React from "react";
import '../Styles/Burger.css';

function Burger (){
    return(
        <div className="burger">
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
        </div>
    )
}

function Exit (){
    return(
        <div className="cross">
            <div className="bar-cross"></div>
            <div className="bar-cross"></div>
        </div>

    )
}

export {Burger, Exit}