import memesData from "../memesData"
import React from "react"

 /**
     * Challenge: Update our state to save the meme-related
     * data as an object called `meme`. It should have the
     * following 3 properties:
     * topText, bottomText, randomImage.
     * 
     * The 2 text states can default to empty strings for now,
     * amd randomImage should default to "http://i.imgflip.com/1bij.jpg"
     * 
     * Next, create a new state variable called `allMemeImages`
     * which will default to `memesData`, which we imported above
     * 
     * Lastly, update the `getMemeImage` function and the markup 
     * to reflect our newly reformed state object and array in the
     * correct way.
     */
    

export default function Meme(){

    const [meme,setMeme] = React.useState({
        topText:'',
        bottomText:'',
        randomImage:'https://i.imgflip.com/1ur9b0.jpg'
    })

    const [allMemeImage,setAllMemeImage] = React.useState(memesData)

    function getMemeImage() {
        const memesArray = allMemeImage.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length) 
        setMeme((prevMeme)=>({
            ...prevMeme,
            randomImage:memesArray[randomNumber].url
        })
        )
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
            <img src={meme.randomImage}/>
        </main>
    )
}