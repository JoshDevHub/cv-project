import React, { Component } from "react";

const graduateDisplay = (bool) => (bool ? "Yes" : "No");

class EducationItem extends Component {
  render() {
    const { id, startDate, endDate, degree, institution, didGraduate } =
      this.props.data;

    return (
      <li key={id} className="mb-6">
        <h3 className="text-xl font-bold">{institution}</h3>
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
  }
}

export default EducationItem;
