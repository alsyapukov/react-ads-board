import React, { useState, useEffect } from "react";
import cn from 'classnames/bind';
import s from './ad.module.scss';
import { Ads } from '../../api'
import Head from './Head'
import Slider from './Slider'
import LeafletMap from '../../containers/LeafletMap';
import Aside from './Aside'

const cx = cn.bind(s);

const Ad = ({id}) => {
  const [ad, setAd] = useState({});
  const [fullMap, setFullMap] = useState(false);

  useEffect(() => {
    Ads.getAd(id)
      .then(res => {
        setAd(res.data)
      })
  }, []);

  const handleFullMap = () => {
    setFullMap(!fullMap);
  }
  
  return (
    <main className="content">
      {
        ad &&
        <div className={s.ad}>
          <div className={s.main}>
            <Head ad={ad}/>
            <Slider ad={ad} />
            <div className={s.block}>
              <div className={s.hr}/>
              <p className={s.title}>Описание</p>
              <div className={s.body}>
                <div className={s.description}>
                  <p>{ad.description}</p>
                </div>
              </div>
            </div>
            <div className={s.block}>
              <div className={s.hr}/>
              <p className={s.title}>Местоположение</p>
              <div className={s.body}>
                <div className={s.address}>
                  <p>{ad.address}</p>
                </div>
                <div
                  className={cx(
                    s.map,
                    {full: fullMap}
                  )}
                >
                  <LeafletMap coords={ad.coords}/>
                </div>
                <p className={s.full} onClick={handleFullMap}>{fullMap ? 'Свернуть карту' : 'Развернуть карту'}</p>
              </div>
              <div className={s.hr}/>
            </div>
          </div>
          <div className={s.aside}>
            <Aside ad={ad}/>
          </div>
        </div>
      }
    </main>
  );
}
export default Ad;