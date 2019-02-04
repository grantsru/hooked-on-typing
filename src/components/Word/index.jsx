import React from "react";

export default function Word({ word, letterIndex, positionIndex, error }) {
  if (!word) return <></>;

  // Color the text to determine which letter is active
  const colorWordText = (word, letterIndex) => {
    let style,
      oldText = word.split(""),
      newText = [];

    const spanText = (letter, style, index) =>
      <span key={index} style={style}>{letter}</span>;

    for (const [index, letter] of oldText.entries()) {
      if (positionIndex === 0) {
        if (index === letterIndex)
          style = error
            ? { color: "red", backgroundColor: "black" }
            : { color: "#444", backgroundColor: "black" };
        else if (index < letterIndex)
          style = { color: "#00ff48" };
        else
          style = { color: "#eee" };
      } else {
        style = { color: "#444" };
      }

      newText.push(spanText(letter, style, index));
    }

    return newText.map(text => (text));
  };

  const style = i => {
    if (i === 0) return { top: "100px", fontSize: "110px" };
    else if (i === 1) return { top: "250px", fontSize: "75px" };
    else return { top: "375px", fontSize: "75px" };
  };

  return (
    <div className="wordContainer" style={style(positionIndex)}>
      {colorWordText(word, letterIndex)}
    </div>
  )
};
