import React from "react";
import ReactDOM from "react-dom";

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("h1", {}, "Naukri")
);

//JSX - React Element

const heading = (
  <h1 className="head" id="heading" tabIndex="1">
    Hello World 🚀
  </h1>
);

//React Components
// ClassBased Components - OLD
// Functional Components - NEW

//? JSX functional component

const Title = () => {
  return <h1>Hi from Title</h1>;
};

//**Functional Component */

const HeadingComponent = () => {
  return (
    <div id="container">
      <Title />
      <Title></Title>
      {/* there are 2 ways to write react component inside another component */}
      {Title()}
      {/* We can also function */}
      {/* All the Title are one and the same things */}
      <h1 className="header">"Hello World from Functional Component🚀🚀🚀"</h1>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
