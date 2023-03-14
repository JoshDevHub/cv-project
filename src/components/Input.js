import React from "react";

const Input = (props) => {
  const { type, handler, id, value } = props;

  return (
    <input
      type={type}
      value={value}
      name={id}
      id={id}
      onChange={handler}
      className="rounded-md border px-2 py-1"
    />
  );
};

export default Input;
