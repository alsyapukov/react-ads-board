import React, { useEffect } from "react";
import s from './ads.module.scss';

import { connect } from 'react-redux';
import { getAds } from '../../../store/actions/ads'

import Ad from './Ad';


const mapStateToProps = state => {
  return {
    ads: state.ads,
  }
}

const matchDispatchToProps = dispatch => {
  return {
    getAds: () => dispatch(getAds())
  }
}


const Ads = ({getAds, ads}) => {

  useEffect(() => {
    getAds();
  }, [])

  return (
    <div className={s.ads}>
      {
        ads && ads.map(
          ad => <Ad key={ad._id} ad={ad} />
        )
      }
    </div>
  );
}

export default connect(
  mapStateToProps, 
  matchDispatchToProps
)(Ads)