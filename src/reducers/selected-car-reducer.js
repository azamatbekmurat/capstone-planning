import c from './../constants'

export default (state = {}, action) => {
  switch (action.type) {
  case c.SELECT_CAR:
    return action.carId
  default:
    return state
  }
}
