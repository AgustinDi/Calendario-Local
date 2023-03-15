import React from "react";
import data from "../Data/DataPeople.json";
import CardPeople from "./CardPeople.jsx";

export default function CardsPeople(){
    const {people} = data;
    
    return (
        <div id="CardsPeople">
        {people.map(i=><CardPeople people={i}/>
        )}
        </div>
    )
}