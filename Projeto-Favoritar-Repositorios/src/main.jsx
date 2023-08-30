import React from "react";
import ReactDOM from "react-dom/client";
import Routes from "./Routes.jsx";
import GlobalStyle from "./Styles/Global.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalStyle />
    <Routes />
  </React.StrictMode>
);
