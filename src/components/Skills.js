import React, { Component } from "react";

class Skills extends Component {
  heading() {
    return <h2 className="mb-4 text-2xl font-bold text-sky-800">Skills</h2>;
  }

  render() {
    const { skills } = this.props;

    if (skills.length === 0) {
      return (
        <div className="px-8 py-4">
          {this.heading()}
          <p>You haven't added any skills yet</p>
        </div>
      );
    }

    return (
      <div className="px-8 py-4">
        {this.heading()}
        <ul className="flex flex-wrap gap-4">
          {skills.map((skill) => {
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
      </div>
    );
  }
}

export default Skills;
