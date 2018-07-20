import React from 'react';
import PropTypes from 'prop-types';
import CarList from './CarList';
import CarDetail from './CarDetail';
import { connect } from 'react-redux';

function Admin(props){
  let optionalSelectedCarContent = null;
  if (props.selectedCar.length > 0){
    optionalSelectedCarContent =  <CarDetail selectedCar={props.carList[props.selectedCar]}/>;
  }
  return (
    <div>
      <h2>Admin</h2>
      {optionalSelectedCarContent}
      <CarList
        carList={props.carList}
        currentRouterPath={props.currentRouterPath} />
    </div>
  );
}

Admin.propTypes = {
  carList: PropTypes.object,
  currentRouterPath: PropTypes.string.isRequired,
  selectedCar: PropTypes.string
};

const mapStateToProps = state => {
  return {
    selectedCar: state.selectedCar,
    carList: state.masterCarList
  };
};

export default connect(mapStateToProps)(Admin);
