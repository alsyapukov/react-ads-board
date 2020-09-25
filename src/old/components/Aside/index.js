import React, { Component } from "react";
import '../../components/Aside/aside.scss'

import Categories from '../../containers/Categories';

class Aside extends Component {
  render() {
    return (
      <div className="aside">
        <div className="aside__sticky">
          <Categories />
        </div>
      </div>
    );
  }
}
export default Aside;