import React, { Component } from "react";

import Button from "./Button";

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
            <input
              type="text"
              value={this.state.name}
              name="name"
              id="name"
              onChange={this.handleChange}
              className="border rounded-md px-2 py-1"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="phoneNumber">Phone Number</label>
            <input
              type="text"
              value={this.state.phoneNumber}
              name="phoneNumber"
              id="phoneNumber"
              onChange={this.handleChange}
              className="border rounded-md px-2 py-1"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              value={this.state.email}
              name="email"
              id="email"
              onChange={this.handleChange}
              className="border rounded-md px-2 py-1"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="address">Address</label>
            <input
              type="text"
              value={this.state.address}
              id="address"
              name="address"
              onChange={this.handleChange}
              className="border rounded-md px-2 py-1"
            />
          </div>
          <Button type="submit" text="Add Information" />
        </form>
      </div>
    )
  }
}

export default GeneralInfoForm;
