import React, { Component } from "react";

import Button from "./Button";
import Input from "./Input";

class EducationForm extends Component {
  render() {
    const { startDate, endDate, degree, institution, didGraduate } =
      this.props.education;

    return (
      <form
        onSubmit={this.props.handleSubmit}
        className="grid grid-cols-3 gap-y-2 gap-x-8"
      >
        <div className="col-span-2 flex flex-col gap-0.5">
          <label htmlFor="institution">Institution</label>
          <Input
            type="text"
            id="institution"
            value={institution}
            handler={this.props.handleChange}
          />
          <label htmlFor="degree col-span-2">Degree</label>
          <Input
            type="text"
            id="degree"
            value={degree}
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
        <div className="col-span-3 mb-2 flex gap-4">
          <label htmlFor="didGraduate">Graduated?</label>
          <Input
            type="checkbox"
            id="didGraduate"
            value={didGraduate}
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

export default EducationForm;
