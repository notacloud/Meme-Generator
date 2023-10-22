import React, { useState } from "react";
import "./meme.css"
import memes from "../memesData"

export function Meme() {
  const [meme, setMeme] = useState({ topText: '', bottomText: '', randomImage: 'http://i.imgflip.com/1bij.jpg' })

  const [allMemeImages, setAllMemeImages] = useState(memes.data.memes)

  const [data, setData] = useState({ 'topLine': "", 'bottomLine': "" })

  function getImage() {
    setMeme(item => {
      return {
        ...item,
        randomImage: allMemeImages[Math.floor(Math.random() * allMemeImages.length)].url
      }
    })
  }

  function handleChange(event) {
    const { name, value } = event.target
    setData((prev) => {
      return ({
        ...prev,
        [name]: value
      })
    })
    console.log(data)
  }

  return (
    <div className="meme">
      <form>
        <div className="inputs">
          <input type="text" id="firstLine" placeholder="Enter top line" name="topLine" value={data.topLine} onChange={handleChange}></input>
          <input type="text" id="secondLine" placeholder="Enter bottom line" name="bottomLine" value={data.bottomLine} onChange={handleChange}></input>
        </div>
        <div className="buttons">
          <button title="Click to generate image" type="button" onClick={getImage}>Get a new meme image 🖼</button>
        </div>
        <div className="image">
          <img id="memeImage" src={meme.randomImage}></img>
          <h2 className="meme--text top">{data.topLine}</h2>
          <h2 className="meme--text bottom">{data.bottomLine}</h2>
        </div>
      </form>
    </div>
  )
}