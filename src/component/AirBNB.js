import React from "react"
import Navbar from "./AirBNB/Navbar"
import Hero from "./AirBNB/Hero"
import Card from "./AirBNB/Card"
import data from "../data/airBNBData"
import './AirBNB.css'

export default function AirBNB() {
    const cards = data.map(item => {
        return (
            <Card
                key={item.id}
                item={item}
            />
        )
    })        
    
         
    return (
        <div className="airBNB">
            <Navbar />
            <Hero />
            <section className="cards-list">
                {cards}
            </section>
        </div>
    )
}