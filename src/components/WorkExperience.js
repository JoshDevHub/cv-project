import React, { useState } from "react";

import Button from "./Button";
import Work from "./Work";
import WorkForm from "./WorkForm";

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

const WorkExperience = () => {
  const [experiences, setExperiences] = useState([]);
  const [workItem, setWorkItem] = useState(EmptyWorkExperience());
  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => setShowForm(!showForm);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setWorkItem({
      ...workItem,
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

    setExperiences([...experiences, workItem]);
    setWorkItem(EmptyWorkExperience());
    setShowForm(false);
  };

  const listExperiences = () => {
    if (experiences.length === 0) {
      return <p className="mb-4">You haven't added any work experience yet</p>;
    }

    return (
      <ul>
        {experiences.map(({ id, ...experience }) => {
          return (
            <Work key={id} data={experience} removeHandler={handleRemove(id)} />
          );
        })}
      </ul>
    );
  };

  return (
    <div className="px-8 py-4">
      <h2 className="mb-4 text-2xl font-bold text-sky-800">Work Experience</h2>
      {listExperiences()}
      {showForm ? (
        <WorkForm
          experience={workItem}
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

export default WorkExperience;
