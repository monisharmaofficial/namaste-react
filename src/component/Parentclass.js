import React from "react";
import Child from "./FirstChild";

class Parent extends React.Component {
  constructor() {
    super();
    console.log("Parent constructor");
  }

  componentDidMount() {
    console.log("Parent didMount");
  }

  render() {
    console.log("Parent render");
    return (
      <div>
        <p>Parent Render Called</p>
        <Child />
      </div>
    );
  }
}

export default Parent;
