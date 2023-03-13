import React, { Component } from "react";

import GeneralInfoDisplay from "./GeneralInfoDisplay";
import GeneralInfoForm from "./GeneralInfoForm";

class GeneralInformation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      info: {
        name: "",
        jobTitle: "",
        description: "",
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

    this.setState({
      showForm: false,
    });
  };

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({
      info: {
        ...this.state.info,
        [name]: value,
      },
    });
  };

  render() {
    if (this.state.showForm) {
      return (
        <GeneralInfoForm
          info={this.state.info}
          handleSubmit={this.submitInfo}
          handleChange={this.handleChange}
        />
      );
    }

    return (
      <GeneralInfoDisplay info={this.state.info} clickHandler={this.showForm} />
    );
  }
}

export default GeneralInformation;
