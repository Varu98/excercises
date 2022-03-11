import { useState } from "react";

export const ShowHidePassword = () => {
  const [displayText, setDisplayText] = useState(true);
  const [changeType, setChangeType] = useState(true);

  const clickHandler = () => {
    setDisplayText(!displayText);
    setChangeType(!changeType);
  };

  return (
    <div className="App">
      <h1>Show password</h1>
      <div className="flex-column">
        <input type={changeType ? "password" : "text"} name="" id="" />
        <button onClick={clickHandler}>
          {displayText ? "Show Password" : "Hide Password"}
        </button>
      </div>
    </div>
  );
};
