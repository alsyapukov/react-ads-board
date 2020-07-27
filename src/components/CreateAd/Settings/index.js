import React, { useState, useEffect } from "react";
import s from './settings.module.scss';
import cn from 'classnames/bind';

import Auto from './Auto'

let cx = cn.bind(s);


const Settings = ({category, subcategory}) => {

  return (
    <div className={s.settings}>
      {
        category === 1 && subcategory === 1 && <Auto />
      }
    </div>
  );
}
export default Settings;