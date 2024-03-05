import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { StyleSheetManager } from "styled-components";
import isPropValid from "@emotion/is-prop-valid";
import GlobalStyle from "./components/GlobalStyle/index.js";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <StyleSheetManager shouldForwardProp={isPropValid}>
      <GlobalStyle />
      <App />
    </StyleSheetManager>
  </React.StrictMode>
);
