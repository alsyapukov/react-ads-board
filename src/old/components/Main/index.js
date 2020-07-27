import React from "react";
import s from './main.module.scss';

import Aside from "../../components/Aside/";
import Ads from './Ads';

const Main = () => {

  return (
    <main className="content">
      <Aside />
      <div className={'main'}>
        <Ads />
      </div>
    </main>
  );
}
export default Main;