import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

import { Route, Switch, Redirect } from 'react-router-dom';
import Login from './login/Login';
import Content from './content/Content';

// class LJBaseRouter extends React.Component {
//   render() {
//     return (
//       <Switch>
//         <Route path="/login" component={Login}/>
//         <Route path="/index" component={Content}/>
//         <Redirect to="/login"></Redirect>
//       </Switch>
//     );
//   }
// }

class App extends Component {
  render() {
    if (window.localStorage.sid != null && window.localStorage.sid !== "") {
      return (
        <Switch>
          <Route path="/login" component={Login}/>
          <Route path="/index" component={Content}/>
          <Redirect to="/index"></Redirect>
        </Switch>
      );
    }
    return (
      <Switch>
        <Route path="/login" component={Login}/>
        <Route path="/index" component={Content}/>
        <Redirect to="/login"></Redirect>
      </Switch>
    );
  }
}

export default App;
