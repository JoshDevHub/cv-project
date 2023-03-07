import React, { Component } from "react";

import Button from "./Button";
import Input from "./Input";

import uniqid from "uniqid";

class SkillForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      skill: {
        id: uniqid(),
        text: "",
      },
    }
  }

  onSubmit = (event) => {
    event.preventDefault();

    this.props.callback(this.state.skill)
    this.setState({
      skill: {
        text: "",
        id: uniqid(),
      }
    })
  }

  handleChange = (event) => {
    this.setState({
      skill: {
        text: event.target.value,
        id: this.state.skill.id,
      }
    })
  }

  render() {
    const { text } = this.state.skill

    return (
      <form onSubmit={this.onSubmit}>
        <label>Add Skill</label>
        <Input
          type="text"
          handler={this.handleChange}
          value={text}
          id="skill"
        />
        <Button type="submit" text="Add Skill" />
        <Button type="button" text="Close" handler={this.props.closeHandler} />
      </form>
    )
  }
}

export default SkillForm;
