import React, { Component } from "react";

import Button from "./Button";
import Input from "./Input";

class SkillForm extends Component {
  render() {
    const { text } = this.props.skill;

    return (
      <form onSubmit={this.props.handleSubmit}>
        <div className="mb-2">
          <label className="sr-only">Add Skill</label>
          <Input
            type="text"
            handler={this.props.handleChange}
            value={text}
            id="skill"
          />
        </div>
        <div className="flex gap-4">
          <Button type="submit" text="Add Skill" styles="primary" />
          <Button
            type="button"
            text="Cancel"
            styles="alert"
            handler={this.props.handleClose}
          />
        </div>
      </form>
    );
  }
}

export default SkillForm;
