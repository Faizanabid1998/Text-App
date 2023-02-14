import React from "react";
import { useState } from "react";
export default function TextForm(props) {
  const [text, setText] = useState("");
  const handleClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleloClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <>
      <div className="container">
        <div className="mb-3">
          <h1> {props.heading} </h1>

          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="8"
            value={text}
            onChange={handleChange}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleClick}>
          Convert to uppercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleloClick}>
          Convert to lower case
        </button>
      </div>

      <div className="container">
        <h1 className="my-3">Summary</h1>
        <p>
          Your text has {text.split(" ").length} words and {text.length}{" "}
          characters
        </p>
        <p>minutes required to read: {0.008 * text.split(" ").length}</p>
        <h2>Preview</h2>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="8"
            value={text}
            onChange={handleChange}
          ></textarea>
        </div>
      </div>
    </>
  );
}
