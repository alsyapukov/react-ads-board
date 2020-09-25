import React, { useState, useEffect } from "react";
import cn from 'classnames/bind';
import s from './auth.module.scss';

import TextBox from '../base/TextBox';
import Button from '../base/Button';
import { Users } from '../../api';

import { useCookies } from 'react-cookie';

let cx = cn.bind(s);

const Auth = () => {

  const [user, setUser] = useState({
    email: null,
    password: null
  });

  const [cookies, setCookie] = useCookies(['token']);

  const setUserEmail = (val) => {
    setUser({ ...user, email: val })
  }

  const setUserPassword = (val) => {
    setUser({ ...user, password: val })
  }

  const sendUserData = () => {
    Users.auth(user)
      .then(res => {
        if(res) {
          setCookie('token', res.data.token, { path: '/' });
        }
      })
  }
  

  return (
    <div className={s.auth}>
      <div className={s.authBlock}>

        <div className={s.item}>
          <p className={s.title}>Email</p>
          <TextBox value={user.email} changeValue={setUserEmail}/>
        </div>

        <div className={s.item}>
          <p className={s.title}>Password</p>
          <TextBox value={user.password} changeValue={setUserPassword}/>
        </div>

        <div className={cx(
          s.item,
          s.itemButton
        )}>
          <Button theme="pink" title="Войти" click={sendUserData} />
        </div>

      </div>
    </div>
  );
}
export default Auth;