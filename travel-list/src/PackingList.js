import { useState } from "react";
import { Item } from "./Item";

export default function PackingList({
  items,
  onDeleteItem,
  onToggleItem,
  onClearItems,
}) {
  const [sort, setSort] = useState("input");

  let sortedItems;

  if (sort === "input") sortedItems = items;
  if (sort === "name")
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
        <button
          onClick={(e) => {
            e.preventDefault();
            onClearItems();
          }}
        >
          Clear list
        </button>
      </div>
    </div>
  );
}
