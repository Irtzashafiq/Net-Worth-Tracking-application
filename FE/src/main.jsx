import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import BaseContext from "./context/baseContext.jsx";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <BaseContext>
      <App />
    </BaseContext>
  </BrowserRouter>
);
