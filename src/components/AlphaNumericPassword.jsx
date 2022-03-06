import React, { useState } from "react";

export const AlphaNumericPassword = () => {
  /* ex3: alphanumeric password#
Password should contain a number. Show error if user misses character.
 */

  const initialState = {
    passOne: "",
  };

  const [values, setValues] = useState(initialState);
  const [error, setError] = useState(false);

  function noon(e) {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
    const separateValue = value.split("");

    const extractNumber = separateValue.reduce(
      (numberArray, current) =>
        parseInt(current) ? [...numberArray, current] : [...numberArray],
      []
    );
    extractNumber.length === 0 ? setError(true) : setError(false);
    console.log(extractNumber);
  }

  return (
    <div className="flex-column">
      <h1>AlphaNumeric Password</h1>
      <p>
        password should contain numeric value also else error message will be
        shown.
      </p>
      <label htmlFor="">
        <h2> Enter Password</h2>
        <input
          onChange={noon}
          type="password"
          value={values.passOne}
          name="passOne"
          id=""
        />
      </label>
      {error && <span>Error</span>}
    </div>
  );
};
