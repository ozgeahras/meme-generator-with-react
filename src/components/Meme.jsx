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

  return (
    <div className="meme">
      <div className="meme-txt">
        <input type="text" name="aboveText" id="aboveText" />
        <input type="text" name="belowText" id="belowText" />
      </div>
      <button className="meme-btn" type="button" onClick={getMemeImage}>
        Get a new meme image ⛺
      </button>
      <img src={meme.randomImage} className="meme--image" />
    </div>
  );
}
