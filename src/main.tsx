import React from "react";
import ReactDOM from "react-dom/client";
import Carriage from "./components/carriage";

console.log("main");

const rootElement = document.querySelector("#train-car-container");
if (rootElement) {
    const root = ReactDOM.createRoot(rootElement);
    root.render(<Carriage width={5} height={15} />);
}