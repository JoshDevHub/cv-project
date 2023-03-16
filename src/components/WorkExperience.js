import React, { useState } from "react";

import Button from "./Button";
import Work from "./Work";
import WorkForm from "./WorkForm";

const WorkExperience = () => {
  const [experiences, setExperiences] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editItem, setEditItem] = useState(undefined);

  const toggleForm = () => setShowForm(!showForm);

  const editModeFor = (id) => {
    return () => {
      setEditItem(experiences.find((exp) => exp.id === id));
    };
  };

  const handleRemove = (id) => {
    return () => {
      setExperiences(experiences.filter((exp) => exp.id !== id));
    };
  };

  const createWork = (newItem) => {
    setExperiences([...experiences, newItem]);
    setShowForm(false);
  };

  const updateWork = (item) => {
    setExperiences(experiences.map((exp) => (exp.id === item.id ? item : exp)));
    setEditItem(undefined);
  };

  const listExperiences = () => {
    if (experiences.length === 0) {
      return <p className="mb-4">You haven't added any work experience yet</p>;
    }

    return (
      <ul>
        {experiences.map((exp) => {
          if (editItem && editItem.id === exp.id) {
            return (
              <WorkForm
                key={exp.id}
                data={exp}
                submitButton={<Button type="submit" text="Update" />}
                submitAction={updateWork}
                closeForm={() => setEditItem(undefined)}
              />
            );
          }
          return (
            <Work
              key={exp.id}
              data={exp}
              removeHandler={handleRemove(exp.id)}
              editHandler={editModeFor(exp.id)}
            />
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
          submitButton={<Button type="submit" text="Add Experience" />}
          submitAction={createWork}
          closeForm={toggleForm}
        />
      ) : (
        <Button type="button" text="Add Work" handler={toggleForm} />
      )}
    </div>
  );
};

export default WorkExperience;
