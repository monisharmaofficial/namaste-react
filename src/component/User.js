import React, { Component } from "react";
import ParentClass from './Parentclass'
class User extends Component {
  constructor(props){
  super(props)
 this.state = {
    data: null,
  };
  }

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
        <h2>{this.props.about}</h2>
        <h3>{data.name}</h3>
        <p>{data.bio}</p>
        <img src={data.avatar_url} width="80" alt="profile" />
        <div>
          <ParentClass/>
        </div>
      </div>
    );
  }
}

export default User;
