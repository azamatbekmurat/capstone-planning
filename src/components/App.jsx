import React from 'react'
import Header from './Header';
import CarList from './CarList';
import NewCarControl from './NewCarControl';
import Error404 from './Error404';
import { Switch, Route, withRouter } from 'react-router-dom';
import Moment from 'moment';
import Admin from './Admin';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import c from './../constants';



class App extends React.Component {

  componentDidMount() {
    this.waitTimeUpdateTimer = setInterval(() =>
      this.updateCarElapsedWaitTime(),
    60000
    );
  }

  componentWillUnmount(){
    clearInterval(this.waitTimeUpdateTimer);
  }

  updateCarElapsedWaitTime() {
    const { dispatch } = this.props;
    Object.keys(this.props.masterCarList).map(carId => {
      const car = this.props.masterCarList[carId];
      const newFormattedWaitTime = car.timeOpen.fromNow(true);
      const action = {
        type: c.UPDATE_TIME,
        id: carId,
        formattedWaitTime: newFormattedWaitTime
      };
      dispatch(action);
    });
  }

  render(){
    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path='/' render={()=><CarList carList={this.props.masterCarList} />} />
          <Route path='/newcar' render={()=><NewCarControl />} />
          <Route path='/admin' render={(props)=><Admin currentRouterPath={props.location.pathname} />} />
          <Route component={Error404} />
        </Switch>
      </div>
    )
  }
}


App.propTypes = {
  masterCarList: PropTypes.object
};

const mapStateToProps = state => {
  return {
    masterCarList: state.masterCarList
  };
};

export default withRouter(connect(mapStateToProps)(App));