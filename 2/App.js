import React from "react";
import ReactDOM from "react-dom/client";

//React Element
const heading = <h1>Hello Rithik</h1>

//React Component
const Heading = () => (
  <h1 className="heading" tabIndex={5}>
    Namaste React
  </h1>
);

//React Component
const HeadingComponent = () => (
    <div id="container">
        {Heading()}
        <Heading></Heading>
        <Heading />
        <h1>Namaste React Functional Component</h1>
    </div>
)


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
