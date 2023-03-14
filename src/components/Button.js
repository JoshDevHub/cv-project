import React from "react";

const STYLES_MAP = new Map([
  ["primary", "bg-sky-800 border-sky-800 hover:text-sky-800"],
  ["alert", "bg-rose-700 border-rose-700 hover:text-rose-700"],
]);

const Button = (props) => {
  const { type, handler, value, styles } = props;
  const colors = STYLES_MAP.get(styles || "primary");

  return (
    <button
      type={type}
      {...(handler && { onClick: handler })}
      value={value ?? ""}
      className={`rounded-md border-2 p-1 font-bold text-white transition
                 hover:bg-transparent ${colors}`}
    >
      {props.text ?? props.child}
    </button>
  );
};

export default Button;
