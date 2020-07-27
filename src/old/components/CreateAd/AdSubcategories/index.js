import React, { Component } from "react";
import cn from 'classnames/bind';
import s from './adCategories.module.scss';

let cx = cn.bind(s);


class AdSubcategories extends Component {

  state = {
    value: null
  }

  activeSubcategory = (val) => {
    this.setState({
      value: val
    })
    this.props.choice(val)
  }

  render() {
    return (
      <ul className={s.categories}>
        {
          this.props.categories.map((category, i) => {
            return (
              <li 
                className={cx(
                  'item',
                  'calco',
                  { active: this.state.value == category.id }
                )} 
                key={i} 
                onClick={() => this.activeSubcategory(category.id)}
              >
                {category.title}
              </li>
            )
          })
        }
      </ul>
    );
  }
}
export default AdSubcategories;