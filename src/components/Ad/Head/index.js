import React, { useState, useEffect } from "react";
import s from './head.module.scss';
import BreadCrumbs from './BreadCrumbs'

const Head = ({ad}) => {
  
  return (
    <div className={s.head}>
      <div className={s.block}>
        <BreadCrumbs />
      </div>
      <div className={s.block}>
        <h1 className={s.title}>{ ad.title }</h1>
      </div>
    </div>
  );
}
export default Head;