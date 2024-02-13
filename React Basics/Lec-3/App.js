import React from "react";
import { render } from "react-dom";
import ReactDOM from "react-dom/client";

// creating an element using React
const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello Form React"
);
console.log("heading is a type of ", typeof heading);

// JSX
const heading2 = <h2>Hello from JSX</h2>


console.log("heading is a type of", typeof heading2);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading2);