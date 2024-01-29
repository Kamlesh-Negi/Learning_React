import { useState } from "react";

function Counter(){
console.log("render counter");

const [number, setNumber] = useState(0);

function handleClick(e){
  e.stopPropagation();
  // will not update the number 3 times on a single click because state updates in a batch
  setNumber(number + 1);
  setNumber(number + 1);
  setNumber(number + 1);
  setNumber(number + 1);

  // it will update the number 3 times on a single click using the functional update form of setNumber that takes the previous state (prevnumber) as an argument and returns the updated state.
  
  setNumber((prevnumber) => prevnumber + 1);
  setNumber((prevnumber) => prevnumber + 1);
  setNumber((prevnumber) => prevnumber + 1);

  console.log(number);
}
return (
  <>
    <h1 style={{color:"white"}}>{number}</h1>
    <button onClick={handleClick}>Add</button>
  </>
);
}

export default Counter;