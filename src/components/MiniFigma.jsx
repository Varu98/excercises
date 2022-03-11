import { useState } from "react";
import "./styles.css";

export function MiniFigma() {
  const [textSize, setTextSize] = useState(16);
  const [textFont, setTextFont] = useState("sans-serif");

  const increaseSize = () => {
    setTextSize((prev) => prev + 2);
  };

  const decreaseSize = () => {
    setTextSize((prev) => prev - 2);
  };

  const ChangeToMontserrat = () => {
    setTextFont("Montserrat");
  };
  const ChangeToRoboto = () => {
    setTextFont("Roboto");
  };

  const styleVariable = {
    fontSize: `${textSize}px`,
    fontFamily: `${textFont}`,
  };
  return (
    <div className="App">
      <h1> Mini Figma</h1>
      <h2>Designer Tool</h2>
      <p style={styleVariable}>This text will increase or decrease</p>
      <button onClick={increaseSize}>+</button>
      <button onClick={decreaseSize}>-</button>
      <button onClick={ChangeToMontserrat}>Montserrat</button>
      <button onClick={ChangeToRoboto}>Roboto</button>
      <div style={{ border: "2px dashed antiquewhite", marginTop: "2rem" }}>
        <h3>Copy the CSS Below To Use</h3>
        <p>
          {" "}
          @import
          url("https://fonts.googleapis.com/css2?family=Montserrat&family=Roboto&display=swap");
        </p>
        <p>{JSON.stringify(styleVariable, null, 6)}</p>
      </div>
    </div>
  );
}
