import React from "react";
import ReactDOM from "react-dom";

import IndecisionApp from "./components/IndecisionApp";
import "./styles/styles.scss";
import "normalize.css/normalize.css"

ReactDOM.render(
  <IndecisionApp options={["Lucario", "Riolu"]} />,
  document.getElementById("app")
);
