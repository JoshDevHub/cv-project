import React, { Component } from "react";

import { isEmpty } from "../utils/object_helpers";

class GeneralInfo extends Component {
  render() {
    if (isEmpty(this.props.info)) {
      return (
        <div>
          <p>You haven't filled out this information yet</p>
          <button
            className="border border-black"
            onClick={this.props.clickHandler}
            data-component="Info"
          >
            Add General Information
          </button>
        </div>
      )
    }

    return <div>Hello from gen info.</div>;
  }
}

export default GeneralInfo;
