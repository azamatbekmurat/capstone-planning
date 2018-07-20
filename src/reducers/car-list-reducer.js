import c from './../constants';

export default (state = {}, action) => {
  let newState;
  const { names, location, issue, timeOpen, id, formattedWaitTime } = action; ///// add all valuess 

  switch (action.type) {
  case c.ADD_CAR:
    newState = Object.assign({}, state, {
      [id]: {
        names: names,
        location: location,
        issue: issue,
        timeOpen: timeOpen,
        id: id,
        formattedWaitTime: formattedWaitTime
      }
    });
    return newState;

  case c.UPDATE_TIME:
    const newCar= Object.assign({}, state[id], {formattedWaitTime});
    newState = Object.assign({}, state, {
      [id]: newCar
    });
    return newState;

  default:
    return state;
  }
};
