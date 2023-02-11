import React from "react"
import memeData from "../memeData"

export default function Meme(){

    function getMemeImage(){
        const memeArr = memeData.data.memes;
        const randomNumber = Math.floor(Math.random() * memeArr.length)
        let url = memeArr[randomNumber].url
        console.log(url)
    }


    return(
    <main>
        <div action="" className="form">
            <input type="text" placeholder="Top Text" className="form--input"/>
            <input type="text" placeholder="Bottom Text" className="form--input"/> 
        <button className="form--button"  onClick={getMemeImage}>Get a new meme image 🖼</button>

        </div>
    </main>
    )
}
