import React, { Component } from "react";
import './categories.scss';

import { connect } from 'react-redux';
import { getCategories } from '../../store/actions/categories'

// import Ad from './Ad';


const mapStateToProps = state => {
  return {
    categories: state.categories,
  }
}

const matchDispatchToProps = dispatch => {
  return {
    getCategories: () => dispatch(getCategories())
  }
}


class Categories extends Component {

  componentDidMount() {
    this.props.getCategories();
  }

  render() {
    const { categories } = this.props

    return (
      <div className="categories">
        <div className="categories__wrap">
          {
            categories && categories.map(category => {
              return (
                <div className="category" key={category.id}>
                  <a className="category__title" href={`/${category.translit}`}>{ category.title }</a>
                  <div className="category__list">
                    {
                      category.list && category.list.map(subcategory => {
                        return (
                          <div className="subcategory" key={subcategory.id}>
                            <a className="subcategory__title" href={`/${subcategory.translit}`}>{ subcategory.title }</a>
                          </div>
                        )
                      })
                    }
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    );
  }
}

export default connect(
  mapStateToProps, 
  matchDispatchToProps
)(Categories)