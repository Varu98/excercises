import React, { useState } from "react";
import "./App.css";

export const TwitterCharCounter = () => {
  /* ex1: character counter (Twitter)#
     See the Twitter post component. It gives you an indicator of the character count. Replicate that behavior. */

  const [wordCount, setWordCount] = useState(0);
  return (
    <div className="flex-column">
      <h1>Twitter Word Limit Counter</h1>
      <textarea name="" id="" cols="30" rows="10"></textarea>
      <span>{wordCount}</span>
    </div>
  );
};
