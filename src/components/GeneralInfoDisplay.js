import React, { Component } from "react";

import Button from "./Button";

class GeneralInfoDisplay extends Component {
  isEmpty() {
    return Object.values(this.props.info).every((field) => field === "");
  }

  render() {
    if (this.isEmpty()) {
      return (
        <div className="px-8 py-4">
          <p>
            You haven't filled out your general information yet information yet
          </p>
          <Button
            type="button"
            handler={this.props.clickHandler}
            text="Add Info"
          />
        </div>
      );
    }

    const { name, city, description, email, phoneNumber, jobTitle } =
      this.props.info;

    return (
      <div>
        <div className="border-b-2 border-black px-8 py-4">
          <h2 className="text-2xl font-bold text-sky-800">{name}</h2>
          <h3 className="mb-2 text-xl text-gray-700">{jobTitle}</h3>
          <p className="mb-2">{description}</p>
          <Button
            type="button"
            handler={this.props.clickHandler}
            text="Edit Info"
          />
        </div>
        <div className="border-b-2 border-black px-8 py-4">
          <p>City: {city}</p>
          <p>Email: {email}</p>
          <p>Phone: {phoneNumber}</p>
        </div>
      </div>
    );
  }
}

export default GeneralInfoDisplay;
