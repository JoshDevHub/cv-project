import "./index.css";
import React, { Component } from "react";

import GeneralInfo from "./components/GeneralInfo";
import GeneralInfoForm from "./components/GeneralInfoForm";

import FORM_STATES from "./utils/form_states";

import GeneralInfoModel from "./models/general_info_model";

import { objFromForm } from "./utils/object_helpers";

class App extends Component {
  constructor() {
    super();

    this.state = {
      genInfo: GeneralInfoModel(),
      formComponent: FORM_STATES.None,
    }
  }

  isFormFor(state) {
    return this.state.formComponent === FORM_STATES[state];
  }

  handleOpenFormClick = (identifier) => {
    return () => {
      this.setState({
        formComponent: FORM_STATES[identifier]
      })
    }
  }

  onSubmitInfo = (event) => {
    event.preventDefault();

    const data = objFromForm(event.target);
    this.setState({
      genInfo: GeneralInfoModel(data),
      formComponent: FORM_STATES.None
    })
  }

  render() {
    const { genInfo } = this.state

    return (
      <div>
        {this.isFormFor("Info")
          ? <GeneralInfoForm info={genInfo} handleSubmit={this.onSubmitInfo} />
          : <GeneralInfo info={genInfo} clickHandler={this.handleOpenFormClick("Info")} />
        }
      </div>
    )
  }
}

export default App;
