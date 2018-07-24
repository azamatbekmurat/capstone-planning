import React from 'react'
import Car from './Car'
import PropTypes from 'prop-types'

function CarList(props){
  return (
    <div>
      <hr/>
      {Object.keys(props.carList).map(function(carId) {
        var car = props.carList[carId]
        return <Car make={car.make}
          model={car.model}
          modelYear={car.modelYear}
          price={car.price}
          mileage={car.mileage}
          transmission={car.transmission}
          trunkType={car.trunkType}
          condition={car.condition}
          color={car.color}
          currentRouterPath={props.currentRouterPath}
          key={carId}
          carId={carId} />
      })}
    </div>
  )
}

CarList.propTypes = {
  carList: PropTypes.object,
  currentRouterPath: PropTypes.string
}

export default CarList
