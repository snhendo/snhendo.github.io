import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import AppBarDrawer from './AppBarDrawer';


class Profile extends Component {

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
      <div className="Profile">
        <AppBarDrawer
          title="Profile"
          iconClassNameRight="muidocs-icon-navigation-expand-more"
        />
        
      </div>
    );
  }
}

export default Profile;
