import React from "react";

import { ReactComponent as DeleteIcon } from "../assets/icons/delete-outline.svg";
import { ReactComponent as EditIcon } from "../assets/icons/pencil-outline.svg";

import Button from "./Button";

const graduateDisplay = (bool) => (bool ? "Yes" : "No");

const EducationItem = ({ data, removeHandler, editHandler }) => {
  const { id, startDate, endDate, degree, institution, didGraduate } = data;

  return (
    <li key={id} className="mb-6">
      <div className="flex justify-between">
        <h3 className="text-xl font-bold">{institution}</h3>
        <div className="flex gap-4">
          <Button
            type="button"
            child={<EditIcon className="w-6" />}
            handler={editHandler}
          />
          <Button
            type="button"
            handler={removeHandler}
            child={<DeleteIcon className="w-6" />}
            styles="alert"
          />
        </div>
      </div>
      <h4 className="text-l font-bold text-neutral-600">{degree}</h4>
      <p className="mb-2 text-sm italic text-neutral-600">
        {startDate} - {endDate}
      </p>
      <div className="flex items-center gap-4">
        <p className="text-sm text-neutral-600">Graduated?</p>
        <p className="text-sm">{graduateDisplay(didGraduate)}</p>
      </div>
    </li>
  );
};

export default EducationItem;
