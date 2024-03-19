
import React from "react";
import { BrowserRouter } from "react-router-dom";
import './App.css';
import Home from "./Pages/Home/Home";


function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Home />
    </BrowserRouter>
  );
}

export default App;
