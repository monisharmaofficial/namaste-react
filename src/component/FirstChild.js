import React from "react";
import SecondChild from "./secondChild";

class FirstChild extends React.Component {
  constructor() {
    super();
    console.log("FirstChild constructor");
  }

  componentDidMount() {
    console.log("FirstChild didMount");
  }

  render() {
    console.log("FirstChild render");
    return (
      <div>
        <p>First Child Render Called</p>
        <SecondChild />
      </div>
    );
  }
}

export default FirstChild;
