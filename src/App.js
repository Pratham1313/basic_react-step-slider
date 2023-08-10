import "./styles.css";
import { useState } from "react";

export default function App() {
  const [step, setStep] = useState(1);
  function previ() {
    if (step > 1) setStep(step - 1);
  }
  function nexi() {
    if (step < 3) setStep(step + 1);
  }

  return (
    <div className="App">
      <div className="container">
        <div className="buttons">
          <div className={step >= 1 ? "active" : ""}>1</div>
          <div className={step >= 2 ? "active" : ""}>2</div>
          <div className={step >= 3 ? "active" : ""}>3</div>
        </div>
        <div>
          <p>{message[step - 1]}</p>
        </div>
        <div className="butt">
          <button className="previous" onClick={previ}>
            Previous
          </button>
          <button className="next" onClick={nexi}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

const message = ["hello", "bye", "bola"];
