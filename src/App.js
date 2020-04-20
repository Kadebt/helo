import React from 'react';
import Routes from './routes'
import Nav from './Components/Nav'
import './App.css';
import { Provider } from 'react-redux'
import { withRouter } from 'react-router-dom'

// import store from './ducks/store'

function App(props) {
  function conditional(){
    if (props.location.pathname === '/'){
      return null
    } else {
      return <Nav/>
    }
  }
  return (
    <div>
      {/* <Nav/> */}
      {conditional()}
      {Routes}
    </div>
  );
}

export default withRouter (App);
