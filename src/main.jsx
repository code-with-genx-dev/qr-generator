import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PrimeReactProvider } from "primereact/api";

import "./qrcode.css";

// PrimeReact styles (important)
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

import Home from "./pages/Home";
import QrPage from "./pages/QrPage";
import Learn from "./pages/Learn";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <PrimeReactProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/qr" element={<QrPage />} />
          <Route path="/learn" element={<Learn />} />
        </Routes>
      </BrowserRouter>
    </PrimeReactProvider>
  </React.StrictMode>
);
