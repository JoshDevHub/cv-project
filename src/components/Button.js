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
        className="rounded-md border-2 border-sky-800 bg-sky-800 p-1 font-bold
                   text-white hover:bg-transparent hover:text-sky-800"
      >
        {text}
      </button>
    );
  }
}

export default Button;
