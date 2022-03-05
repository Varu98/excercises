import { React, useState } from "react";

export const ButtonOne = () => {
  const [increase, setIncrease] = useState(32);

  const increaseClickHandler = () => {
    setIncrease((e) => (e = 32));
  };

  const decreaseClickHandler = () => {
    setIncrease((e) => (e = 16));
  };

  return (
    <>
      <h2 style={{ fontSize: `${increase}px` }}> Change size on btn click </h2>
      <button onClick={increaseClickHandler}>+</button>
      <button onClick={decreaseClickHandler}>-</button>
    </>
  );
};
