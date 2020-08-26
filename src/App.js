import React from "react";
import Pet from "./components/Pet";
import "./App.css";

const App = () => {
  return (
    <div>
      <h1>Adopt me!</h1>
      <Pet name="Misia" animal="Dog" breed="fox" />
      <Pet name="Karob" animal="Dog" breed="squirel" />
      <Pet name="Sasza" animal="Cat" breed="mixed" />
    </div>
  );
};

export default App;
