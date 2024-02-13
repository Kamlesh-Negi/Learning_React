const heading = React.createElement(
  "h1", // tag
  { id: "heading" }, // 2nd parameter is object
  "Hello World from React!" // 3rd parameter is children
);

/* creating nested  structure

<div id = "parent">
    <div id =" child"
        <h1> Neseted Structure </h1>
    </div>
</div>

*/

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    React.createElement("h1", { id: "heading" }, "I'm an h1 tag")
  )
);

/* creating nested structure havind siblings [=> will pass the children in array]

<div id = "parent">
    <div id =" child"
        <h1> I'm heading 1 </h1>
        <h2> I'm heading 2 </h2>
    </div>
</div>

*/

const parent2 = React.createElement(
  "div",
  { id: "parent2" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", { id: "heading1" }, "I'm Heading1"),
    React.createElement("h2", { id: "heading2" }, "I'm Heading2"),
  ])
);

/* create more than one children

    <div id="parent">
      <div id=" child1"
              <h1> I'm heading 1 </h1>
            <h2> I'm heading 2 </h2>
      </div>
      <div id=" child2"
            <h1> I'm heading 3 </h1>
            <h2> I'm heading 4 </h2>
    </div>
    </div >

 */

const parent3 = React.createElement("div", { id: "parent3" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", { id: "heading1" }, "I'm Heading1"),
    React.createElement("h2", { id: "heading2" }, "I'm Heading2"),
  ]),React.createElement("div", { id: "child2" }, [
    React.createElement("h3", { id: "heading3" }, "I'm Heading3"),
    React.createElement("h4", { id: "heading4" }, "I'm Heading4"),
  ]),
]);



// console.log(heading)        // object
const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);
// root.render(parent);
// root.render(parent2);
root.render(parent3);

