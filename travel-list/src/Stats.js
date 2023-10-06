export default function Stats({ items }) {
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
