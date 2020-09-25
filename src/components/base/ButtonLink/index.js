import React from "react";
import cn from "classnames/bind";
import s from "./buttonLink.module.scss";

const cx = cn.bind(s);

const ButtonLink = ({ title, type, theme, click, href, target }) => {
  return (
    <a
      className={cx(
        s.button,
        {[`button_${theme}`]: theme}
      )}
      href={href}
      target={target}
      onClick={click}
      type={type}
    >
      {title ? title : "Button"}
    </a>
  );
};

export default ButtonLink;
