import React, { useState, useEffect } from "react";
import cn from 'classnames/bind';
import s from './radioGroup.module.scss';
let cx = cn.bind(s);

const RadioGroup = ({name, options, changeValue}) => {

  const [value, setValue] = useState(null);

  const handleChange = (e) => {
    setValue(e.target.value);
    changeValue(e.target.value);
  }

  useEffect(() => {
    if(!value) {
      setValue(options[0].value);
    }
  }, [])

  return (
    <div className={s.radio}>
      {
        options.map(radio => {
          return (
            <div className={s.item} key={radio.value}>
              <input
                className={s.inner}
                type="radio"
                id={radio.value}
                name={name}
                value={radio.value}
                onChange={handleChange}
                checked={value == radio.value}
              />
              <label className={s.label} htmlFor={radio.value}>{ radio.title }</label>
            </div>
          )
        })
      }
    </div>
  );
}
export default RadioGroup;