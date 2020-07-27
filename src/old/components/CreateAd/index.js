import React from "react";
import s from './createAd.module.scss';
import Ad from './Ad';

const CreateAd = () => {

  return (
    <main className="content">
      <div className={s.create_ad}>
        <Ad />
      </div>
    </main>
  );
}
export default CreateAd;