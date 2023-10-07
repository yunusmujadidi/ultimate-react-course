import { useState } from "react";

export default function App() {
  const [bill, setBill] = useState("");
  const [percentage1, setPercentage1] = useState(0);
  const [percentage2, setPercentage2] = useState(0);
  return (
    <div className="App">
      <Bill billing={bill} setBilling={setBill} />
      <SelectPercentage percentage={percentage1} setPercentage={setPercentage1}>
        How did tou like the service?
      </SelectPercentage>
      <SelectPercentage percentage={percentage2} setPercentage={setPercentage2}>
        How did tour friend like the service?
      </SelectPercentage>
      <Total
        billing={bill}
        percentage1={percentage1}
        percentage2={percentage2}
      />
      <Reset />
    </div>
  );
}

function Bill({ billing, setBilling }) {
  return (
    <form>
      <h1>How much was the bill?</h1>
      <span>
        <input
          type="text"
          value={billing}
          onChange={(e) => setBilling(Number(e.target.value))}
          placeholder="Rp:...."
        ></input>
      </span>
    </form>
  );
}

function SelectPercentage({ children, percentage, setPercentage }) {
  return (
    <form className="addd-form">
      <h1>{children}</h1>
      <select
        value={percentage}
        onChange={(e) => setPercentage(Number(e.target.value))}
      >
        <option value="0">0%</option>
        <option value="5">5%</option>
        <option value="10">10%</option>
        <option value="20">20%</option>
      </select>
    </form>
  );
}

function Total({ billing, percentage1, percentage2 }) {
  const tips = billing * ((percentage1 + percentage2) / 2 / 100);
  const total = billing + tips;
  return (
    <h1>
      Total bill to pay Rp:{total.toLocaleString("id-ID")} (Rp.{" "}
      {billing.toLocaleString("id-ID")} + Rp.{tips.toLocaleString("id-ID")} )
    </h1>
  );
}

function Reset({ setBilling, setPercentage1, setPercentage2 }) {
  function handleReset() {
    setBilling("");
    setPercentage1(0);
    setPercentage2(0);
  }
  return (
    <form>
      <button onClick={handleReset}>Reset</button>
    </form>
  );
}
