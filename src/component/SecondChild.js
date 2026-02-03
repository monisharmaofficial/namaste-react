import React from "react";

class SecondChild extends React.Component {
  constructor() {
    super();
    console.log("SecondChild constructor");
  }

  componentDidMount() {
    console.log("SecondChild didMount");
  }

  render() {
    console.log("SecondChild render");
    return <p>Second Child Render Called</p>;
  }
}

export default SecondChild;
