import React, { Component } from "react";

class Forma extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      dd: "",
      mm: "",
      yyyy: "",
      age: "",
      email: ""
    };
  }

  render() {
    return (
      <div>Form</div>
    )
  }

}

export default Forma;
