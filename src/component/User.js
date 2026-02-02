import React, { Component } from "react";

class MyComponent extends Component {
 state = {
    data: null,
  };

  componentDidMount() {
    fetch("https://api.github.com/users/monisharmaofficial")
      .then((res) => res.json())
      .then((data) => this.setState({ data }));
  }

  render() {
    const { data } = this.state;

    if (!data) return <p>Loading...</p>;

    return (
      <div>
        <h3>{data.name}</h3>
        <p>{data.bio}</p>
        <img src={data.avatar_url} width="80" alt="profile" />
      </div>
    );
  }
}

export default MyComponent;
