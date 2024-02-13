const SimpleForm = () => {
    const handleSubmit=(e)=>{
        e.preventDefault();
        const inputValue = e.target.elements.inputField.value;
        console.log(`Submitted value ${inputValue}`);
    }

    // create form

    const Reactform = React.createElement("form", { onSubmit: handleSubmit }, React.createElement('label', null, "Input:", React.createElement("input", { type: "text", name: "inputField" })), React.createElement("button", { type: "submit" }, "SUBMIT"));

return Reactform;
}

const SimpleFormElement = SimpleForm();
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(SimpleFormElement);