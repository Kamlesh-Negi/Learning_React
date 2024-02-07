
  we can use two cdn links to add two libraries(React and React-DOM) into our webpages:   
            
*   React library - This will add react library to the webpage. This React library helps in developing *components-based UI*.

        1.  <script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>


*   ReactDOM library - It helps in rendering the *react components* into a webpage

         2. <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>


       // we are using these lins for now but will not use these links in  future because we need to change them again and again if some other version of react is released  

 #### Difference between development.js and production.js :
        
*  Development Version:

       * Unminified Code: The development version includes unminified and human-readable code. This aids in debugging and provides more informative error messages, making it easier to identify issues during development.

       
       * Additional Warnings: The development version often includes additional warnings and checks to help developers catch potential mistakes and optimize their code.

* Production Version:

       * Minified Code: The production version is minified, meaning that unnecessary characters (like whitespace and comments) are removed to reduce file size. This results in faster downloads and improved performance in production environments.


       * No Development Warnings: The production version typically excludes additional warnings and checks present in the development version, leading to smaller file sizes and optimized execution.


*NOTE: Traditionally, it's recommended to place your JavaScript < script > tags just before the closing </ body > tag for a couple of reasons:*
* Page Load Performance: Allows the HTML content to load first. Helps in rendering the visible content quickly, improving preceived performance.

* DOM Content Loaded Event: DOM is fully parsed before executing scripts.


*However, there are cases where placing scripts in the < head > can be necessary or beneficial:*     
* Dependency Order  
* Asynchronous Loading:

       * The async-script.js will start downloading immediately and may execute before the HTML is fully parsed.

       * The defer-script.js will start downloading while parsing the HTML but will execute in order after the HTML is fully parsed
       

### crossorigin   
"Cross-origin in JavaScript refers to the security policy preventing scripts from making requests to a different domain than the one that served the original web page."

"To enable cross-origin resource sharing (CORS), developers can include the appropriate headers on the server side, allowing controlled access to resources across different domains."

"Understanding and implementing secure cross-origin communication is crucial for building modern, interactive web applications while maintaining a robust security posture."

# Creating an Element  
// Creating a React element using React.createElement()

       const heading = React.createElement("tag_name", { /* props */ }, "children_whatEver_we_want_to_put_inside_that_tag");

// Creating a root for rendering using ReactDOM.createRoot()

       const root = ReactDOM.createRoot(document.getElementById("root"));

// Rendering the React element to the DOM using the render method

       root.render(heading);
 


