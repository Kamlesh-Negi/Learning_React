import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header"
import Body from "./components/Body";



// Restaurant List



//  to find the index of an object in the array of object

// const index = resList.findIndex((object) => {
//   return object.info.name === "KFC";
// });
// console.log(index);



const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
