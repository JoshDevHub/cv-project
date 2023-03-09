import React, { Component } from "react";

class Work extends Component {
  render() {
    console.log(this.props);

    const { id, startDate, endDate, jobTitle, companyName, responsibilities } =
      this.props.data;

    return (
      <li key={id}>
        <p>{companyName}</p>
        <p>{jobTitle}</p>
        <p>{startDate}</p>
        <p>{endDate}</p>
        <p>{responsibilities}</p>
      </li>
    );
  }
}

export default Work;
