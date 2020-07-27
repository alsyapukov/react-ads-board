import React, { useState } from "react";
import s from './locationsList.module.scss';

const enhanceWithClickOutside = require('react-click-outside');

const LocationsList = (() => {
  const LocationsList = ({view, close, updateData, locations}) => {

    const [viewList, setViewList] = useState(false)
    const [value, setValue] = useState('')

    const setValueList = (val) => {
      setValue(val)
      setViewList(false)
      updateData(val);
      close();
    }

    const handleClickOutside = () => {
      if (viewList) {
        close();
      }
    }

    return (
      view &&
      (
        <div className={s.locationsList}>
          {
            locations.map((location, i) => {
              return <div 
                className={s.item}
                onFocus={() => setViewList(true)} 
                onClick={() => setValueList(location.name)} 
                key={location.name}
              >
                <span>{location.name}</span>
                <span className={s.subject}>{`, ${location.subject}`}</span>
              </div>
            })
          }
        </div>
      )
    );
  }
  return enhanceWithClickOutside(LocationsList);
})();

export default LocationsList;