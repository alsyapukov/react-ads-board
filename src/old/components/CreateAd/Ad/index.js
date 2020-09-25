import React, { Component } from "react";
import cn from 'classnames/bind';
import s from './ad.module.scss';

import { connect } from 'react-redux';
import { getCategories } from '../../../store/actions/categories'
import { getSubcategories } from '../../../store/actions/subcategories'
import { Ads } from '../../../api'

import TextBox from '../../../components/base/TextBox';
import TextArea from '../../../components/base/TextArea';
import RadioGroup from '../../../components/base/RadioGroup';
import AdField from '../AdField';
import AdCategories from '../AdCategories';
import AdSubcategories from '../AdSubcategories';
import LeafletMap from '../../../containers/LeafletMap';
import DropZone from '../../../components/base/DropZone';
import Button from '../../../components/base/Button'

let cx = cn.bind(s);


const mapStateToProps = state => {
  return {
    categories: state.categories,
    subcategories: state.subcategories
  }
}

const matchDispatchToProps = dispatch => {
  return {
    getCategories: () => dispatch(getCategories()),
    getSubcategories: () => dispatch(getSubcategories())
  }
}

class Ad extends Component {

  state = {
    ad: {
      category: 1,
      subcategory: 2,
      images: [],
      title: "Новое объявление",
      description: "Текст объявления",
      condition: 1,
      price: 120000,
      address: '',
      coords: []
    },
    condition: {
      name: "condition",
      options: [
        {
          title: "Б/у",
          value: 1,
        },
        {
          title: "Новое",
          value: 2
        }
      ]
    },
    map: null,
    actionBegin: false,
    navigator: null
  }

  componentDidMount() {
    this.props.getCategories();
    this.props.getSubcategories();
  }

  setCategory = (e) => {
    this.setState({
      ad: { ...this.state.ad, category: e }
    })
  }

  setSubcategory = (e) => {
    this.setState({
      ad: { ...this.state.ad, subcategory: e }
    })
  }

  setImages = (e) => {
    this.setState({
      ad: { ...this.state.ad, images: e }
    })
  }

  setTitle = (e) => {
    this.setState({
      ad: { ...this.state.ad, title: e }
    })
  }

  setDescription = (e) => {
    this.setState({
      ad: { ...this.state.ad, description: e }
    })
  }

  setCondition = (e) => {
    this.setState({
      ad: { ...this.state.ad, condition: e }
    })
  }

  setPrice = (e) => {
    this.setState({
      ad: { ...this.state.ad, price: e }
    })
  }

  setCoords = (e) => {
    this.setState({
      ad: { ...this.state.ad, address: e.address, coords: e.coords }
    })
  }

  chooseMap = (val) => {
    this.setState({
      actionBegin: val
    })
  }

  initMap = (val) => {
    console.log('initMap')
    this.setState({
      map: val
    })
  }

  getNavigator = (e) => {
    navigator.geolocation.getCurrentPosition((position) => {
      var lat = position.coords.latitude;
      var lng = position.coords.longitude;

      this.setState(() => ({
        navigator: [lat, lng]
      }))
      this.state.map.flyTo([lat, lng], 17);
    })
  }

  sendAd = () => {
    Ads.create(this.state.ad)
  }

  render() {

    const { categories, subcategories } = this.props

    return (
      <div className={s.ad}>
        <h1 className={s.title}>
          Разместить объявление на LULU
        </h1>
        <div className={s.body}>

          <AdField title="Выберите категорию">
            {
              categories && <AdCategories categories={categories} choice={this.setCategory}/>
            }
          </AdField>

          <AdField title="Выберите подкатегорию">
            {
              subcategories && <AdSubcategories categories={subcategories.filter(cat => cat.category == this.state.ad.category)} choice={this.setSubcategory}/>
            }
          </AdField>

          <AdField title="Загрузить фотографии">
            <DropZone images={this.setImages}/>
          </AdField>

          <AdField title="Заголовок объявления">
            <TextBox value={this.state.ad.title} changeValue={this.setTitle} />
          </AdField>

          <AdField title="Описание вашего объявления">
            <TextArea value={this.state.ad.description} changeValue={this.setDescription} />
          </AdField>

          <AdField title="Состояние">
            <RadioGroup name={this.state.condition.name} options={this.state.condition.options} changeValue={this.setCondition} />
          </AdField>

          <AdField title="Цена">
            <TextBox value={this.state.ad.price} changeValue={this.setPrice} />
          </AdField>

          <AdField title="Ваше местоположение">
            {/* <div>{this.state.ad.location.coords}</div>
            <div>{this.state.ad.location.address}</div> */}
            <div className={s.navigator}>
              <Button theme="pink" title="Определить местоположение" click={this.getNavigator} />
            </div>
            <div 
              className={s.map}
              onMouseDown={() => this.chooseMap(true)}
              onMouseUp={() => this.chooseMap(false)}
              onMouseOut={() => this.chooseMap(false)}
            >
              <div className={s.mapShadow} />
              <LeafletMap updateCenter={this.setCoords} initMap={this.initMap}/>
              <div className={s.point}>
                <span
                  className={cx(
                    'icon_wps_point',
                    {pointJump: this.state.actionBegin}
                  )}
                ></span>
                <div className={cx(
                  s.shadow,
                  {shadowResize: this.state.actionBegin}
                )}></div>
              </div>
            </div>
          </AdField>

          <AdField title="Ваше местоположение">
            <div className={s.navigator}>
              <Button theme="pink" title="Отправить данные" click={this.sendAd} />
            </div>
          </AdField>


        </div>
      </div>
    );
  }
}
export default connect(
  mapStateToProps,
  matchDispatchToProps
)(Ad)