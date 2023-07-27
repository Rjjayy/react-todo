import React, { useRef, useEffect } from "react";
import PropTypes from "prop-types";

export default function InputWithLabel({ id, value, onChange, children }) {
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <>
      <label>{children}</label>
      <input
        id={id}
        value={value}
        onChange={onChange}
        ref={inputRef}
      />
    </>
  );
}

InputWithLabel.propTypes = {
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};
