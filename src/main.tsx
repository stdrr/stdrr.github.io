import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./components/Home";
import "./index.css"; // Tailwind styles

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
);