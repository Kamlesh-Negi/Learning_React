# Props
**Props stands for properties.**  
* Props are arguments passed into React components.

* They are like function arguments in JavaScript and attributes in HTML.

* You can think of them as a way to send data into a component.

![Props](Props.jpg)

### Passing Props:
*Syntax:* To send props into a component, use the same syntax as HTML attributes.  
Example: Let’s say we have a Car component. We can add a “brand” attribute to it like this:
```
const myElement = <Car brand="Ford" />;
```
The Car component then receives the argument as a props object:
```
function Car(props) {
  return <h2>I am a {props.brand}!</h2>;
}
```

### Data Flow:
* ***Unidirectional:*** Data with props flows from parent to child components.  
* ***Consistent Interfaces:*** Props allow you to create consistent interfaces across the component hierarchy.  
* ***Passing Different Types of Data:***
If you have a variable to send (not just a string), enclose the variable name in curly brackets:
```
const carName = "Ford";
return (
  <>
    <h1>Who lives in my garage?</h1>
    <Car brand={carName} />
  </>
);
```

You can also pass an object:
```
const carInfo = { name: "Ford", model: "Mustang" };
return (
  <>
    <h1>Who lives in my garage?</h1>
    <Car brand={carInfo} />
  </>
);
```

* We can also pass props using *destructuring*.    
* Destructuring can be particularly useful when a component receives multiple props, as it allows you to explicitly specify which values you want to use.


***## Note:*** React props are read-only! Attempting to change their value will result in an error.

So, when you have to dynamically passing some data to a component you pass it as a prop

## Folder Structure of the Project

We should keep our project files in an organised way so that it is easy for a new developer to understand the project easily.  
It is not mandatory to keep separate folders and files but a good practice to have these. Some recommended practice are as follow:

  * We should keep our source files in ``src`` folder
  * we should keep our components in ``components`` folder under *src*
  * we should keep our hard coded data like some cdn links, Logo urls, API endpoints, configuration settings, etc in ``constants`` folder.  
    *  We can use some other folder name also like ``utils``, ``data``, ``common``, etc. instead of ``constants``
  * Make sure your components file name should start with a uppercase. For example ```MyComponent.js```
  * Make sure your hard-coded data file's name should start with a lowercase

### export and import
``export`` and ``import`` are used to link these components and data files together to make the app work.
* First export the component then import it in the file where it is used.

Syntax for exporting a file/component:
```
export default component_name;
```

Syntax for importing a file/component:
```
import {component_name} from "path_to_the_component";
```

NOTE: There can only be one default in each component/data file.  

So, to export multiple variables/functions from a single file, i.e., for named exports:
```
export {variable1, variable2, variable3}
 ```
similarily for importing these:
```
import {variable1, variable2, variable3} from "path_to_these_files"
 ```

example:
```
const cdn_URL = "some_CDN_URL_here"
const LOGO_URL = "some_LOGO_URL_here"

const MyComponent = () => {
  return (
    <div>
      <h1>Hello</h1>
      <p>This is a paragraph.</p>
    </div>
  );
};

export {cdn_URL, LOGO_URL, MyComponent}
```
```
import {cdn_URL, LOGO_URL, MyComponent}

const MyComponent2 = () = {
  return (
    <>
    <div> 
    <img src = {cdn_URL}</>
    <MyComponent />
  )
}
export default MycComponent2;
```

## Hooks
In React, hooks are functions that allow you to use state and other React features in functional components.
* They were introduced in React 16.8 to enable functional components to manage local component state and perform side effects
* Some hooks are:
  * **useState**: Allows functional components to manage state. It returns an array with two elements: the current state value and a function that lets you update it.
  ```
  const [count,setCount] = useState(0)
  ```
  *Whenever a state variable updates, React will re-render our component.*

  * **useEffect**: Enables performing side effects in functional components, such as data fetching, subscriptions, or manually changing the DOM. It runs after every render.
```
useEffect(() => {
  // Side effect code here
}, [dependencies]);

```

## How React works?
Behind the scene react uses Reconciliation and diffing algorithm to make our app fast

When our state changes, react make a *virtual DOM* which is like a representation of an actual DOM
