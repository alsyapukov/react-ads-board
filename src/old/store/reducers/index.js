import { combineReducers } from 'redux'
import ads from './ads'
import search from './search'
import searchActive from './searchActive'
import application from './application'
import categories from './categories'
import subcategories from './subcategories'

export default combineReducers({
  ads,
  search,
  searchActive,
  application,
  categories,
  subcategories
})