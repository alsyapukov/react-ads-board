import React from "react";
import s from './ad.module.scss';
// import Ad from './Ad';

const CreateAd = ({id}) => {

  return (
    <main className="content">
      <div className={s.create_ad}>
        {id}
      </div>
    </main>
  );
}
export default CreateAd;