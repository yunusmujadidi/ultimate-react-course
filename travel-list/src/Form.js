import { useState } from "react";

export default function Form({ onAddItems }) {
  //control element state using onChange event, useState hook, and value attribute
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(event) {
    if (!name) {
      event.preventDefault(); // Prevent the form from submitting
      return; // Exit the function early if 'name' is empty
    }
    const newItem = {
      name,
      quantity,
      packed: false,
      id: Date.now(),
    };

    onAddItems(newItem);
    setName("");
    setQuantity(1);

    event.preventDefault();
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
