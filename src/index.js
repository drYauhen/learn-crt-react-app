import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

ReactDOM.render(
    <App cat={4} txt="this is a prop text" / >,
    document.getElementById("root")
);