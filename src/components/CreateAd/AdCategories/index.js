import React, { useState, useEffect } from "react";
import s from './adCategories.module.scss';
import cn from 'classnames/bind';

let cx = cn.bind(s);


const AdCategories = ({categories, choice}) => {

  const [value, setValue] = useState('');

  const activeCategory = (val) => {
    setValue(val);
    choice(val)
  }

  return (
    <ul className={s.categories}>
      {
        categories.map((category, i) => {
          return (
            <li 
              className={cx(
                'item',
                'calco',
                { active: value == category.id }
              )} 
              key={i} 
              onClick={() => activeCategory(category.id)}
            >
              {category.title}
            </li>
          )
        })
      }
    </ul>
  );
}
export default AdCategories;