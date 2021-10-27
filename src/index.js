import React from "react";
import ReactDOM from "react-dom";

import ContextProviders from "contexts";
import App from "./App";
import "./global.css";

ReactDOM.render(
  <ContextProviders>
    <App />
  </ContextProviders>,
  document.getElementById("root")
);
