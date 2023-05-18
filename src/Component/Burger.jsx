import React from "react";
import '../Styles/Burger.css';
import { motion } from "framer-motion"; 

function Burger (){
    return(
        <motion.div whileTap={{ scale: 0.8 }} className="burger">
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
        </motion.div>
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