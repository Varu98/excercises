import React, { useState } from "react";
import "../App.css";

export const DisableSubmit = () => {
  /* Add a submit button to password change field.
Disable submit button if passwords don't match
Clicking on submit should console the password field */

  const [inputOne, setInputOne] = useState("");
  const [inputTwo, setInputTwo] = useState("");
  const [btnStyle, setBtnStyle] = useState({
    backgroundColor: "grey",
    color: "black",
  });

  const changeHandler = (e) => {
    setInputTwo(e.target.value);
    if (inputOne === e.target.value) {
      setBtnStyle((e.style.backgroundColor = "transparent"));
      setBtnStyle((e.style.color = "white"));
    }
  };

  return (
    <div className="flex-column">
      <h1>Disable Submit</h1>
      <span>Enter Password</span>
      <input
        onChange={(e) => setInputOne(e.target.value)}
        value={inputOne}
        name="PassOne"
        type="password"
      />
      <span>Re-Enter Password</span>
      <input
        onChange={changeHandler}
        value={inputTwo}
        name="PassTwo"
        type="password"
      />
      <button style={btnStyle} type="submit">
        Submit
      </button>
    </div>
  );
};
