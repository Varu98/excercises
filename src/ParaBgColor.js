import React, { useState } from "react";
import "./App.css";

export const ParaBgColor = () => {
  // ex: change background color#
  // Take a paragraph with text. Have a toggle button. Change the color of the background between red and transparent on every button click.
  const [changeColor, setChangeColor] = useState("transparent");

  const changeClickHandler = () =>
    setChangeColor(changeColor === "transparent" ? "purple" : "transparent");

  return (
    <div className="flex-column">
      <h1>change Background Color</h1>
      <p style={{ backgroundColor: `${changeColor}` }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, ipsam!
      </p>
      <button onClick={changeClickHandler}>Change Color Of Text</button>
    </div>
  );
};
