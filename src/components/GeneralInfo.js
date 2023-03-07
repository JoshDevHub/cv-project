import React, { Component } from "react";

import Button from "./Button";

import { isEmpty } from "../utils/object_helpers";

class GeneralInfo extends Component {
  createButton(text) {
    return (
      <button
        className="border border-black"
        onClick={this.props.clickHandler}
      >
        {text}
      </button>
    )
  }

  render() {
    if (isEmpty(this.props.info)) {
      return (
        <div>
          <p>You haven't filled out this information yet</p>
          {this.createButton("Add your info")}
        </div>
      )
    }

    const { name, address, email, phoneNumber, jobTitle } = this.props.info;

    return (
      <div>
        <p>Name: {name}</p>
        <p>City: {address}</p>
        <p>Email: {email}</p>
        <p>Phone: {phoneNumber}</p>
        <Button type="button" handler={this.props.clickHandler} text="Add your info" />
      </div>
    )
  }
}

export default GeneralInfo;
