import { Subcategories } from '../../api'

export const GET_SUBCATEGORIES_REQUEST = 'GET_SUBCATEGORIES_REQUEST'
export const GET_SUBCATEGORIES_SUCCESS = 'GET_SUBCATEGORIES_SUCCESS'

export const getSubcategories = () => {
  return dispatch => {
    dispatch({
      type: GET_SUBCATEGORIES_REQUEST,
      payload: []
    })

    Subcategories.getSubcategories()
      .then(res => {
        dispatch({
          type: GET_SUBCATEGORIES_SUCCESS,
          payload: res.data
        })
      })
  }
}