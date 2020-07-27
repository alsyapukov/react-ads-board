import React, { Component } from "react";
import s from './ad.module.scss';

import { dateFormatTime } from '../../../../utils/dateFormat';
import { priceFormat } from '../../../../utils/priceFormat';
import { Link } from "react-router-dom";

const Ad = ({ad}) => {

  return (
    <Link to={`/ad/${ad._id}`} className={s.ad}>
      <div className={s.wrap} title={ad.description}>

        <div className={s.img}>
          { ad.image &&
            <img src={`http://localhost:5001/upload/img/source/${ad.image.url}`} alt={ad.description} />
          }
        </div>

        <div className={s.content}>
          
          <div className={s.main}>
            <div className={s.title}>{ad.title}</div>
            <div className={s.price}>{priceFormat(ad.price, 'RUB', 'ru-RU')}</div>
          </div>

          <div className={s.other}>
            <div className={s.location}>{ad.location}</div>
            <div className={s.date}>{dateFormatTime(ad.dateAdd, 'ru-RU')}</div>
          </div>
        </div>

      </div>
    </Link>
  )
}

export default Ad