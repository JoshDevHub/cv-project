import React, { useState } from "react";

import Button from "./Button";
import EducationForm from "./EducationForm";
import EducationItem from "./EducationItem";

const Education = () => {
  const [experiences, setExperiences] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editItem, setEditItem] = useState(undefined);

  const editModeFor = (id) => {
    return () => {
      setEditItem(experiences.find((exp) => exp.id === id));
    };
  };

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

  const updateEduItem = (item) => {
    setExperiences(experiences.map((exp) => (exp.id === item.id ? item : exp)));
    setEditItem(undefined);
  };

  const listExperiences = () => {
    if (experiences.length === 0) {
      return <p className="mb-4">You haven't added any education yet</p>;
    }

    return (
      <ul>
        {experiences.map((exp) => {
          if (editItem?.id === exp.id) {
            return (
              <EducationForm
                key={exp.id}
                data={exp}
                submitButton={<Button type="submit" text="Update" />}
                submitAction={updateEduItem}
                closeForm={() => setEditItem(undefined)}
              />
            );
          }
          return (
            <EducationItem
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
      <h2 className="mb-4 text-2xl font-bold text-sky-800">Education</h2>
      {listExperiences()}
      {showForm ? (
        <EducationForm
          submitAction={addEduItem}
          submitButton={<Button type="submit" text="Add Experience" />}
          closeForm={toggleForm}
        />
      ) : (
        <Button type="button" text="Add Education" handler={toggleForm} />
      )}
    </div>
  );
};

export default Education;
