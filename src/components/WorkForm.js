import React, { useState } from "react";

import Button from "./Button";
import Input from "./Input";

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

const WorkForm = (props) => {
  const [workItem, setWorkItem] = useState(props.data ?? EmptyWorkExperience);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setWorkItem({
      ...workItem,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    props.submitAction(workItem);
  };

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-3 gap-y-2 gap-x-8">
      <div className="col-span-2 flex flex-col gap-0.5">
        <label htmlFor="companyName">Company Name</label>
        <Input
          type="text"
          id="companyName"
          value={workItem.companyName}
          handler={handleChange}
        />
        <label htmlFor="jobTitle col-span-2">Job Title</label>
        <Input
          type="text"
          id="jobTitle"
          value={workItem.jobTitle}
          handler={handleChange}
        />
      </div>
      <div className="flex flex-col gap-0.5">
        <label htmlFor="startDate">Start Date</label>
        <Input
          type="text"
          id="startDate"
          value={workItem.startDate}
          handler={handleChange}
        />
        <label htmlFor="endDate">End Date</label>
        <Input
          type="text"
          id="endDate"
          value={workItem.endDate}
          handler={handleChange}
        />
      </div>
      <div className="col-span-3 mb-2 flex flex-col">
        <label htmlFor="responsibilities">Responsibilities</label>
        <textarea
          id="responsibilities"
          name="responsibilities"
          value={workItem.responsibilities}
          onChange={handleChange}
          placeholder="List some of your responsibilities ..."
          className="rounded-md border px-2 py-1"
          rows="5"
        />
      </div>
      <div className="flex gap-4">
        {props.submitButton}
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
