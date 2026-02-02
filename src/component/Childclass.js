import React from "react";
class Child extends React.Component {
  constructor() {
    super();
    console.log("Child constructor");
  }

  componentDidMount() {
    console.log("Child didMount");
  }

  componentDidUpdate() {
    console.log("Child didUpdate");
  }

  render() {
    console.log("Child render");
    return <div>Child Component Rendered</div>;
  }
}

export default Child;