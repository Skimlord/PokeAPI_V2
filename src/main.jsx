import React from "react";
import ReactDOM from "react-dom/client";
import MainLayout from "./layouts/MainLayout";
import "./index.css";

import { BrowserRouter } from "react-router-dom";
import { I18nextProvider } from "react-i18next";

import i18n from "/src/config/i18n";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18n}>
      <BrowserRouter>
        <MainLayout />
      </BrowserRouter>
    </I18nextProvider>
  </React.StrictMode>
);
