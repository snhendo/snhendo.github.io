import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';


const AppBar1 = () => (
  <AppBar
    title="Welcome to Tallr"
    iconClassNameRight="muidocs-icon-navigation-expand-more"
  />
);


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
      <div className="Login">
        <AppBar1 />
        <h3>Log in or Sign up</h3>
        <TextField
          floatingLabelText="Username"
        /><br/>
        <TextField
          floatingLabelText="Password"
        /><br/>
            <RaisedButton label="Log in" primary={true} style={{margin: 12}} />
            <RaisedButton backgroundColor="#00cc99" labelColor="#fff" label="Sign up" style={{margin:12}} />

      </div>
    );
  }
}

export default Login;
