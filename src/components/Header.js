import React from "react";
import Icon from "../images/troll-face.png";

export default function Header() {
  return (
    <header className="header">
      <img src={Icon} className="header--image" />
      <h2 className="header--title">Meme Idea Generator</h2>
      <h4 className="header--project">
        Temukan ide meme dan tulis captionnya sendiri!
      </h4>
    </header>
  );
}
