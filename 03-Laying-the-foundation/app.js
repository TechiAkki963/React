import React from "react";
import ReactDOM from "react-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));

//JSX

const jsxHeading = (
  <h1 className="head" id="heading" tabIndex="1">
    Hello World 🚀
  </h1>
);

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("h1", {}, "Naukri")
);

root.render(jsxHeading);
