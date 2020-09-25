import React, { useState } from "react";
import './search.scss';
import SearchList from './SearchList';
import { Location } from '../../../../api'
// import { searchValue } from 'src/store/actions'
const enhanceWithClickOutside = require('react-click-outside');

const LocationChoice = () => {

  const [view, setView] = useState(false)
  const [value, setValue] = useState('')
  const [locations, setLocations] = useState([])

  const viewSearchList = (val) => {
    setView(val);
  }

  const searchChange = (e) => {
    if(e.target.value.length > 0) {
      viewSearchList(true)
      Location.searchLocation(e.target.value)
        .then(res => {
          searchFilter(res.data)
        })
    } else {
      viewSearchList(false)
    }
    setValue(e.target.value)
  }

  const searchFilter = (val) => {
    setLocations(val)
  }

  const updateData = (value) => {
    setValue(value)
  }

  const close = () => {
    setView(false);
  }

  const show = () => {
    setView(true);
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      updateData(
        locations.length > 0 
          ? locations[0].name
          : ""
      );
      close();
    }
  }

  return (
    <div className="search">
      <input type="text" className="search__input" value={value} onKeyPress={handleKeyPress} onChange={searchChange} />
      <SearchList updateData={updateData} view={view} close={close} locations={locations}/>
    </div>
  );
}
export default LocationChoice;