import "./index.css";
import React, { Component } from "react";

import GeneralInformation from "./components/GeneralInformation";
import Skills from "./components/Skills";

class App extends Component {
  render() {
    return (
      <div className="min-h-screen bg-slate-900 py-8">
        <div className="mx-auto max-w-4xl bg-white">
          <GeneralInformation />
          <Skills />
        </div>
      </div>
    );
  }
}

export default App;
