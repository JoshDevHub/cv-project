import React, { Component } from "react";

class Work extends Component {
  render() {
    const { id, startDate, endDate, jobTitle, companyName, responsibilities } =
      this.props.data;

    return (
      <li key={id} className="mb-6">
        <h3 className="text-xl font-bold">{companyName}</h3>
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
  }
}

export default Work;
