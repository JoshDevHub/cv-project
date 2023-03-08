import React, { Component } from "react";

class Skills extends Component {
  render() {
    const { skills } = this.props;

    if (skills.length === 0) {
      return (
        <div>
          <p>You haven't added any skills yet</p>
        </div>
      );
    }

    return (
      <div>
        <ul>
          {skills.map((skill) => {
            return <li key={skill.id}>{skill.text}</li>;
          })}
        </ul>
      </div>
    );
  }
}

export default Skills;
