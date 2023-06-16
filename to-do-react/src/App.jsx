import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem("to-doItems")) || []
  );
  const [input, setInput] = useState("");

  useEffect(() => {
    localStorage.setItem("to-doItems", JSON.stringify(items));
  }, [items]);

  return (
    <div id="app">
      <h1>My Todo 🗒️</h1>

      <div class="container">
        <form>
          <h2>Add Item</h2>
          <input
            type="text"
            id="title"
            placeholder="Title"
            class="form-control"
            autocomplete="off"
            onChange={(e) => {
              setInput(e.target.value);
            }}
            value={input}
          />
          <button
            onClick={(e) => {
              e.preventDefault();
              if (!input) {
                alert("Value cannot be empty.");
                return;
              }
              setInput("");
              setItems([...items, input]);
            }}
          >
            Add
          </button>
        </form>

        <div class="items">
          <h2>My Items</h2>
          <ol>
            {items.map((item, index) => (
              <li key={`item${index}`}>
                <h3>{item}</h3>
                <button
                  className="delete"
                  onClick={() => {
                    const newItems = items.filter((item, i) => index !== i);
                    alert("Are you sure you want to delete this item?");
                    setItems(newItems);
                  }}
                ></button>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}

export default App;
