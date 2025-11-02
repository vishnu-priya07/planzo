import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// Global CSS
import "./index.css";

// React Router (already used in App.js)
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);