import React, { useRef, useEffect } from "react";
import PropTypes from "prop-types";
export default function InputWithLabel({ id, value, onChange, children }) {
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <>
      <label> {children}</label>
      <input id={id} value={value} onChange={onChange} ref={inputRef} />
    </>
  );
}

InputWithLabel.propTypes = {
  id: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  children: PropTypes.node,
};
