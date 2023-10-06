import { useState } from "react";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <h1>Date Counter</h1>
      <Counter />
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(1);
  const [step, setStep] = useState(0);
  // const [date, setDate] = useState(new Date());
  const date = new Date();
  date.setDate(date.getDate() + step);

  function handlePrevious() {
    setStep((s) => s - count);
  }
  function handleNext() {
    setStep((s) => s + count);
  }

  function handleCountPrevious() {
    setCount((c) => c - 1);
  }
  function handleCountNext() {
    setCount((c) => c + 1);
  }

  const resetHandlerButton = (
    <button
      onClick={() => {
        setStep(0);
        setCount(1);
      }}
    >
      Reset
    </button>
  );

  // function handleDatePrevious() {
  //   const newDate = new Date(date);
  //   newDate.setDate(date.getDate() - 1);
  //   setDate(newDate);
  // }

  // function handleDateNext() {
  //   const newDate = new Date(date);
  //   newDate.setDate(date.getDate() + 1);
  //   setDate(newDate);
  // }
  // function additionDatePrevious() {
  //   const newDate = new Date(date);
  //   newDate.setDate(date.getDate() - step);
  //   setDate(newDate);
  // }

  // function additionDateNext() {
  //   const newDate = new Date(date);
  //   newDate.setDate(date.getDate() + step);
  //   setDate(newDate);
  // }

  return (
    <>
      <div>
        {" "}
        <input
          type="range"
          min="0"
          max="100"
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
        />
      </div>

      <button onClick={handlePrevious}>-</button>
      <span>Count:{step}</span>
      <button onClick={handleNext}>+</button>

      <button onClick={handleCountPrevious}>-</button>

      <input
        type="text"
        value={count}
        onChange={(e) => setCount(Number(e.target.value))}
      />
      <button onClick={handleCountNext}>+</button>
      <h1>
        {step === 0
          ? "Today is "
          : step > 0
          ? `${step} days from today is`
          : `${Math.abs(step)} days ago was `}
      </h1>
      <h1>{date.toDateString()}</h1>

      <button>{resetHandlerButton}</button>
    </>
  );
}
