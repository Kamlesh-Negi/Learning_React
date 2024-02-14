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

// React Functional Component:

// Different ways of returning from a component 

// method 1
const HeadingComponent = () => {
    return <h1>A Functional Component</h1> 
}

// method 2
const HeadingComponent2 = () => <h2>A funtional component</h2>

//method 3
const MyComponent = () => (
  <div id="container"> 
    <h1 className="heading">Hello World!</h1>
    <p>This is a Multi-line Expression in MyComponent</p>
  </div>
);


// Rendering the HeadingComponent inside MyComponent

const HeadingComponentInsideMyComponent = () => (
  <div id="container">
    <h1 className="heading">Hello World!</h1>
    <p>This is a Multi-line Expression in MyComponent</p>
  <HeadingComponent/>
  </div>
);


// Putting a JavaScript variable inside JSX

 const number = 1000
 
 const MyComponentTwo = () => (
    <div id = "container">
    {heading2}
      {number}
    <h1>JavaScript expression</h1>
    <h2>{750*4}</h2>
    {<span>React Element here</span>}
    {MyComponent()}                            {/**We can call our functional component here like this also */}
    </div>
  );

console.log("heading is a type of", typeof heading2);
const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(heading2); 
//root.render(<HeadingComponent/>); 
//root.render(<MyComponent/>); 
//root.render(<HeadingComponentInsideMyComponent/>); 
root.render(<MyComponentTwo/>); 
