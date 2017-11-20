import React, { Component, Children } from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {HashRouter as Router, Route} from 'react-router-dom';
import Login from './Login';
import NewTask from './NewTask';
import TaskList from './TaskList';
import Profile from './Profile';
import Settings from './Settings';

class App extends Component {
  render() {
    return (
      <Router>
        <MuiThemeProvider>
          <div className="App" 
            style={{minHeight:'100vh'}}>
            <Route exact={true} render={()=><Login />} path='/' />
            <Route render={()=><NewTask />} path='/NewTask' />
            <Route render={()=><TaskList/>} path='/TaskList' />
            <Route render={()=><Profile />} path='/Profile' />
            <Route render={()=><Settings />} path='/Settings' />
          </div>
        </MuiThemeProvider>
      </Router>
    );
  }
}

export default App;
