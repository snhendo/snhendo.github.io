import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';


const AppBar1 = () => (
  <AppBar
    title="Create New Task"
    iconClassNameRight="muidocs-icon-navigation-expand-more"
  />
);


class NewTask extends Component {

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
      <div className="NewTask">
        <AppBar1 />
        <TextField
          floatingLabelText="Title"
        /><br/>
        <TextField
          style={{textAlign: 'left'}}
          floatingLabelText="Description"
          multiLine={true}
          rows={4}
        /><br />
        <TextField
          floatingLabelText="Address"
        /><br/>
        <TextField
          floatingLabelText="Price"
        /><br/>
        <RaisedButton 
          label="Submit"
          primary={true} 
          style={{margin: 12}} 
        />
        <RaisedButton 
          backgroundColor="#00cc99" 
          // labelColor="#fff" 
          label="Cancel" 
          style={{margin: 12}} 
        />
      </div>
    );
  }
}

export default NewTask;
