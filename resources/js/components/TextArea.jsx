import React, { useEffect, useRef } from 'react';

export default function TextArea({
  name,
  value,
  className = '',
  required,
  placeholder,
  autofocus,
  handleChange,

}) {
  const textarea = useRef();

  useEffect(() => {
    if (autofocus) {
      textarea.current.focus();
    }
  }, []);

  return (
    <textarea
      name={name}
      value={value}
      className={className}
      ref={textarea}
      required={required}
      placeholder={placeholder}
      onChange={(e) => handleChange(e)}
    />
  );
}
