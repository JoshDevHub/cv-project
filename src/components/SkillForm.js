import React, { useState } from "react";
import uniqid from "uniqid";

import Button from "./Button";
import Input from "./Input";

const SkillForm = (props) => {
  const [skill, setSkill] = useState({ id: uniqid(), text: "" });

  const handleChange = (event) => {
    setSkill({ id: skill.id, text: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    props.createSkill(skill);
    setSkill({ id: uniqid(), text: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-2">
        <label className="sr-only">Add Skill</label>
        <Input
          type="text"
          handler={handleChange}
          value={skill.text}
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
