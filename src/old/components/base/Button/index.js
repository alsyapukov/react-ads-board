import React from "react";
import cn from 'classnames/bind';
import s from "./button.module.scss";

const cx = cn.bind(s);

const Button = ({title, type, theme, click}) => {
  return (
    <button
      className={cx(
        s.button,
        {[`button_${theme}`]: theme}
      )}
      onClick={click}
      type={type ? type : null}
    >
      {title ? title : "Button"}
    </button>
  );
};

export default Button;
