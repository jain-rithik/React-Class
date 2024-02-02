import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      count2: 2,
    };

    console.log(this.props.name+"child constructor");
  }

  componentDidMount() {
    console.log(this.props.name+"child ComponentDidMount");
  }

  render() {
    const { name, location } = this.props;
    const { count } = this.state;
    console.log(this.props.name+"child render");
    return (
      <div className="user-card">
        <h1>Count = {count}</h1>
        <button
          onClick={() => {
            this.setState({
              count: count + 1,
            });
          }}
        >
          Increase Count
        </button>

        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: @jainrithik</h4>
      </div>
    );
  }
}

export default UserClass;
