import React, { useState, useEffect } from "react";
import s from './auto.module.scss';
import cn from 'classnames/bind';

import Select from '../../../base/Select'

let cx = cn.bind(s);

const type = [
  {
    text: "Тип кузова",
    value: 0
  },
  {
    text: "Седан",
    value: 0
  },
  {
    text: "Хетчбэк",
    value: 1
  },
  {
    text: "Кроссовер",
    value: 2
  },
]


const Auto = ({category, subcategory}) => {

  return (
    <div className={s.auto}>
      <div className={s.item}>
        <Select options={type}/>
      </div>
      <div className={s.item}>
        <Select options={type}/>
      </div>
      <div className={s.item}>
        <Select options={type}/>
      </div>
      <div className={s.item}>
        <Select options={type}/>
      </div>
    </div>
  );
}
export default Auto;