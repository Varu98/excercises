import React, { useState } from "react";
import "./App.css";
import "./TwitterCharCounter.css";

export const TwitterCharCounter = () => {
  /* ex1: character counter (Twitter)#
     See the Twitter post component. It gives you an indicator of the character count. Replicate that behavior. */

  const [wordCount, setWordCount] = useState(50);

  const countHandler = (e) => {
    setWordCount(() =>
      e.target.value.length === 0 ? 0 : e.target.value.length
    );
  };
  return (
    <div className="flex-column">
      <h1>Twitter Word Limit Counter</h1>
      <div className="counter_wrapper">
        <textarea
          onKeyUp={countHandler}
          name=""
          id=""
          cols="30"
          rows="10"
        ></textarea>
        <span className="span_counter">{wordCount}</span>
      </div>
    </div>
  );
};
