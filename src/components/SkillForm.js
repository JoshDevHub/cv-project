import React, { Component } from "react";

import Button from "./Button";
import Input from "./Input";

class SkillForm extends Component {
  render() {
    const { text } = this.props.skill;
    console.log(text);

    return (
      <form onSubmit={this.props.handleSubmit}>
        <label>Add Skill</label>
        <Input
          type="text"
          handler={this.props.handleChange}
          value={text}
          id="skill"
        />
        <Button type="submit" text="Add Skill" />
        <Button
          type="button"
          text="Close"
          handler={() => {
            console.log("boo");
          }}
        />
      </form>
    );
  }
}

export default SkillForm;
