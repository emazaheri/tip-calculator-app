import { useState } from "react";
import NumberInput from "./components/NumberInput";
import logo from "./assets/images/logo.svg";
import dollar from "./assets/images/icon-dollar.svg";
import person from "./assets/images/icon-person.svg";
import "./App.css";

function App() {
  const [bill, setBill] = useState(0);
  const [numPeople, setNumPeople] = useState(0);
  const [error, setError] = useState("");

  const handleBillChange = (e) => {
    setBill(Number(e.target.value));
  };

  const handleNumPeopleChange = (e) => {
    const value = Number(e.target.value);
    if (value < 0) {
      setNumPeople(0);
    }
    setNumPeople(value);
  };

  const validateNumPeople = () => {
    if (numPeople === 0) {
      setError("Can't be zero");
      setNumPeople(0);
    } else {
      setError("");
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="Card">
          <div className="Input-section">
            <NumberInput
              title="Bill"
              placeholder="0"
              icon={dollar}
              value={bill.toString()}
              onChange={handleBillChange}
            />
            <NumberInput
              title="Number of People"
              placeholder="0"
              error={error}
              icon={person}
              value={numPeople.toString()}
              onChange={handleNumPeopleChange}
              onBlur={validateNumPeople}
            />
          </div>
          <Card className="Cyan"></Card>
        </Card>
      </header>
    </div>
  );
}

export default App;
