import React, { useState } from "react";

import Button from "./Button";
import EducationForm from "./EducationForm";
import EducationItem from "./EducationItem";

const Education = () => {
  const [experiences, setExperiences] = useState([]);
  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => setShowForm(!showForm);

  const handleRemove = (id) => {
    return () => {
      setExperiences(experiences.filter((exp) => exp.id !== id));
    };
  };

  const addEduItem = (item) => {
    setExperiences([...experiences, item]);
    setShowForm(false);
  };

  const listExperiences = () => {
    if (experiences.length === 0) {
      return <p className="mb-4">You haven't added any education yet</p>;
    }

    return (
      <ul>
        {experiences.map(({ id, ...experience }) => {
          return (
            <EducationItem
              key={id}
              data={experience}
              removeHandler={handleRemove(id)}
            />
          );
        })}
      </ul>
    );
  };

  return (
    <div className="px-8 py-4">
      <h2 className="mb-4 text-2xl font-bold text-sky-800">Education</h2>
      {listExperiences()}
      {showForm ? (
        <EducationForm submitAction={addEduItem} closeForm={toggleForm} />
      ) : (
        <Button type="button" text="Add Work" handler={toggleForm} />
      )}
    </div>
  );
};

export default Education;
