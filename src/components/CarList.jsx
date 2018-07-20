import React from 'react';
import Car from './Car';
import PropTypes from 'prop-types';

function CarList(props){
  return (
    <div>
      <hr/>
      {Object.keys(props.carList).map(function(carId) {
        var car = props.carList[carId];
        return <Car names={car.names}
          location={car.location}
          issue={car.issue}
          formattedWaitTime={car.formattedWaitTime}
          currentRouterPath={props.currentRouterPath}
          key={carId}
          carId={carId} />;
      })}
    </div>
  );
}

CarList.propTypes = {
  carList: PropTypes.object,
  currentRouterPath: PropTypes.string
};

export default CarList;
