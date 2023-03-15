import React from "react";

import Button from "./Button";
import Input from "./Input";

const SkillForm = (props) => {
  const { text } = props;

  return (
    <form onSubmit={props.handleSubmit}>
      <div className="mb-2">
        <label className="sr-only">Add Skill</label>
        <Input
          type="text"
          handler={props.handleChange}
          value={text}
          id="skill"
        />
      </div>
      <div className="flex gap-4">
        <Button type="submit" text="Add Skill" styles="primary" />
        <Button
          type="button"
          text="Cancel"
          styles="alert"
          handler={props.handleClose}
        />
      </div>
    </form>
  );
};

export default SkillForm;
