import React, { useState, useEffect } from "react";
import s from './textArea.module.scss'

const TextArea = ({value, changeValue}) => {

  const [textValue, setTextValue] = useState('');

  const handleChange = (e) => {
    setTextValue(e.target.value);
    changeValue(e.target.value);
  }

  useEffect(() => {
    setTextValue(value)
  }, [])

  return (
    <div className={s.textarea}>
      <textarea
        className={s.inner}
        value={textValue}
        onChange={handleChange}
      />
    </div>
  );
}
export default TextArea;