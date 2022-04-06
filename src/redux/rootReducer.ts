import {combineReducers} from 'redux'
import picturesSlice from './pictures/slice'

const rootReducer = combineReducers({
  pictures: picturesSlice,
})

export {rootReducer}
