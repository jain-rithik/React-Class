import User from "./User";
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("parent constructor");
  }

  componentDidMount() {
    console.log("parent ComponentDidMount");
  }

  render() {
    console.log("parent render");
    return (
      <div>
        About us page
        <UserClass name={"First"} location={"Mumbai"} />
        <UserClass name={"Second"} location={"Pune"} />
        <UserClass name={"Third"} location={"Bangalore"} />
      </div>
    );
  }
}

export default About;
