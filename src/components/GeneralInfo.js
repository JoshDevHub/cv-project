import React, { Component } from "react";

import Button from "./Button";

import { isEmpty } from "../utils/object_helpers";

class GeneralInfo extends Component {
  createButton(text) {
    return (
      <button className="border border-black" onClick={this.props.clickHandler}>
        {text}
      </button>
    );
  }

  render() {
    if (isEmpty(this.props.info)) {
      return (
        <div>
          <p>You haven't filled out this information yet</p>
          {this.createButton("Add your info")}
        </div>
      );
    }

    const { name, address, email, phoneNumber, jobTitle } = this.props.info;

    return (
      <div>
        <div className="border-b-2 border-black p-4">
          <h2 className="text-2xl font-bold text-sky-800">{name}</h2>
          <h3 className="text-xl text-gray-700">{jobTitle}</h3>
          <Button
            type="button"
            handler={this.props.clickHandler}
            text="Edit Info"
          />
        </div>
        <div className="border-b-2 border-black p-4">
          <p>City: {address}</p>
          <p>Email: {email}</p>
          <p>Phone: {phoneNumber}</p>
        </div>
      </div>
    );
  }
}

export default GeneralInfo;
