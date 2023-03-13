import React, { Component } from "react";

import Button from "./Button";
import Input from "./Input";

class GeneralInfoForm extends Component {
  render() {
    const { handleChange, handleSubmit, info } = this.props;
    const { name, jobTitle, description, phoneNumber, email, city } = info;

    return (
      <div className="flex flex-col items-center px-8 py-4">
        <h2 className="mb-2 text-2xl font-bold">Edit Info</h2>
        <form onSubmit={handleSubmit} className="mx-4 flex flex-col gap-4">
          <div className="flex flex-wrap gap-8">
            <div className="flex flex-col">
              <label htmlFor="name">Name</label>
              <Input
                type="text"
                value={name}
                id="name"
                handler={handleChange}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="jobTitle">Title</label>
              <Input
                type="text"
                value={jobTitle}
                id="jobTitle"
                handler={handleChange}
              />
            </div>
          </div>
          <div className="flex flex-col">
            <label htmlFor="description">Description</label>
            <textarea
              onChange={handleChange}
              value={description}
              id="description"
              name="description"
              placeholder="Give a short description of yourself"
              className="rounded-md border px-2 py-1"
              rows="4"
            />
          </div>
          <div className="mb-4 flex gap-4">
            <div className="flex flex-col">
              <label htmlFor="phoneNumber">Phone Number</label>
              <Input
                type="text"
                value={phoneNumber}
                id="phoneNumber"
                handler={handleChange}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="email">Email</label>
              <Input
                type="email"
                value={email}
                id="email"
                handler={handleChange}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="city">City</label>
              <Input
                type="text"
                value={city}
                id="city"
                handler={handleChange}
              />
            </div>
          </div>
          <div>
            <Button type="submit" text="Add Information" />
          </div>
        </form>
      </div>
    );
  }
}

export default GeneralInfoForm;
