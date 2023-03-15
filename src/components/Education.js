import React, { useState } from "react";

import Button from "./Button";
import EducationForm from "./EducationForm";
import EducationItem from "./EducationItem";

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

const Education = () => {
  const [experiences, setExperiences] = useState([]);
  const [eduItem, setEduItem] = useState(EmptyEducationItem());
  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => setShowForm(!showForm);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setEduItem({
      ...eduItem,
      [name]: value,
    });
  };

  const handleRemove = (id) => {
    return () => {
      setExperiences(experiences.filter((exp) => exp.id !== id));
    };
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setExperiences([...experiences, eduItem]);
    setEduItem(EmptyEducationItem());
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
        <EducationForm
          education={eduItem}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          closeForm={toggleForm}
        />
      ) : (
        <Button type="button" text="Add Work" handler={toggleForm} />
      )}
    </div>
  );
};

export default Education;
