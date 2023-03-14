import React, { Component } from "react";

import Button from "./Button";
import Work from "./Work";
import WorkForm from "./WorkForm";

import uniqid from "uniqid";

const EmptyWorkExperience = () => {
  return {
    id: uniqid(),
    startDate: "",
    endDate: "",
    companyName: "",
    jobTitle: "",
    responsibilities: "",
  };
};

class WorkExperience extends Component {
  constructor(props) {
    super(props);

    this.state = {
      experiences: [],
      workExperience: EmptyWorkExperience(),
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
      workExperience: {
        ...this.state.workExperience,
        [prop]: event.target.value,
      },
    });
  };

  handleRemove = (id) => {
    return () => {
      this.setState({
        experiences: this.state.experiences.filter((exp) => exp.id !== id),
      });
    };
  };

  handleSubmit = (event) => {
    event.preventDefault();

    this.setState({
      experiences: [...this.state.experiences, this.state.workExperience],
      workExperience: EmptyWorkExperience(),
      showForm: false,
    });
  };

  listExperiences() {
    if (this.state.experiences.length === 0) {
      return <p className="mb-4">You haven't added any work experience yet</p>;
    }

    return (
      <ul>
        {this.state.experiences.map(({ id, ...experience }) => {
          return (
            <Work
              key={id}
              data={experience}
              removeHandler={this.handleRemove(id)}
            />
          );
        })}
      </ul>
    );
  }

  render() {
    return (
      <div className="px-8 py-4">
        <h2 className="mb-4 text-2xl font-bold text-sky-800">
          Work Experience
        </h2>
        {this.listExperiences()}
        {this.state.showForm ? (
          <WorkForm
            experience={this.state.workExperience}
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

export default WorkExperience;
