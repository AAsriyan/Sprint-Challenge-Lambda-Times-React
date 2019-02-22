import React from "react";
import authenticate from "./components/auth/authenticate";
import Login from "./components/auth/Login";
import AppHolder from "./components/AppHolder";
import "./CSS/index.css";

const Visible = authenticate(AppHolder)(Login);

const App = () => {
  return (
    <div className="App">
      <Visible />
    </div>
  );
};

export default App;
