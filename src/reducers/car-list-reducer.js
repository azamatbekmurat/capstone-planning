import c from './../constants'

export default (state = {}, action) => {
  let newState
  const { make, model, modelYear, price, mileage, transmission, trunkType, condition, color, id } = action

  switch (action.type) {
  case c.ADD_CAR:
    newState = Object.assign({}, state, {
      [id]: {
        make: make,
        model: model,
        modelYear: modelYear,
        price: price,
        mileage: mileage,
        transmission: transmission,
        trunkType: trunkType,
        condition: condition,
        color: color,
        id: id
      }
    })
    return newState

  case c.UPDATE_TIME:
    const newCar= Object.assign({}, state[id])
    newState = Object.assign({}, state, {
      [id]: newCar
    })
    return newState

  default:
    return state
  }
}
