import React, { useEffect, useState } from "react";
import "./App.css";

const colors = [
  "crimson",
  "deeppink",
  "deepskyblue",
  "gold",
  "lightgrey",
  "pink",
  "orange",
  "mediumturquoise",
  "lemonchiffon",
  "indigo",
];

const App = () => {
  const randomIndex = Math.floor(Math.random() * colors.length);
  useEffect(() => {
    document.body.style.backgroundColor = colors[randomIndex];
  }, []);

  const [colorIndex, setColorIndex] = useState(randomIndex);
  const [active, setActive] = useState(false);

  return (
    <div id="app">
      <h1 id="current-color">
        {colors[colorIndex].charAt(0).toUpperCase() +
          colors[colorIndex].slice(1)}
      </h1>
      <div className="colors">
        {colors.map((color, index) => (
          <button
            key={`color-${index}`}
            style={{ backgroundColor: color }}
            onClick={() => {
              document.body.style.backgroundColor = colors[index];
              setColorIndex(index);
              setActive(true);
            }}
            className={active && colorIndex === index ? "active" : ""}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default App;
