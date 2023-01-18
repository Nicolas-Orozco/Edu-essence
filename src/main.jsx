import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { useEffect } from "react";
import { themeChange } from "theme-change";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
