import React from "react";
import "./TipButtons.css";

function TipButtons({ tip, setTip }) {
  const handleCustomTip = (e) => {
    const value = Number(e.target.value);
    if (value < 0) {
      setTip(0);
    } else if (value > 100) {
      setTip(100);
    } else {
      setTip(value);
    }
  };
  return (
    <div className="Tip-buttons">
      <label className="Title">Select Tip %</label>
      <div className="Buttons">
        <button
          className={`Button ${tip === 5 ? "active" : ""}`}
          onClick={() => setTip(5)}
        >
          5%
        </button>
        <button
          className={`Button ${tip === 10 ? "active" : ""}`}
          onClick={() => setTip(10)}
        >
          10%
        </button>
        <button
          className={`Button ${tip === 15 ? "active" : ""}`}
          onClick={() => setTip(15)}
        >
          15%
        </button>
        <button
          className={`Button ${tip === 25 ? "active" : ""}`}
          onClick={() => setTip(25)}
        >
          25%
        </button>
        <button
          className={`Button ${tip === 50 ? "active" : ""}`}
          onClick={() => setTip(50)}
        >
          50%
        </button>
        <input
          type="number"
          min={0}
          max={100}
          className="Custom"
          placeholder="Custom"
          value={tip === 0 ? "" : tip}
          onChange={handleCustomTip}
        />
      </div>
    </div>
  );
}

export default TipButtons;
