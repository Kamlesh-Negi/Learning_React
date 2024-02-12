import React from "react";
import ReactDOM from "react-dom/client";



const heading = React.createElement("h1",{id: "heading"}, "Hello Form React")
console.log("heading is an ",typeof heading)

const root = ReactDOM.createRoot(heading,document.getElementById("root")).render