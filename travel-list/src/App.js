import "./App.css";
import { useState } from "react";

function App() {
  const [items, setItems] = useState([]);

  function handleNewItem(item) {
    setItems((items) => [...items, item]);
  }
  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id !== id ? item : { ...item, packed: !item.packed }
      )
    );
  }

  return (
    <div className="App">
      <Logo />
      <Form onAddItems={handleNewItem} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
      />
      <Stats items={items} />
    </div>
  );
}

function Logo() {
  return (
    <div>
      <h1>PACKING LIST</h1>
    </div>
  );
}

function Form({ onAddItems }) {
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

function PackingList({ items, onDeleteItem, onToggleItem }) {
  const [sort, setSort] = useState("input");

  let sortedItems;

  if (sort === "name") sortedItems = items;
  if (sort === "input")
    sortedItems = items.slice().sort((a, b) => a.name.localeCompare(b.name));
  if (sort === "packed")
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));

  return (
    <div className="list">
      <ul className="list">
        {sortedItems.map((item) => (
          <Item
            key={item.id}
            item={item}
            onDeleteItem={onDeleteItem}
            onToggleItem={onToggleItem}
          />
        ))}
      </ul>
      <div>
        <select onChange={(e) => setSort(e.target.value)}>
          <option value="input">Sort by input order</option>
          <option value="name">Sort by name</option>
          <option value="packed">Sort by packed</option>
        </select>
      </div>
    </div>
  );
}

function Item({ item, onDeleteItem, onToggleItem }) {
  return (
    <li>
      <input
        type="checkbox"
        value={item.packed}
        onChange={() => {
          onToggleItem(item.id);
        }}
      />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} - {item.name}
      </span>
      <button
        onClick={() => {
          onDeleteItem(item.id);
        }}
        className="Item-remove"
      >
        ❌
      </button>
    </li>
  );
}

function Stats({ items }) {
  const numItems = items.length;
  const packedItems = items.filter((item) => item.packed).length;
  const percentage = Math.round((packedItems / numItems) * 100);

  if (!numItems)
    return (
      <div className="footer">
        <footer className="stats">
          <em>Nothing packed yet</em>
        </footer>
      </div>
    );

  return (
    <div className="footer">
      <footer className="stats">
        {percentage === 100 ? (
          "Everything Packed!"
        ) : (
          <em>
            You have {numItems} items on your list, and you already packed{" "}
            {packedItems} {percentage ? `(${percentage}%)` : ""}
          </em>
        )}
      </footer>
    </div>
  );
}
export default App;
