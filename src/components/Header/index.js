import React, { Component } from "react";
import './header.scss'

import { Link } from "react-router-dom";

import SearchBar from '../../components/Header/SearchBar'
import Button from '../../components/base/Button'

class Header extends Component {
  render() {
    return (
      <header className="header">
        <div className="header__wrap">
          <Link to="/">
            <div className="header__logo logo">
              <div className="logo__img"></div>
              <div className="logo__text">Lulu</div>
            </div>
          </Link>
          <SearchBar className="header__search-bar" />
          <div className="header__create-ad">
            <Link to="/create_ad">
              <Button theme="pink" title="Создать объявление" />
            </Link>
          </div>
        </div>
      </header>
    );
  }
}
export default Header;