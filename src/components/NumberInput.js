import React from "react";
import "./NumberInput.css";

const NumberInput = ({
  title,
  placeholder,
  icon,
  error,
  ...otherProps
}) => {
  return (
    <div className="number-input">
      <div className="title-container">
        <label htmlFor="number-input" className="title"> {title} </label>
        <label htmlFor="number-input" className="error"> {error} </label>
      </div>
      <div className="input-container">
        <img src={icon} alt="icon" width={13} />
        <input
          type="number"
          placeholder={placeholder}
          className={`number-input-field ${error ? "error" : ""}`}
          min={0}
          {...otherProps}
        />
      </div>
    </div>
  );
};

export default NumberInput;
