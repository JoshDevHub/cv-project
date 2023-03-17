import React, { useState } from "react";

import Button from "./Button";
import Input from "./Input";

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

const EducationForm = (props) => {
  const [eduItem, setEduItem] = useState(props.data ?? EmptyEducationItem());

  const handleChange = (event) => {
    const { name, value } = event.target;
    setEduItem({
      ...eduItem,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    props.submitAction(eduItem);
  };

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-3 gap-y-2 gap-x-8">
      <div className="col-span-2 flex flex-col gap-0.5">
        <label htmlFor="institution">Institution</label>
        <Input
          type="text"
          id="institution"
          value={eduItem.institution}
          handler={handleChange}
        />
        <label htmlFor="degree col-span-2">Degree</label>
        <Input
          type="text"
          id="degree"
          value={eduItem.degree}
          handler={handleChange}
        />
      </div>
      <div className="flex flex-col gap-0.5">
        <label htmlFor="startDate">Start Date</label>
        <Input
          type="text"
          id="startDate"
          value={eduItem.startDate}
          handler={handleChange}
        />
        <label htmlFor="endDate">End Date</label>
        <Input
          type="text"
          id="endDate"
          value={eduItem.endDate}
          handler={handleChange}
        />
      </div>
      <div className="col-span-3 mb-2 flex gap-4">
        <label htmlFor="didGraduate">Graduated?</label>
        <Input
          type="checkbox"
          id="didGraduate"
          value={eduItem.didGraduate}
          handler={handleChange}
        />
      </div>
      <div className="flex gap-4">
        {/* <Button type="submit" text="Add Experience" /> */}
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

export default EducationForm;
