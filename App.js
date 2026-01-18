// const heading = React.createElement("h1",{},"Hello Monika from React Side")
const content = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "Hi I am H1 Tag"),
    React.createElement("h2", {}, "Hi I am H2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h3", {}, "Hi I am H3 Tag"),
    React.createElement("h4", {}, "Hi I am H4 tag"),
  ])
);
console.log("Content is this object:", content);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(content);
