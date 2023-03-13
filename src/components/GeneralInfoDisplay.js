import React, { Component } from "react";
import { ReactComponent as EmailIcon } from "../assets/icons/email.svg";
import { ReactComponent as LocationIcon } from "../assets/icons/map-marker.svg";
import { ReactComponent as PhoneIcon } from "../assets/icons/cellphone.svg";

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
          <div className="flex gap-2">
            <LocationIcon className="w-6 text-sky-800" />
            <p>{city}</p>
          </div>
          <div className="flex gap-2">
            <EmailIcon className="w-6 text-sky-800" />
            <p>{email}</p>
          </div>
          <div className="flex gap-2">
            <PhoneIcon className="w-6 text-sky-800" />
            <p>{phoneNumber}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default GeneralInfoDisplay;
