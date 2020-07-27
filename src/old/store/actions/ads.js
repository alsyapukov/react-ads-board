import { Ads } from '../../api'

export const GET_ADS_REQUEST = 'GET_ADS_REQUEST'
export const GET_ADS_SUCCESS = 'GET_ADS_SUCCESS'

export const getAds = () => {
  return dispatch => {
    dispatch({
      type: GET_ADS_REQUEST,
      payload: []
    })

    Ads.getAds()
      .then(res => {
        dispatch({
          type: GET_ADS_SUCCESS,
          payload: res.data
        })
      })
  }
}