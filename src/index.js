import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { CssBaseline, ThemeProvider } from "@mui/material"; // Importe o ThemeProvider
import { RestaurantProvider } from "./context/RestaurantContext";
import theme from "./theme"; // Importe o tema personalizado

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline /> 
      <RestaurantProvider>
        <App />
      </RestaurantProvider>
    </ThemeProvider>
  </React.StrictMode>
);