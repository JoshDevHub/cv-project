import React from "react";

import { ReactComponent as DeleteIcon } from "../assets/icons/delete-outline.svg";
import { ReactComponent as EditIcon } from "../assets/icons/pencil-outline.svg";

import Button from "./Button";

const Work = ({ data, editHandler, removeHandler }) => {
  const { startDate, endDate, jobTitle, companyName, responsibilities } = data;

  return (
    <li className="mb-6">
      <div className="flex justify-between">
        <h3 className="text-xl font-bold">{companyName}</h3>
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
      <h4 className="text-l font-bold text-neutral-600">{jobTitle}</h4>
      <p className="mb-2 text-sm italic text-neutral-600">
        {startDate} - {endDate}
      </p>
      <div>
        <h5 className="text-sm italic text-neutral-600">Responsibilities</h5>
        <p>{responsibilities}</p>
      </div>
    </li>
  );
};

export default Work;
