import React from "react"
    

export default function Meme(){

    const [meme,setMeme] = React.useState({
        topText:'',
        bottomText:'',
        randomImage:'https://i.imgflip.com/1ur9b0.jpg'
    })

    const [allMemes,setAllMemes] = React.useState([])

    React.useEffect(() => {
        async function getMemes() {
            const res = await fetch("https://api.imgflip.com/get_memes")
            const data = await res.json()
            setAllMemes(data.data.memes)
        }
        getMemes()
    }, [])
    
    function getMemeImage() {
        const randomNumber = Math.floor(Math.random() * allMemes.length) 
        setMeme((prevMeme)=>({
            ...prevMeme,
            randomImage:allMemes[randomNumber].url
        })
        )
    }

    function handleChange(event){
        const {name,value} = event.target
        setMeme((prevData)=>({
            ...prevData,
            [name]:value
        }))
    }
    return(
        <main>

            <div className="form">
                <div className="inputs"> 
                    <input 
                        type="text"
                        placeholder="Top text"
                        name="topText"
                        value={meme.topText}
                        onChange={handleChange}
                    />
                    <input 
                        placeholder="Bottom text"
                        name="bottomText"
                        value={meme.bottomText}
                        onChange={handleChange}
                    />
                </div>
                <button onClick={getMemeImage}>Get a new meme image  🖼</button>
            </div>
            <div className="memeContainer">
                <img className="memeContainer--img" src={meme.randomImage} alt="meme"/>
                <h2 className="punchline punchline--top">{meme.topText}</h2>
                <h2 className="punchline punchline--bottom">{meme.bottomText}</h2>
            </div>
        </main>
    )
}