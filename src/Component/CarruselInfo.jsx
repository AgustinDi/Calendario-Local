import React, { useEffect, useRef, useState } from "react";
import "../Styles/CarruselInfo.css";
import { motion } from 'framer-motion'

const images = [
  "https://res.cloudinary.com/agustindi/image/upload/v1683814234/Local/canto_jhtdz8.jpg",
  "https://res.cloudinary.com/agustindi/image/upload/v1683814235/Local/arte_uqk69i.jpg",
  "https://res.cloudinary.com/agustindi/image/upload/v1683814235/Local/primario_cxyxh7.jpg",
  "https://res.cloudinary.com/agustindi/image/upload/v1683814256/Local/danza_dbbybk.jpg",
  "https://res.cloudinary.com/agustindi/image/upload/v1683814233/Local/secundario_mfk6z5.jpg",
  "https://res.cloudinary.com/agustindi/image/upload/v1683814256/Local/gimnasia_yvcucy.jpg"
];

export default function Slider() {
    const [width, setWidth] = useState(0)
    const carousel = useRef();

    useEffect(()=>{
        setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    },[])
    
  return (
    <motion.div ref={carousel} className='slider-container'>
        <motion.div className='slider' drag='x' 
        dragConstraints={{right: 0, left: -width}} >
        {images.map((image, index) => (
            <motion.div className='item' key={index + 99}>
                <img src={image} alt={index+99} />
            </motion.div>
        ))}
        </motion.div>
    </motion.div>
  )
}