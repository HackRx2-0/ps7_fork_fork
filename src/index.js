import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { CssBaseline, ThemeProvider } from "@material-ui/core";
import theme from "./UI/Theme";
import { UIProvider } from "./Context/UIContext";

ReactDOM.render(
  <React.StrictMode>
    <UIProvider>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </UIProvider>
  </React.StrictMode>,
  document.getElementById("root"),
);
