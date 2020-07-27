import { Categories } from '../../api'

export const GET_CATEGORIES_REQUEST = 'GET_CATEGORIES_REQUEST'
export const GET_CATEGORIES_SUCCESS = 'GET_CATEGORIES_SUCCESS'

export const getCategories = () => {
  return dispatch => {
    dispatch({
      type: GET_CATEGORIES_REQUEST,
      payload: []
    })

    Categories.getCategories()
      .then(res => {
        dispatch({
          type: GET_CATEGORIES_SUCCESS,
          payload: res.data
        })
      })
  }
}