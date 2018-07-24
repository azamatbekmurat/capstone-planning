import selectedCarReducer from './selected-car-reducer'
import carListReducer from './car-list-reducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  selectedCar: selectedCarReducer,
  masterCarList: carListReducer
})

export default rootReducer
