import React, { Component, Children } from 'react';
import './App.css';
import Login from './Login';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import NewTask from './NewTask';

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
      <DarkTheme>
        <div className="App" 
          style={{minHeight:'100vh', backgroundColor: '#303030'}}
        >
          {/* <Login /> */}
          <NewTask />
        </div>
      </DarkTheme>
    );
  }
}

export default App;
