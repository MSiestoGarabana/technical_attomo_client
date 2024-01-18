import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProviderWrapper } from "./contexts/theme.context";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProviderWrapper>
      <Router>
        <App />
      </Router>
    </ThemeProviderWrapper>
  </React.StrictMode>
);
