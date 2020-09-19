import React from "react";
import logo from "./logo.png";
import "./App.css";
import Profile from "./components/Profile";

function App() {
  return (
    <div>
      <header>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Profile />
    </div>
  );
}

export default App;