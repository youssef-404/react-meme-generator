import memesData from "../memesData"
import React from "react"

export default function Meme(){
    const [memeImage,setMemeImage] = React.useState("")
    function getMemeImage() {
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length) 
        setMemeImage(memesArray[randomNumber].url)
    }
    return(
        <main>

        <div className="form">
            <div className="inputs"> 
                <input placeholder="Top text"/>
                <input placeholder="Bottom text"/>
            </div>
            <button onClick={getMemeImage}>Get a new meme image  🖼</button>
        </div>
            <img src={memeImage}/>
        </main>
    )
}