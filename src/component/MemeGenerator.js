import React from "react"
import Header from "./MemeGenerator/Header"
import Meme from "./MemeGenerator/Meme"
import './MemeGenerator.css'
/**
 * Challenge: 
 * - Create a Meme component.
 * - Inside the Meme component, render a styled form
 *   with our 2 inputs and the button.
 * - Don't worry about adding any functionality yet
 */
export default function MemeGenerator() {
    return (
        <div className="memeGen">
            <Header />
            <Meme />
        </div>
    )
}
