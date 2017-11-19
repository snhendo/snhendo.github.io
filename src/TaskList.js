import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import AppBarDrawer from './AppBarDrawer';
import FlatButton from 'material-ui/FlatButton';


class TaskList extends Component {

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
        <AppBarDrawer title='Task List' iconElementRight={<FlatButton label="New Task" href='#/NewTask'/>}/>
      </div>
    );
  }
}

export default TaskList;
