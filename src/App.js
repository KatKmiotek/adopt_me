import React from "react";
import Pet from "./components/Pet";
import "./App.css";

function App() {
  return (
    <div>
      <h1>Adopt me!</h1>
      <Pet name="Misia" animal="Dog" breed="fox"></Pet>
      <Pet name="Karob" animal="Dog" breed="squirel"></Pet>
      <Pet name="Sasza" animal="Cat" breed="mixed"></Pet>
    </div>
  );
}

export default App;
