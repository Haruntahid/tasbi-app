import "./App.css";
import TasbiBox from "./TasbiBox";
import React, { useState } from "react";

function App() {
  const [tasbiBoxes, setTasbiBoxes] = useState([
    { id: 1, title: "Alhamdulillah", count: 33 },
    { id: 2, title: "SubhanAllah", count: 33 },
    { id: 3, title: "AllahuAkbar", count: 34 },
  ]);
  const handleTasbiBoxClick = (id) => {
    setTasbiBoxes((prevBoxes) =>
      prevBoxes.map((box) =>
        box.id === id ? { ...box, count: box.count - 1 } : box
      )
    );
  };
  return (
    <>
      <h1 style={{ textAlign: "center", color: "#A2A2A1FF" }}>
        Your Daily Tasks
      </h1>
      {tasbiBoxes.map((box) => (
        <TasbiBox
          key={box.id}
          title={box.title}
          count={box.count}
          onClick={() => handleTasbiBoxClick(box.id)}
        />
      ))}
    </>
  );
}

export default App;
