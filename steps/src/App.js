import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
  "Retire early 🏖️",
  "Enjoy life 🎉",
];

function App() {
  const [step, setStep] = useState(1);
  const [IsOpen, setIsOpen] = useState(true);
  function handlePrevious() {
    if (step > 1) setStep((s) => s - 1); //setStep use arrow function to get the previous value of step
  }
  function handleNext() {
    if (step < 5) {
      setStep((s) => s + 1);
    }
  }

  console.log(step);
  return (
    <>
      <button className="close" onClick={() => setIsOpen(!IsOpen)}>
        &times;
      </button>
      {IsOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
            <div className={step >= 4 ? "active" : ""}>4</div>
            <div className={step >= 5 ? "active" : ""}>5</div>
          </div>

          <div className="content">
            <p className="message">
              Step {step} : {messages[step - 1]}
            </p>
          </div>

          <div className="buttons">
            <button
              className="button1"
              style={{ backgroundColor: "#7950F2", color: "#fff" }}
              onClick={handlePrevious}
            >
              Previous
            </button>
            <button
              className="button2"
              style={{ backgroundColor: "#7950F2", color: "#fff" }}
              onClick={handleNext}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
