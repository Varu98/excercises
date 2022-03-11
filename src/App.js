import React from "react";
import { useState } from "react";
import { ButtonOne } from "./ButtonOne";
import { AlphaNumericPassword } from "./components/AlphaNumericPassword";
import { DisableSubmit } from "./components/DisableSubmit";
import { LikeBtn } from "./components/LikeBtn";
import { ParaBgColor } from "./ParaBgColor";
import { PasswordMatch } from "./PasswordMatch";
import { TwitterCharCounter } from "./TwitterCharCounter";
import "./App.css";
import { ShowHidePassword } from "./components/ShowHidePassword";

function App() {
  return (
    <div className="App AppDoo">
      <h1>Thinking in React Exercises</h1>

      {/* <ButtonOne /> */}
      {/* <ParaBgColor /> */}
      {/* <TwitterCharCounter /> */}
      {/* <PasswordMatch /> */}
      {/* <AlphaNumericPassword /> */}
      {/* <DisableSubmit /> */}
      {/* <LikeBtn /> */}
      <ShowHidePassword />
    </div>
  );
}

export default App;
