import React, { useState, useEffect } from "react";
import cn from 'classnames/bind';
import s from './slider.module.scss';

const cx = cn.bind(s);

const Slider = ({ad}) => {

  const [currentSlide, setCurrentSlide] = useState(0)
  // const [transform, setTransform] = useState(`translate(${currentSlide ? `${-1 * currentSlide}00%` : 0}, 0)`)


  const prev = () => {
    let current = currentSlide;
    if(currentSlide > 0)
      setCurrentSlide(current -= 1);
    else
      setCurrentSlide(ad.images.length - 1);
  }

  const next = () => {
    let current = currentSlide;
    if(currentSlide < ad.images.length - 1)
      setCurrentSlide(current += 1);
    else
      setCurrentSlide(0);
  }

  const hover = (i) => {
    setCurrentSlide(i)
  }

  
  return (
    <div className={s.slider}>
      <div className={s.view}>
        <div className={s.track} style={{transform: `translate(${currentSlide ? `${-1 * currentSlide}00%` : 0}, 0)`}}>
          {
            ad && ad.images && ad.images.map((slide, i) => (
              <div
                className={cx(
                  s.slide,
                  {current: currentSlide === i}
                )}
                key={slide.id}
              >
                <img src={`http://localhost:5001/upload/img/source/${slide.url}`} alt={ad.title}/>
              </div>
            ))
          }
        </div>
        <div className={s.arrows}>
          <div className={s.arrowPrev} onClick={prev}></div>
          <div className={s.arrowNext} onClick={next}></div>
        </div>
      </div>
      <div className={s.nav}>
        <div className={s.track}>
          {
            ad && ad.images && ad.images.map((slide, i) => (
              <div 
                className={cx(
                  s.slide,
                  {current: currentSlide === i}
                )} 
                key={slide.id} 
                onMouseOver={() => hover(i)}
              >
                <img src={`http://localhost:5001/upload/img/small/${slide.url}`} alt={ad.title}/>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
}
export default Slider;