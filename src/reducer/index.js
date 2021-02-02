import { combineReducers } from 'redux'
import commonSlice from './../slices/commonSlice'

export default combineReducers({
  common: commonSlice
})
