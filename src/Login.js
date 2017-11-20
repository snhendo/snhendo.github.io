import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';
import {grey700} from 'material-ui/styles/colors';
import {Tabs, Tab} from 'material-ui/Tabs';
import SwipeableViews from 'react-swipeable-views';



class Login extends Component {

  constructor(props) {
    super(props); //boilerplate (needed for all class components that have state)
    
    // initialize the state
    this.state = {
      textValue: '', // the current input value in the input tag
      formValue: '',
      submittedValue: []
    };
  }


  render() {
    return (
      <div style={{textAlign: 'left'}} className="Login">
        <AppBar
          title="Tallr"
          iconClassNameRight="muidocs-icon-navigation-expand-more"
          showMenuIconButton={false}
        />
        <Tabs>
          <Tab label='Log In'>
              <div style={{textAlign: 'center'}}>
                {/* <h3 style={{color: grey700}}>Log in or Sign up</h3> */}
                <TextField
                  floatingLabelText="Username"
                /><br/>
                <TextField
                  floatingLabelText="Password"
                /><br/>
                <RaisedButton 
                  label="Log in" 
                  primary={true} 
                  style={{margin: 12}} 
                  href="#/TaskList"
                />
              </div>
            </Tab>
            <Tab label='Sign Up'>
              <div style={{textAlign: 'center'}}>
                <TextField
                  floatingLabelText="Username"
                /><br/>
                <TextField
                  floatingLabelText="Password"
                /><br/>
                <TextField
                  floatingLabelText="Confirm Password"
                /><br/>
                <RaisedButton 
                  backgroundColor="#00cc99" 
                  labelColor="#fff" 
                  label="Sign up" 
                  style={{margin:12}} 
                  href='#/Profile' />
              </div>
            </Tab>
        </Tabs>
      </div>
    );
  }
}

export default Login;
