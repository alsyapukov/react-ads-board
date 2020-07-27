import React, { useState, useEffect } from "react";
import s from './aside.module.scss';
import Button from '../../../components/base/Button'
import { priceFormat } from '../../../utils/priceFormat';

const Aside = ({ad}) => {
  
  return (
    <div className={s.aside}>
      <div className={s.wrap}>
        <div className={s.price}>
          <p>{priceFormat(ad.price, 'RUB', 'ru-RU')}</p>
        </div>
        <div className={s.phone}>
          <Button theme="pink" title="8 (996) 642-49-98" full={true} />
        </div>
      </div>
    </div>
  );
}
export default Aside;