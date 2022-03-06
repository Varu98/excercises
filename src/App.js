import { useState } from "react";
import "./App.css";
import { ButtonOne } from "./ButtonOne";
import { AlphaNumericPassword } from "./components/AlphaNumericPassword";
import { ParaBgColor } from "./ParaBgColor";
import { PasswordMatch } from "./PasswordMatch";
import { TwitterCharCounter } from "./TwitterCharCounter";

function App() {
  return (
    <div className="App AppDoo">
      <h1>Thinking in React Exercises</h1>

      {/* <ButtonOne /> */}
      {/* <ParaBgColor /> */}
      {/* <TwitterCharCounter /> */}
      {/* <PasswordMatch /> */}
      <AlphaNumericPassword />
    </div>
  );
}

export default App;
