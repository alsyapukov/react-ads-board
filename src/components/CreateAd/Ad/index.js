import React, { useState, useEffect } from "react";
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
import Settings from '../Settings';
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

const Ad = ({ categories, subcategories, getCategories, getSubcategories }) => {

  const [ad, setAd] = useState({
    category: 1,
    subcategory: 2,
    images: [],
    title: "Новое объявление",
    description: "Текст объявления",
    condition: 1,
    price: 120000,
    address: '',
    coords: []
  });

  const [condition, setCondition] = useState({
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
  })

  const [map, setMap] = useState(null)
  const [actionBegin, setActionBegin] = useState(false)
  const [navigator, setNavigator] = useState(null)

  useEffect(() => {
    getCategories();
    getSubcategories();
  }, []);

  const setCategory = (e) => {
    setAd({ ...ad, category: e })
  }

  const setSubcategory = (e) => {
    setAd({ ...ad, subcategory: e })
  }

  const setImages = (e) => {
    setAd({ ...ad, images: e })
  }

  const setTitle = (e) => {
    setAd({ ...ad, title: e })
  }

  const setDescription = (e) => {
    setAd({ ...ad, description: e })
  }

  const setConditionAction = (e) => {
    setAd({ ...ad, condition: e })
  }

  const setPrice = (e) => {
    setAd({ ...ad, price: e })
  }

  const setCoords = (e) => {
    setAd({ ...ad, address: e.address, coords: e.coords })
  }

  const chooseMap = (val) => {
    setActionBegin(val)
  }

  const initMap = (val) => {
    setMap(val)
  }

  const getNavigator = (e) => {
    navigator.geolocation.getCurrentPosition((position) => {
      var lat = position.coords.latitude;
      var lng = position.coords.longitude;

      setNavigator([lat, lng]);
      map.flyTo([lat, lng], 17);
    })
  }

  const sendAd = () => {
    Ads.create(ad)
  }

  return (
    <div className={s.ad}>
      <h1 className={s.title}>
        Разместить объявление на LULU
        </h1>
      <div className={s.body}>

        <AdField title="Выберите категорию">
          {
            categories && <AdCategories categories={categories} choice={setCategory} />
          }
        </AdField>

        <AdField title="Выберите подкатегорию">
          {
            subcategories && <AdSubcategories categories={subcategories.filter(cat => cat.category == ad.category)} choice={setSubcategory} />
          }
        </AdField>

        <AdField title="Детальное описание">
          {
            <Settings category={ad.category} subcategory={ad.subcategory} />
          }
        </AdField>

        <AdField title="Загрузить фотографии">
          <DropZone images={setImages} />
        </AdField>

        <AdField title="Заголовок объявления">
          <TextBox value={ad.title} changeValue={setTitle} />
        </AdField>

        <AdField title="Описание вашего объявления">
          <TextArea value={ad.description} changeValue={setDescription} />
        </AdField>

        <AdField title="Состояние">
          <RadioGroup name={condition.name} options={condition.options} changeValue={setConditionAction} />
        </AdField>

        <AdField title="Цена">
          <TextBox value={ad.price} changeValue={setPrice} />
        </AdField>

        <AdField title="Ваше местоположение">
          <div className={s.navigator}>
            <Button theme="pink" title="Определить местоположение" click={getNavigator} />
          </div>
          <div
            className={s.map}
            onMouseDown={() => chooseMap(true)}
            onMouseUp={() => chooseMap(false)}
            onMouseOut={() => chooseMap(false)}
          >
            <div className={s.mapShadow} />
            <LeafletMap updateCenter={setCoords} initMap={initMap} />
            <div className={s.point}>
              <span
                className={cx(
                  'icon_wps_point',
                  { pointJump: actionBegin }
                )}
              ></span>
              <div className={cx(
                s.shadow,
                { shadowResize: actionBegin }
              )}></div>
            </div>
          </div>
        </AdField>

        <AdField title="Ваше местоположение">
          <div className={s.navigator}>
            <Button theme="pink" title="Отправить данные" click={sendAd} />
          </div>
        </AdField>


      </div>
    </div>
  );
}
export default connect(
  mapStateToProps,
  matchDispatchToProps
)(Ad)