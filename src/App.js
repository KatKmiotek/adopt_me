import React from "react";
import SearchParams from "./components/SearchParams";
import { Router, Link } from "@reach/router";
import Details from "./Details";
import "./App.css";

const App = () => {
  return (
    <div>
      <header>
        <Link to="/">Adopt me!</Link>
      </header>
      <Router>
        <SearchParams path="/" />
        <Details path="/details/:id" />
      </Router>
    </div>
  );
};

export default App;
