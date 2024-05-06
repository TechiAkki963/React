const heading = React.createElement(
  "hi",
  { id: "heading", class: "nav" },
  " Hello World from React!"
);
console.log(heading);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
