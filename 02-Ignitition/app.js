import React from "react";
import ReactDOM from "react-dom";

const heading = React.createElement(
  "hi",
  { id: "heading", class: "nav" },
  " Hello World from React!"
);
console.log(heading); //this will return an Object

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);

/**
 *
 ** How to create nested HTML element using REACT
 *
 * <div id="parent">
 *      <div id="child">
 *            <h1>I am from Nested HTML</h1>
 *      </div>
 * </div>
 *
 *
 *? REACT element is an Object , that the browser understand .
 *? while it is rendering under DOM , it gets converted into HTML element
 */

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    React.createElement("h1", {}, "Hello from H1 tag")
  )
);

// root.render(parent);

/**
 *
 ** How to create nested HTML element using REACT
 *
 * <div id="alpha">
 *      <div id="beta">
 *            <h1>I am from Nested HTML</h1>
 *            <h2> Hi from H2 tag <h2>
 *      </div>
 * </div>
 *
 *
 *? if there are sibling nested tags like H1 and H2 tags
 *? we use arrays []
 */

const alpha = React.createElement(
  "div",
  { id: "alpha" },
  React.createElement("div", { id: "beta" }, [
    React.createElement("h1", {}, "I am from Nested HTML"),
    React.createElement("h2", {}, "Hello from H2 tag"),
  ])
);

root.render(alpha);

/**
 *
 ** How to create nested HTML element using REACT
 *
 * <div id="alpha1">
 *      <div id="beta1">
 *            <h1>I am from Nested HTML</h1>
 *            <h2> Hi from H2 tag <h2>
 *      </div>
 *      <div id="gamma">
 *            <h1>I am from Nested HTML</h1>
 *            <h2> Hi from H2 tag <h2>
 *      </div>
 * </div>
 *
 *
 *? if there are sibling nested tags like H1 and H2 tags
 *? we use arrays []
 */

const alpha1 = React.createElement("div", { id: "alpha1" }, [
  React.createElement("div", { id: "beta1" }, [
    React.createElement("h1", {}, "I am from Beta1 Nested "),
    React.createElement("h2", {}, "I am 172014651394651321654"),
  ]),
  React.createElement("div", { id: "gama" }, [
    React.createElement("h1", {}, "I am from Gamma Nested "),
    React.createElement("h2", {}, "I am from Gamma H2"),
  ]),
]);

root.render(alpha1);
console.log(alpha1);

//JSX --- Bye Bye React.createElement
