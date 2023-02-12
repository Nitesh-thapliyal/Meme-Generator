import React, {useState} from "react"
import memeData from "../memeData"

export default function Meme(){

    const[MemeImage, setMemeImage] = useState("")


    function getMemeImage(){
        const memeArr = memeData.data.memes;
        const randomNumber = Math.floor(Math.random() * memeArr.length)
        setMemeImage(memeArr[randomNumber].url)
        //console.log(url)
    }


    return(
    <main>
        <div action="" className="form">
            <input type="text" placeholder="Top Text" className="form--input"/>
            <input type="text" placeholder="Bottom Text" className="form--input"/> 
        <button className="form--button"  onClick={getMemeImage}>Get a new meme image 🖼</button>

        </div>
        <img src={MemeImage} className="meme--image"/>
    </main>
    )
}
