import React, { Component } from "react";

import Button from "./Button";
import Input from "./Input";

class GeneralInfoForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ...this.props.info,
    };
  }

  handleChange = (event) => {
    const { id, value } = event.target;
    this.setState({
      [id]: value,
    });
  };

  render() {
    return (
      <div className="flex flex-col items-center">
        <h2 className="mb-2 text-2xl font-bold">Edit Info</h2>
        <form
          onSubmit={this.props.handleSubmit}
          className="mx-4 flex flex-col gap-4"
        >
          <div className="flex flex-wrap gap-8">
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
              <label htmlFor="jobTitle">Title</label>
              <Input
                type="text"
                value={this.state.jobTitle}
                id="jobTitle"
                handler={this.handleChange}
              />
            </div>
          </div>
          <div></div>
          <div className="mb-4 flex gap-4">
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
              <label htmlFor="city">City</label>
              <Input
                type="text"
                value={this.state.city}
                id="city"
                handler={this.handleChange}
              />
            </div>
          </div>
          <div>
            <Button type="submit" text="Add Information" />
          </div>
        </form>
      </div>
    );
  }
}

export default GeneralInfoForm;
