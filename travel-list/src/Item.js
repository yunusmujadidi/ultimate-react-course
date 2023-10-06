export function Item({ item, onDeleteItem, onToggleItem }) {
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
