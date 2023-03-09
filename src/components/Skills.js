import React, { Component } from "react";

import SkillForm from "./SkillForm";
import Button from "./Button";

import uniqid from "uniqid";

class Skills extends Component {
  constructor(props) {
    super(props);

    this.state = {
      skills: [],
      skill: {
        id: uniqid(),
        text: "",
      },
      showForm: false,
    };
  }

  addSkill = (event) => {
    event.preventDefault();

    this.setState({
      skills: [...this.state.skills, this.state.skill],
      skill: {
        id: uniqid(),
        text: "",
      },
    });
  };

  handleChange = (event) => {
    this.setState({
      skill: {
        id: this.state.skill.id,
        text: event.target.value,
      },
    });
  };

  openForm = () => {
    this.setState({
      showForm: true,
    });
  };

  skillList() {
    if (this.state.skills.length === 0) {
      return <p>You haven't added any skills yet</p>;
    }

    return (
      <ul className="flex flex-wrap gap-4">
        {this.state.skills.map((skill) => {
          return (
            <li
              key={skill.id}
              className="rounded-md bg-sky-800 px-2 py-1 text-white"
            >
              {skill.text}
            </li>
          );
        })}
      </ul>
    );
  }

  render() {
    return (
      <div className="px-8 py-4">
        <h2 className="mb-4 text-2xl font-bold text-sky-800">Skills</h2>
        {this.skillList()}
        {this.state.showForm ? (
          <SkillForm
            handleSubmit={this.addSkill}
            handleChange={this.handleChange}
            skill={this.state.skill}
          />
        ) : (
          <Button handler={this.openForm} text="Add Skills" type="button" />
        )}
      </div>
    );
  }
}

export default Skills;
