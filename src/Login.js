import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';
import {grey700, grey200} from 'material-ui/styles/colors';
import {Tabs, Tab} from 'material-ui/Tabs';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import IconButton from 'material-ui/IconButton';
import { FormErrors } from './FormErrors';
import Paper from 'material-ui/Paper';

const style = {
  height: 100,
  width: 100,
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
  backgroundColor: grey200
};

class Login extends Component {

  constructor(props) {
    super(props); 
    
    // initialize the state
    this.state = {
      username: '', 
      password: '',
      passwords: '',
      email: '',
      formErrors: {email: '', password: '', passwords: ''},
      emailValid: false,
      passwordValid: false,
      formValid: false,
      passCheck: false
    };
  }

  handleUserInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({[name]: value},
                  () => { this.validateField(name, value) });
  }

  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let emailValid = this.state.emailValid;
    let passwordValid = this.state.passwordValid;
    let passwordMatch = this.state.passCheck;

    switch(fieldName) {
      case 'email':
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors.email = emailValid ? '' : ' is invalid';
        break;
      case 'password':
        passwordValid = value.length >= 6;
        fieldValidationErrors.password = passwordValid ? '': ' must be at least 6 characters';
        break;
      case 'passwords':
        passwordMatch = this.state.password===this.state.passwords
        fieldValidationErrors.passwords = passwordMatch ? '': ' do not match';
        break;
      default:
        break;
    }
    this.setState({formErrors: fieldValidationErrors,
                    emailValid: emailValid,
                    passwordValid: passwordValid,
                    passCheck: passwordMatch
                  }, this.validateForm);
  }

  validateForm() {
    this.setState({formValid: this.state.emailValid && this.state.passwordValid && this.state.passCheck});
  }

  errorClass(error) {
    return(error.length === 0 ? '' : 'has-error');
  }
  // confirmPassword(){
  //   this.setState({passCheck: this.state.password===this.state.passwords})
  // }


  render() {
    return (
      <div style={{textAlign: 'left'}} className="Login">
        <AppBar
          title="Welcome to Tallr"
          style={{textAlign:'center'}}
          iconClassNameRight="muidocs-icon-navigation-expand-more"
          showMenuIconButton={false}
        />
        <Tabs tabItemContainerStyle={{backgroundColor: grey700}} inkBarStyle={{backgroundColor: '#00cc99'}} >
          <Tab label='About' style={{backgroundColor: grey700}} >
            <div>
              <h4 style={{textAlign:'center'}} >About Tallr</h4>
            </div>
          </Tab>
          <Tab label='Log In' style={{backgroundColor: grey700}} >
            <div style={{textAlign: 'center'}}>
              {/* <h3 style={{color: grey700}}>Log in or Sign up</h3> */}
              <TextField
                floatingLabelText="Email"
                onChange={this.handleUserInput}
                value={this.state.email}
                name="email"
              /><br/>
              <TextField
                onChange={this.handleUserInput}
                value={this.state.password}
                floatingLabelText="Password"
                type="password"
                name="password"
              /><br/>
              <RaisedButton 
                label="Log in" 
                primary={true} 
                style={{margin: 12}} 
                href="#/TaskList"
                disabled={!this.state.formValid}
              />
            </div>
          </Tab>
          <Tab label='Sign Up' style={{backgroundColor: grey700}}>
            <div style={{textAlign:'center'}} > 
                <FormErrors formErrors={this.state.formErrors} />
            </div>
            <div className={`form-group ${this.errorClass(this.state.formErrors.password)}`} 
              style={{textAlign: 'center', }}  >
              <TextField
                floatingLabelText="Email"
                onChange={this.handleUserInput}
                value={this.state.email}
                name="email"
              /><br/>
              <TextField
                onChange={this.handleUserInput}
                value={this.state.password}
                floatingLabelText="Password"
                type="password"
                name="password"
              /><br/>
              <TextField
                floatingLabelText="Confirm Password"
                type="password"
                name="passwords"
                value={this.state.passwords}
                onChange={this.handleUserInput}
              /><br/>
              <div style={{
                maxWidth: '100px', 
                textAlign: 'left', 
                width: '100vw', 
                margin: 'auto' }} >

                <RadioButtonGroup 
                name="userType" 
                defaultSelected="tall"
                onChange={this.props.handleUserType} >

                  <RadioButton
                    value="tall"
                    label="Tallr"
                  />
                  <RadioButton
                    value="short"
                    label="Shortr"
                  />

                </RadioButtonGroup>
                
              </div>
              <RaisedButton 
                backgroundColor="#00cc99" 
                labelColor="#fff" 
                label="Sign up" 
                style={{margin:12}} 
                href='#/ProfileSettings' 
                disabled={!this.state.formValid}/>
            </div>
          </Tab>
        </Tabs>
      </div>
    );
  }
}

export default Login;
