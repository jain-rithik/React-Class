import React from "react";
import ReactDOM from "react-dom/client";

//React Component
const Heading = () => (
  <h1 className="heading" tabIndex={5}>
    Namaste React
  </h1>
);

//React Component
const HeadingComponent = () => (
    <div id="container">
        <Heading />
        <h1>Namaste React Functional Component</h1>
    </div>
)


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
