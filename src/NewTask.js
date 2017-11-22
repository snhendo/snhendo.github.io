import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import AppBarDrawer from './AppBarDrawer';

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
      <div style={{ textAlign: 'left' }}
        className="NewTask">
        <AppBarDrawer title='Create New Task'/>
        <div style={{width: '85vw', margin: 'auto', maxWidth: '800px'}} >
          <TextField
            floatingLabelText="Title"
            fullWidth={true}
            //errorText="This field is required"
          /><br/>
          <TextField
            style={{textAlign: 'left'}}
            floatingLabelText="Description"
            //errorText="This field is required"
            multiLine={true}
            fullWidth={true}
            rows={4}
          /><br />
          <div> 
            <TextField
              floatingLabelText="Address"
              style={{width: '47%', 
                minWidth: '272px', 
                display: 'inline-block', 
                marginRight: '6%'}}
            /> 
            <TextField
              floatingLabelText="Price"
              style={{width: '47%', minWidth: '272px', display: 'inline-block', }}
              // errorText="This field is required"
            /><br/>
          </div>
        </div>  
        <div style={{textAlign: 'center'}}>
          <RaisedButton 
            label="Submit"
            primary={true} 
            style={{margin: 12}} 
          />
          <RaisedButton 
            backgroundColor="#00cc99" 
            labelColor="#fff" 
            label="Cancel" 
            style={{margin: 12}}
            href='#/TaskList' 
          />
        </div>
      </div>
    );
  }
}

export default NewTask;
