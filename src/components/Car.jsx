import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import c from './../constants'

function Car(props){

  function handleSavingSelectedCar(carId){
    const { dispatch } = props
    const action = {
      type: c.SELECT_CAR,
      carId: carId
    }
    dispatch(action)
  }

  const carInformation =
    <div>
      <style jsx global>{`
        .color-toggle {
          background-color: #blue;
        }
        .color-toggle:hover {
          background-color: pink;
        }
      `}</style>
      <h3>{props.make} {props.model}</h3>
      <div>
        <p><strong>year: </strong><em>${props.modelYear}</em></p>
        <p><strong>Price: </strong><em>${props.price}</em></p>
        <hr/>
      </div>
    </div>
  if (props.currentRouterPath === '/admin'){
    return (
      <div onClick={() => {handleSavingSelectedCar(props.carId)}}>
        {carInformation}
      </div>
    )
  } else {
    return (
      <div>
        {carInformation}
      </div>
    )
  }
}

Car.propTypes = {
  make: PropTypes.string.isRequired,
  model: PropTypes.string.isRequired,
  modelYear: PropTypes.string,
  price: PropTypes.string,
  mileage: PropTypes.string.isRequired,
  transmission: PropTypes.string,
  type: PropTypes.string,
  condition: PropTypes.string,
  color: PropTypes.string,
  carId: PropTypes.string,isRequired,
  currentRouterPath: PropTypes.string,
  onCarSelection: PropTypes.func
}

export default connect()(Car)
