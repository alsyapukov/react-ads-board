import React, { useState, useEffect } from "react";
import s from './breadCrumbs.module.scss';

const BreadCrumbs = () => {
  
  return (
    <div className={s.breadCrumbs}>
      Все объявления (Ульяновск) / Транспорт / Легковые автомобили / С пробегом / ВАЗ (Lada)21099
    </div>
  );
}
export default BreadCrumbs;