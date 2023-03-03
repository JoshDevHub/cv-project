import React, { Component } from "react";

class Button extends Component {
  render() {
    const { type, text, handler, value } = this.props;

    return (
      <button
        type={type}
        onClick={handler}
        {...(handler && { onClick: handler })}
        value={value ?? ""}
      >
        {text}
      </button>
    )
  }
}

export default Button;
