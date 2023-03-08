import "./index.css";
import React, { Component } from "react";

import GeneralInfo from "./components/GeneralInfo";
import GeneralInfoForm from "./components/GeneralInfoForm";
import Skills from "./components/Skills";
import SkillForm from "./components/SkillForm";

import Button from "./components/Button";

import FORM_STATES from "./utils/form_states";

import GeneralInfoModel from "./models/general_info_model";

import { objFromForm } from "./utils/object_helpers";

class App extends Component {
  constructor() {
    super();

    this.state = {
      genInfo: GeneralInfoModel(),
      skills: [],
      formComponent: FORM_STATES.None,
    };
  }

  isFormFor(state) {
    return this.state.formComponent === FORM_STATES[state];
  }

  handleOpenFormClick = (identifier) => {
    return () => {
      this.setState({
        formComponent: FORM_STATES[identifier],
      });
    };
  };

  handleCloseFormClick = () => {
    this.setState({
      formComponent: FORM_STATES.None,
    });
  };

  onSubmitInfo = (event) => {
    event.preventDefault();

    const data = objFromForm(event.target);
    this.setState({
      genInfo: GeneralInfoModel(data),
      formComponent: FORM_STATES.None,
    });
  };

  addSkill = (skill) => {
    this.setState({
      skills: [...this.state.skills, skill],
    });
  };

  render() {
    const { genInfo, skills } = this.state;

    return (
      <div className="min-h-screen bg-slate-900 py-8">
        <div className="mx-auto max-w-4xl bg-white">
          {this.isFormFor("Info") ? (
            <GeneralInfoForm info={genInfo} handleSubmit={this.onSubmitInfo} />
          ) : (
            <GeneralInfo
              info={genInfo}
              clickHandler={this.handleOpenFormClick("Info")}
            />
          )}
          <Skills skills={skills} />
          {this.isFormFor("Skills") ? (
            <SkillForm
              skills={skills}
              closeHandler={this.handleCloseFormClick}
              callback={this.addSkill}
            />
          ) : (
            <Button
              handler={this.handleOpenFormClick("Skills")}
              text="Add Skills"
              type="button"
            />
          )}
        </div>
      </div>
    );
  }
}

export default App;
