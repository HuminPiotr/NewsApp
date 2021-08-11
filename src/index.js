require("file-loader?name=[name].[ext]!./index.html");
import React from "react";
import ReactDOM from "react-dom";
import Root from "./Root";
import "./styles/main.scss";

ReactDOM.render(<Root />, document.getElementById("root"));
