import { useState } from "react";
import memesData from "../memesData.jsx";

export default function Meme() {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  const [allMemeImages, setAllMemeImages] = useState(memesData);

  function getMemeImage() {
    const memesArray = allMemeImages.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomNumber].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }));
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  }

  return (
    <div className="meme">
      <div className="meme-txt">
        <input
          type="text"
          name="aboveText"
          id="aboveText"
          value={meme.topText}
          onChange={handleChange}
        />
        <input
          type="text"
          name="belowText"
          id="belowText"
          value={meme.bottomText}
          onChange={handleChange}
        />
      </div>
      <button className="meme-btn" type="button" onClick={getMemeImage}>
        Get a new meme image ⛺
      </button>
      <div className="meme--container">
        <img src={meme.randomImage} className="meme--image" />
        <h2 className="meme--text top">{meme.topText}</h2>
        <h2 className="meme--text bottom">{meme.bottomText}</h2>
      </div>
    </div>
  );
}
