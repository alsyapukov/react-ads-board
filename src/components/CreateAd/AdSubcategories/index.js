import React, { useState } from "react";
import cn from 'classnames/bind';
import s from './adCategories.module.scss';

let cx = cn.bind(s);


const AdSubcategories = ({choice, categories}) => {

  const [value, setValue] = useState('');

  const activeSubcategory = (val) => {
    setValue(val)
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
              onClick={() => activeSubcategory(category.id)}
            >
              {category.title}
            </li>
          )
        })
      }
    </ul>
  );
}
export default AdSubcategories;