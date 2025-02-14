import React from "react";
import ReactDOM from "react-dom/client";
import Carriage from "./components/carriage";

console.log("main");

const rootElement = document.querySelector("section");
if (rootElement) {
    const root = ReactDOM.createRoot(rootElement);
    root.render(<Carriage></Carriage>);
}