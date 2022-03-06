import React, { useState } from "react";
import "./App.css";

export const PasswordMatch = () => {
  /*     ex2: password match#
  Any signup form, password reset form has this functionality. Take two passwords from user. Show error only if both passwords don't match. */
  const [inputOne, setInputOne] = useState("");
  const [inputTwo, setInputTwo] = useState("");
  const [msg, setMsg] = useState("");

  const changeHandler = (e) => {
    setInputTwo(e.target.value);
    inputOne === e.target.value ? setMsg("Success") : setMsg("Error");
    if (e.target.value === "") setMsg("");
  };

  return (
    <>
      <h1>Pass Check</h1>
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
      <span>{msg}</span>
    </>
  );
};
