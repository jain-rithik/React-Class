{
  /* <div id="parent">
  <div id="child1">
    <h1>I am h1</h1>
    <h2>I am h2</h2>
  </div>
  <div id="child2">
    <h1>I am h1</h1>
    <h2>I am h2</h2>
  </div>
</div>; */
}

import React from "react";
import  ReactDOM  from "react-dom/client";

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "I am H1"),
    React.createElement("h2", {}, "I am H2"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I am H1"),
    React.createElement("h2", {}, "I am H2"),
  ]),
]);

console.log(parent); //object

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent); //convert react elm to html elm
