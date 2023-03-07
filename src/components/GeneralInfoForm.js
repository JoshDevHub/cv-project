import React, { Component } from "react";

import Button from "./Button";
import Input from "./Input";

class GeneralInfoForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      ...this.props.info
    }
  }

  handleChange = (event) => {
    const { id, value } = event.target;
    this.setState({
      [id]: value
    })
  }

  render() {
    return (
      <div className="flex flex-col items-center">
        <h2 className="text-2xl font-bold mb-2">Edit Info</h2>
        <form onSubmit={this.props.handleSubmit} className="flex flex-col gap-4 mx-4">
          <div className="flex flex-col">
            <label htmlFor="name">Name</label>
            <Input
              type="text"
              value={this.state.name}
              id="name"
              handler={this.handleChange}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="phoneNumber">Phone Number</label>
            <Input
              type="text"
              value={this.state.phoneNumber}
              id="phoneNumber"
              handler={this.handleChange}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="email">Email</label>
            <Input
              type="email"
              value={this.state.email}
              id="email"
              handler={this.handleChange}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="address">Address</label>
            <Input
              type="text"
              value={this.state.address}
              id="address"
              handler={this.handleChange}
            />
          </div>
          <Button type="submit" text="Add Information" />
        </form>
      </div>
    )
  }
}

export default GeneralInfoForm;
