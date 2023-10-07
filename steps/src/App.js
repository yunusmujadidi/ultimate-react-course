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
            <Button bgColor="#7950F2" textColor="#fff" onClick={handlePrevious}>
              <span>Previous</span>
            </Button>
            <Button bgColor="#7950F2" textColor="#fff" onClick={handleNext}>
              <span>Next</span>
            </Button>
          </div>
        </div>
      )}
    </>
  );
}

function Button({ bgColor, textColor, onClick, children }) {
  return (
    <button
      style={{ backgroundColor: bgColor, color: textColor }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default App;
