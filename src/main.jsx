import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import "@fontsource/roboto";
import "@fontsource/outfit";

const rootElement = document.getElementById("root");

if (rootElement) {
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    rootElement
  );
} else {
  console.error("Root element not found!");
}