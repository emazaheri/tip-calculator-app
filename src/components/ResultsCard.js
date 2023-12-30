import Card from "./Card";
import "./ResultsCard.css";

const ResultsCard = ({ bill, tip, numPeople, reset }) => {
  const tipPerPerson = ((bill * tip) / 100 / numPeople).toFixed(2);
  const totalPerPerson = ((bill + (bill * tip) / 100) / numPeople).toFixed(2);
  return (
    <div className="Result-card">
      <div className="Results">
        <div className="Result-row">
          <div className="Title-container">
            <label className="Result-title">Tip Amount</label>
            <label className="Result-subtitle">/ person</label>
          </div>
          <label className="Amount-value">
            ${tipPerPerson === "NaN" || numPeople === 0 ? "0.00" : tipPerPerson}
          </label>
        </div>
        <div className="Result-row">
          <div className="Title-container">
            <label className="Result-title">Total</label>
            <label className="Result-subtitle">/ person</label>
          </div>
          <label className="Amount-value">
            $
            {totalPerPerson === "NaN" || numPeople === 0
              ? "0.00"
              : totalPerPerson}
          </label>
        </div>
      </div>
      <button
        className="Reset-button"
        disabled={bill === 0 && tip === 0}
        onClick={reset}
      >
        RESET
      </button>
    </div>
  );
};

export default ResultsCard;
