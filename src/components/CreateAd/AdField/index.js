import React from "react";
import s from './adField.module.scss';

const AdField = ({title, children}) => {

  return (
    <div className={s.field}>
      <div className={s.title}>
        {title}
      </div>
      <div className={s.body}>
        {/* <img src="https://colorlib.com/wp/wp-content/uploads/sites/2/jquery-file-upload-scripts.png" /> */}
        {children}
      </div>
    </div>
  );
}
export default AdField;