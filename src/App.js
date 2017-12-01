import React, { Component, Children } from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {HashRouter as Router, Route} from 'react-router-dom';
import Login from './Login';
import NewTask from './NewTask';
import TaskList from './TaskList';
import ProfileSettings from './ProfileSettings';
import Navigate from './Navigate';
import {grey200} from 'material-ui/styles/colors';


class App extends Component {

  constructor(props){
    super(props)

    this.state={
      tasks: [],
      userType: '',
      pictures: []
    }

    this.handleUserType = this.handleUserType.bind(this)
  }   

  
  handleUserType(e, value) {
    this.setState({
      userType: value
      
    })
  }


  render() {
    return (
      <Router>
        <MuiThemeProvider>
          <div className="App" 
            style={{minHeight:'100vh',
              backgroundColor: grey200}}>
            <Route exact={true} render={()=><Login handleUserType={this.handleUserType} />} path='/' />
            <Route render={()=><NewTask />} path='/NewTask' />
            <Route render={()=><TaskList/>} path='/TaskList' /> 
            <Route render={()=><ProfileSettings />} path='/ProfileSettings' />
            <Route render={()=><Navigate handleUserType={this.handleUserType} userType={this.state.userType} />} path='/Navigation'/>
          </div>
        </MuiThemeProvider>
      </Router>
    );
  }
}

export default App;
