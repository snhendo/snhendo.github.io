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
      <MuiThemeProvider>
        <div className="App" 
          style={{minHeight:'100vh'}}
        >
          {/* <Login /> */}
          <NewTask />
          {/* <TaskList /> */}
          {/* <Profile /> */}
          {/* <Settings /> */}
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
