import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { I18nextProvider } from "react-i18next";
import i18n from "../i18n.config.js";

import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18n}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </I18nextProvider>
  </React.StrictMode>
);
