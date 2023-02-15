import React, {useState} from "react"
import memeData from "../memeData"

export default function Meme(){

    // const[MemeImage, setMemeImage] = useState("http://i.imgflip.com/1bij.jpg")

    const[meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })

    const[allMemeImage, setAllMemeImage] = useState(memeData)


    function getMemeImage(){
        const memeArr = allMemeImage.data.memes;
        const randomNumber = Math.floor(Math.random() * memeArr.length)
        const url = memeArr[randomNumber].url

        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
        //console.log(url)
    }


    return(
    <main>
        <div action="" className="form">
            <input type="text" placeholder="Top Text" className="form--input"/>
            <input type="text" placeholder="Bottom Text" className="form--input"/> 
        <button className="form--button"  onClick={getMemeImage}>Get a new meme image 🖼</button>

        </div>
        <img src={meme.randomImage} className="meme--image"/>
    </main>
    )
}
