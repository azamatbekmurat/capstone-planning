import React from 'react'
import PropTypes from 'prop-types'

function CarDetail(props){
  return (
    <div>
      <h3>{props.selectedCar.make} {props.selectedCar.model}</h3>
      <div>
        <p><strong>Year: </strong><em>{props.selectedCar.modelYear}</em></p>
        <p><strong>Price: </strong><em>{props.selectedCar.price}</em></p>
        <p><strong>Mileage: </strong><em>{props.selectedCar.mileage}</em></p>
        <p><strong>Transmission: </strong><em>{props.selectedCar.transmission}</em></p>
        <p><strong>Type of a car: </strong><em>{props.selectedCar.type}</em></p>
        <p><strong>Condition: </strong><em>{props.selectedCar.condition}</em></p>
        <p><strong>Color: </strong><em>{props.selectedCar.color}</em></p>
      </div>
    </div>
  )
}

CarDetail.propTypes = {
  selectedCar: PropTypes.object
}

export default CarDetail
