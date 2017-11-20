import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';
import {grey700} from 'material-ui/styles/colors';
import {Tabs, Tab} from 'material-ui/Tabs';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';



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
        <Tabs tabItemContainerStyle={{backgroundColor: grey700}} inkBarStyle={{backgroundColor: '#00cc99'}} >
          <Tab label='Log In' style={{backgroundColor: grey700}} >
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
            <Tab label='Sign Up' style={{backgroundColor: grey700}}>
              <div style={{textAlign: 'center', }}  >
                <TextField
                  floatingLabelText="Username"
                /><br/>
                <TextField
                  floatingLabelText="Password"
                /><br/>
                <TextField
                  floatingLabelText="Confirm Password"
                /><br/>
                <div style={{
                  maxWidth: '100px', 
                  textAlign: 'left', 
                  width: '100vw', 
                  margin: 'auto' }} >
                  <RadioButtonGroup name="userType" defaultSelected="Tallr">
                    <RadioButton
                      value="Tallr"
                      label="Tallr"
                      style={{
                        display: 'flex',
                        flexDirection: 'row',
                        width: '47%',
                        minWidth: '150px',
                        marginRight: '6%'
                      }}
                    />
                    <RadioButton
                      value="Shortr"
                      label="Shortr"
                      style={{
                        display: 'flex',
                        flexDirection: 'row',
                        width: '47%',
                        minWidth: '150px'
                      }}
                    />
                  </RadioButtonGroup>
                </div>
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
