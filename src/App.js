import React, { Component, Children } from 'react';
import './App.css';
import Login from './Login';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import NewTask from './NewTask';
import TaskList from './TaskList';
import Profile from './Profile';
import Settings from './Settings';
import {HashRouter as Router, Route} from 'react-router-dom';

const DarkTheme = ({ children }) => (
  <MuiThemeProvider 
  muiTheme={getMuiTheme(darkBaseTheme)}
  >
    {children}
  </MuiThemeProvider>
);




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
