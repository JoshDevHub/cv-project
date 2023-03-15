import React from "react";

import Button from "./Button";
import Input from "./Input";

const WorkForm = (props) => {
  const { startDate, endDate, jobTitle, companyName, responsibilities } =
    props.experience;

  return (
    <form
      onSubmit={props.handleSubmit}
      className="grid grid-cols-3 gap-y-2 gap-x-8"
    >
      <div className="col-span-2 flex flex-col gap-0.5">
        <label htmlFor="companyName">Company Name</label>
        <Input
          type="text"
          id="companyName"
          value={companyName}
          handler={props.handleChange}
        />
        <label htmlFor="jobTitle col-span-2">Job Title</label>
        <Input
          type="text"
          id="jobTitle"
          value={jobTitle}
          handler={props.handleChange}
        />
      </div>
      <div className="flex flex-col gap-0.5">
        <label htmlFor="startDate">Start Date</label>
        <Input
          type="text"
          id="startDate"
          value={startDate}
          handler={props.handleChange}
        />
        <label htmlFor="endDate">End Date</label>
        <Input
          type="text"
          id="endDate"
          value={endDate}
          handler={props.handleChange}
        />
      </div>
      <div className="col-span-3 mb-2 flex flex-col">
        <label htmlFor="responsibilities">Responsibilities</label>
        <textarea
          id="responsibilities"
          name="responsibilities"
          value={responsibilities}
          onChange={props.handleChange}
          placeholder="List some of your responsibilities ..."
          className="rounded-md border px-2 py-1"
          rows="5"
        />
      </div>
      <div className="flex gap-4">
        <Button type="submit" text="Add Experience" />
        <Button
          type="button"
          text="Cancel"
          styles="alert"
          handler={props.closeForm}
        />
      </div>
    </form>
  );
};

export default WorkForm;
