import "./App.css";
import { useState } from "react";

const initialItems = [
  {
    id: 1,
    name: "Socks",
    quantity: 2,
    packed: true,
  },
  {
    id: 2,
    name: "Underwear",
    quantity: 3,
    packed: false,
  },
  {
    id: 3,
    name: "Shirts",
    quantity: 4,
    packed: false,
  },
];
function App() {
  return (
    <div className="App">
      <Logo />
      <Form />
      <PackingList />
      <Stats />
    </div>
  );
}

function Logo() {
  return (
    <div className="Logo">
      <h1>PACKING LIST</h1>
    </div>
  );
}

function Form() {
  //control element state using onChange event, useState hook, and value attribute
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(event) {
    if (!name) return;
    const newItem = {
      name,
      quantity,
      packed: false,
      id: Date.now(),
    };
    console.log(newItem);
    setName("");
    setQuantity(1);

    event.preventDefault();
    console.log(event);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you want for your trip?</h3>
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => (
          <option key={i} value={i + 1}>
            {i + 1}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="item..."
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}

function PackingList() {
  return (
    <ul className="list">
      {initialItems.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </ul>
  );
}
function Item({ item }) {
  return (
    <li>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} - {item.name}
      </span>
      <button className="Item-remove">X</button>
    </li>
  );
}

function Stats() {
  return (
    <div className="footer">
      <footer className="stats">
        <em>You have X items on your list, and you already packed X (X%) </em>
      </footer>
    </div>
  );
}
export default App;
