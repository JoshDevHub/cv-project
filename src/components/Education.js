import React, { Component } from "react";

import Button from "./Button";
import EducationForm from "./EducationForm";
import EducationItem from "./EducationItem";

import uniqid from "uniqid";

const EmptyEducationItem = () => {
  return {
    id: uniqid(),
    institution: "",
    degree: "",
    didGraduate: false,
    startDate: "",
    endDate: "",
  };
};

class Education extends Component {
  constructor(props) {
    super(props);

    this.state = {
      experiences: [],
      education: EmptyEducationItem(),
      showForm: false,
    };
  }

  toggleForm = () => {
    this.setState({
      showForm: !this.state.showForm,
    });
  };

  handleChange = (event) => {
    const prop = event.target.id;
    this.setState({
      education: {
        ...this.state.education,
        [prop]: event.target.value,
      },
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    this.setState({
      experiences: [...this.state.experiences, this.state.education],
      education: EmptyEducationItem(),
      showForm: false,
    });
  };

  listExperiences() {
    if (this.state.experiences.length === 0) {
      return <p className="mb-4">You haven't added any education yet</p>;
    }

    return (
      <ul>
        {this.state.experiences.map((experience) => {
          return <EducationItem data={experience} />;
        })}
      </ul>
    );
  }

  render() {
    return (
      <div className="px-8 py-4">
        <h2 className="mb-4 text-2xl font-bold text-sky-800">Education</h2>
        {this.listExperiences()}
        {this.state.showForm ? (
          <EducationForm
            education={this.state.education}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            closeForm={this.toggleForm}
          />
        ) : (
          <Button type="button" text="Add Work" handler={this.toggleForm} />
        )}
      </div>
    );
  }
}

export default Education;
