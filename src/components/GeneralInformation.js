import React, { Component } from "react";

import GeneralInfoDisplay from "./GeneralInfoDisplay";
import GeneralInfoForm from "./GeneralInfoForm";

import { objFromForm } from "../utils/object_helpers";

class GeneralInformation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      info: {
        name: "",
        jobTitle: "",
        email: "",
        city: "",
        phoneNumber: "",
      },
      showForm: false,
    };
  }

  showForm = () => {
    this.setState({
      showForm: true,
    });
  };

  submitInfo = (event) => {
    event.preventDefault();

    const data = objFromForm(event.target);
    this.setState({
      info: {
        ...data,
      },
      showForm: false,
    });
  };

  render() {
    if (this.state.showForm) {
      return (
        <GeneralInfoForm
          info={this.state.info}
          handleSubmit={this.submitInfo}
        />
      );
    }

    return (
      <GeneralInfoDisplay info={this.state.info} clickHandler={this.showForm} />
    );
  }
}

export default GeneralInformation;
