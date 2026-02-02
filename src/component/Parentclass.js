import Child from './Childclass'
import React from 'react';

class Parent extends React.Component {
  constructor() {
    super();
    console.log("Parent constructor");
  }

  componentDidMount() {
    console.log("Parent didMount");
  }

  componentDidUpdate() {
    console.log("Parent didUpdate");
  }

  render() {
    console.log("Parent render");
    return <Child />;
  }
}
export default Parent;