import React, { Component } from "react";

import Button from "./Button";
import Input from "./Input";

class WorkForm extends Component {
  render() {
    const { startDate, endDate, jobTitle, companyName, responsibilities } =
      this.props.experience;

    return (
      <form
        onSubmit={this.props.handleSubmit}
        className="grid grid-cols-3 gap-y-2 gap-x-8"
      >
        <div className="col-span-2 flex flex-col gap-0.5">
          <label htmlFor="companyName">Company Name</label>
          <Input
            type="text"
            id="companyName"
            value={companyName}
            handler={this.props.handleChange}
          />
          <label htmlFor="jobTitle col-span-2">Job Title</label>
          <Input
            type="text"
            id="jobTitle"
            value={jobTitle}
            handler={this.props.handleChange}
          />
        </div>
        <div className="flex flex-col gap-0.5">
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
        <div className="col-span-3 mb-2 flex flex-col">
          <label htmlFor="responsibilities">Responsibilities</label>
          <Input
            type="text"
            id="responsibilities"
            value={responsibilities}
            handler={this.props.handleChange}
          />
        </div>
        <div className="flex gap-4">
          <Button type="submit" text="Add Experience" />
          <Button
            type="button"
            text="Cancel"
            styles="alert"
            handler={this.props.closeForm}
          />
        </div>
      </form>
    );
  }
}

export default WorkForm;
