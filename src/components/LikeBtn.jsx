import React from "react";
import { useState } from "react";
import "../App.css";

export const LikeBtn = () => {
  const [item, setItem] = useState([]);

  const [like, setLike] = useState(0);
  return (
    <div>
      <p>render a list every item in the list should have a like button</p>
      <h1>List</h1>
      <ul>
        <li>
          {item} <span>👍 {like}</span>
        </li>
      </ul>
    </div>
  );
};
