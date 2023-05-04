import React, { useEffect, useState } from "react";
import getIframeDimensions from "../Data/functions";

export default function Horario(){
    const [width, setWidth]   = useState(getIframeDimensions(window.screen.width).finalWidth);
    const [height, setHeight] = useState(getIframeDimensions(window.screen.width).finalHeight);

    const updateDimensions = (e) => {
        let type = e.target || window;
        console.log(type.screen.width)
        const {finalWidth, finalHeight} = getIframeDimensions(type.screen.width);

        setWidth(finalWidth);
        setHeight(finalHeight);
    }

    useEffect(() => {
        window.addEventListener("resize", updateDimensions);
        return () => window.removeEventListener("resize", updateDimensions);
    }, []);

    return(
        <>
            <iframe width={width} height={height} title='calendario' src="https://calendar.google.com/calendar/embed?height=400&wkst=1&bgcolor=%23039BE5&ctz=America%2FArgentina%2FCordoba&mode=WEEK&showTitle=0&showNav=0&showDate=0&showPrint=0&showTabs=0&showCalendars=0&showTz=0&src=YzU2YWNiOTIwZWM4OTFiYjI2MTZlYWRkOWZkNWI2ZGVkZTY3ZjljNTRiNGQ4MGI4ZDA1NzNiOTRjMzBjNjU4ZUBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=ZXMuYXIjaG9saWRheUBncm91cC52LmNhbGVuZGFyLmdvb2dsZS5jb20&color=%23F4511E&color=%230B8043"></iframe>
        </>
    )
}