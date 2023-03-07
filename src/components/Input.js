import React, { Component } from "react";

class Input extends Component {
  render() {
    const { type, handler, id, value } = this.props

    return (
      <input
        type={type}
        value={value}
        name={id}
        id={id}
        onChange={handler}
        className="border rounded-md px-2 py-1"
      />
    )
  }
}

export default Input
