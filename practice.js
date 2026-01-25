import React from "react"
import ReactDOM from "react-dom/client"

// const content = React.createElement(
//   "div",
//   { id: "parent" },
//   React.createElement("div", { id: "child" }, [
//     React.createElement("h1", {key: "h1"}, "Hi I am H1 Tag"),
//     React.createElement("h2", {key: "h2"}, "Hi I am H2 tag"),
//   ]),
//   React.createElement("div", { id: "child2" }, [
//     React.createElement("h3", {key: "h3"}, "Hi I am H3 Tag"),
//     React.createElement("h4", {key: "h4"}, "Hi I am H4 tag"),
//   ])
// );
// console.log("Content is this object:", content);
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(content);

//this is by using core react
// const heading = React.createElement("h1",{id:"heading"},"Hello From Akshay Saini")
// console.log("What is heading at the end using core react:",heading)
// const root = ReactDOM.createRoot(document.getElementById("root"))
// root.render(heading)

//this is heading using jsx
// const jsxheading = <h1 id="heading">Hello From Akshay Saini!</h1>
// console.log("What is heading at the end using jsx in react:",jsxheading)
// const root = ReactDOM.createRoot(document.getElementById("root"))
// root.render(jsxheading)

const title1 = React.createElement("h2",{id:"heading"}, "hello Title1")   //core react and here title is a object and we can only use <title/> when it's function so react can not call it so we have to use {}                                                                                                                                                                                                                                                                                                                                        
const title2 = <h3 id="heading">Hello Title 2</h3>   //jsx
const Title3 = () => {
  return <h4 id="heading">Hello Title 3</h4>
}
const Title4 = () => {
  return <h5 id="heading">Hello Title 4</h5>
}

  const a = 10;
  const b = 20;

  //we can write any javascript in component busing {}.

const Heading = () =>{
  return (
    <div>
      {title1}
      {title2}
      <Title3 />
      {Title4()}
      {a + b}
      {console.log("Hello I am inside the component")}
      <h1 id="heading">This is from React component</h1>
    </div>
  )
}


// const desc = ReactDOM.createRoot(document.getElementById("root"))
// // desc.render(Heading())
// desc.render(<Heading />)
