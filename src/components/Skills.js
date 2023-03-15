import React, { useState } from "react";

import SkillForm from "./SkillForm";
import Button from "./Button";

const Skills = () => {
  const [skills, setSkills] = useState([]);
  const [showForm, setShowForm] = useState(false);

  const createSkill = (skill) => setSkills([...skills, skill]);

  const toggleForm = () => setShowForm(!showForm);

  const skillList = () => {
    if (skills.length === 0) {
      return <p className="mb-4">You haven't added any skills yet</p>;
    }

    return (
      <ul className="mb-4 flex flex-wrap gap-4">
        {skills.map((s) => {
          return (
            <li
              key={s.id}
              className="rounded-md bg-sky-800 px-2 py-1 text-white"
            >
              {s.text}
            </li>
          );
        })}
      </ul>
    );
  };

  return (
    <div className="px-8 py-4">
      <h2 className="mb-4 text-2xl font-bold text-sky-800">Skills</h2>
      {skillList()}
      {showForm ? (
        <SkillForm createSkill={createSkill} handleClose={toggleForm} />
      ) : (
        <Button handler={toggleForm} text="Add Skills" type="button" />
      )}
    </div>
  );
};

export default Skills;
