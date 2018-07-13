import React from 'react'
import Header from './Header'
import { Switch, Route, withRouter } from 'react-router-dom'



class App extends React.Component {


  render(){
    return (
      <div>
        <Header/>
        <Switch>
          <Route component={Error404} />
        </Switch>
      </div>
    )
  }
}


export default withRouter(connect(mapStateToProps)(App))
