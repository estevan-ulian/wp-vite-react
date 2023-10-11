import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { root } from "./wp-config/config.ts";
import "./styles/index.css";

ReactDOM.createRoot(root!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
