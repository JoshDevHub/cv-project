import React, { Component } from "react";

import Button from "./Button";
import Input from "./Input";

class WorkForm extends Component {
  render() {
    const { startDate, endDate, jobTitle, companyName, responsibilities } =
      this.props.experience;

    return (
      <form onSubmit={this.props.handleSubmit}>
        <div>
          <label htmlFor="compnayName">Company Name</label>
          <Input
            type="text"
            id="companyName"
            value={companyName}
            handler={this.props.handleChange}
          />
          <label htmlFor="jobTitle">Job Title</label>
          <Input
            type="text"
            id="jobTitle"
            value={jobTitle}
            handler={this.props.handleChange}
          />
        </div>
        <div>
          <label htmlFor="startDate">Start Date</label>
          <Input
            type="text"
            id="startDate"
            value={startDate}
            handler={this.props.handleChange}
          />
          <label htmlFor="endDate">End Date</label>
          <Input
            type="text"
            id="endDate"
            value={endDate}
            handler={this.props.handleChange}
          />
        </div>
        <div>
          <label htmlFor="responsibilities">Responsibilities</label>
          <Input
            type="text"
            id="responsibilities"
            value={responsibilities}
            handler={this.props.handleChange}
          />
        </div>
        <div>
          <Button type="submit" text="Add Experience" />
        </div>
      </form>
    );
  }
}

export default WorkForm;
