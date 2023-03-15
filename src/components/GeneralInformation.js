import React, { useState } from "react";

import GeneralInfoDisplay from "./GeneralInfoDisplay";
import GeneralInfoForm from "./GeneralInfoForm";

const EmptyInformation = () => {
  const keys = [
    "name",
    "jobTitle",
    "description",
    "email",
    "city",
    "phoneNumber",
    "website",
    "linkedin",
    "github",
  ];

  return keys.reduce((obj, key) => {
    obj[key] = "";
    return obj;
  }, {});
};

const GeneralInformation = () => {
  const [info, setInfo] = useState(EmptyInformation());
  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => setShowForm(true);

  const submitInfo = (event) => {
    event.preventDefault();

    setShowForm(false);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setInfo({
      ...info,
      [name]: value,
    });
  };

  if (showForm) {
    return (
      <GeneralInfoForm
        info={info}
        handleSubmit={submitInfo}
        handleChange={handleChange}
      />
    );
  }

  return <GeneralInfoDisplay info={info} clickHandler={toggleForm} />;
};

export default GeneralInformation;
