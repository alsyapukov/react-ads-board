import React, { useState } from "react";
import s from './select.module.scss';

const Select = ({ options, changeValue }) => {
  const [value, setValue] = useState(0);
  const [view, setView] = useState(false);

  const toggle = () => {
    if (view) {
      close();
    } else {
      show();
    }
  };

  const show = () => {
    setView(true);
  };

  const close = () => {
    setView(false);
  };

  const choiceOption = (i) => {
    setValue(i);
    changeValue(i);
  };

  return (
    <div className={s.select} onClick={toggle}>
      <div className={s.selected}>{options[value].text}</div>
      {view && (
        <div className={s.list}>
          {options.map((option, i) => {
            return (
              <div
                className={s.option}
                onClick={() => choiceOption(i)}
                key={option.value}
              >
                {option.text}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
export default Select;
