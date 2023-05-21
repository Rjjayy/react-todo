import React, { useRef, useEffect } from 'react';

export default function InputWithLabel(props) {
    const inputRef = useRef();

    useEffect(() => {
        inputRef.current.focus();
      }, []);

  return (
    
    <>

      <label htmlFor={props.id}>{props.children}</label>
      <input
        id={props.id}
        value={props.value}
        onChange={props.onChange}
        ref={inputRef}
      />
    </>
  );
}
