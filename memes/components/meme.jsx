import React, { useEffect, useState } from "react";
import "./meme.css"
import memes from "../memesData"

export function Meme() {
  const [data, setData] = useState({ 'topLine': "", 'bottomLine': "", randomImage: 'http://i.imgflip.com/1bij.jpg', count: 0 })

  useEffect(function(){
    fetch("https://api.imgflip.com/get_memes")
    .then((response) => {
      return response.json();
    })
    .then(response => {
      setData((prev) => {
        return {...prev, randomImage: response.data.memes[Math.floor(Math.random() * response.data.memes.length)].url}
      })
    })
  }, [data.count])

  function getImage() {
    setData(prev =>{
      return {
        ...prev,
        count:prev.count + 1
      }
    });
  }

  function handleChange(event) {
    const { name, value } = event.target
    setData((prev) => {
      return ({
        ...prev,
        [name]: value
      })
    })
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
          <img id="memeImage" src={data.randomImage}></img>
          <h2 className="meme--text top">{data.topLine}</h2>
          <h2 className="meme--text bottom">{data.bottomLine}</h2>
        </div>
      </form>
    </div>
  )
}