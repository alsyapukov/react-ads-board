import React, { useState, useEffect } from "react";
import cn from 'classnames/bind';
import s from "./textBox.module.scss";

const cx = cn.bind(s);

const TextBox = ({ value, changeValue, required, error }) => {
  const [textValue, setTextValue] = useState("");

  useEffect(() => {
    setTextValue(value);
  }, []);

  const handleChange = (e) => {
    setTextValue(e.target.value);
    changeValue(e.target.value);
  };

  return (
    <div className={s.textbox}>
      <input
        className={cx(
          s.inner,
          { error }
        )}
        type="text"
        value={textValue}
        onChange={handleChange}
        required={required}
      />
    </div>
  );
};
export default TextBox;
