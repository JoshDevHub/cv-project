import React, { Component } from "react";

const STYLES_MAP = new Map([
  ["primary", "bg-sky-800 border-sky-800 hover:text-sky-800"],
  ["alert", "bg-rose-700 border-rose-700 hover:text-rose-700"],
]);

class Button extends Component {
  render() {
    const { type, text, handler, value, styles } = this.props;
    const colors = STYLES_MAP.get(styles || "primary");

    return (
      <button
        type={type}
        onClick={handler}
        {...(handler && { onClick: handler })}
        value={value ?? ""}
        className={`rounded-md border-2 p-1 font-bold text-white transition
                   hover:bg-transparent ${colors}`}
      >
        {text}
      </button>
    );
  }
}

export default Button;
