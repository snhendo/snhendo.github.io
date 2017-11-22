import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import AppBarDrawer from './AppBarDrawer';
import FlatButton from 'material-ui/FlatButton';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';

var hipsum1 = "Distillery chia pour-over af. Actually selvage gluten-free craft beer, occupy vinyl meditation tacos YOLO meh direct trade coloring book waistcoat. Kombucha fixie DIY, shoreditch cornhole glossier etsy la croix mlkshk microdosing air plant. Chicharrones williamsburg pinterest locavore cloud bread. Lumbersexual health goth cred 3 wolf moon hashtag air plant."
var hipsum2 = "Austin tattooed try-hard hell of yuccie selfies health goth. Poutine franzen try-hard lomo, bitters austin vape woke flexitarian coloring book kickstarter chartreuse succulents. Direct trade pok pok trust fund jianbing iPhone hell of iceland bitters biodiesel farm-to-table. Keffiyeh glossier ennui tacos succulents."
var hipsum3 = "Edison bulb knausgaard hell of, normcore green juice messenger bag everyday carry enamel pin selvage kogi activated charcoal cardigan organic helvetica. Ugh truffaut messenger bag jean shorts mustache kitsch. Vegan everyday carry austin, ramps marfa brooklyn iceland roof party. Banjo health goth selvage stumptown. Venmo cardigan kogi yuccie shabby chic. Helvetica bicycle rights mustache 3 wolf moon."



class TaskList extends Component {

  constructor(props) {
    super(props); //boilerplate (needed for all class components that have state)
    
    // initialize the state
    this.state = {
      textValue: '', // the current input value in the input tag
      formValue: '',
      submittedValue: [],
      tasks: [],
    };
  }

  render() {
    return (
      <div className="NewTask">
        <AppBarDrawer title='Task List' iconElementRight={<FlatButton label="New Task" href='#/NewTask'/>}/>

        <List style={{textAlign: 'left'}} >

            <Subheader>Available Tasks</Subheader>
            <Divider />
            <ListItem
              primaryText="Task Title 1"
              secondaryText="$5.00"
              initiallyOpen={false}
              primaryTogglesNestedList={true}
              nestedItems={[
                <ListItem
                  key={1}
                  primaryText={hipsum1}
                  disabled={true}
                />,
              ]}
            />
            <Divider />
            <ListItem
              primaryText="Task Title 2"
              secondaryText="$2.57"
              initiallyOpen={false}
              primaryTogglesNestedList={true}
              nestedItems={[
                <ListItem
                  key={1}
                  primaryText={hipsum2}
                  disabled={true}
                />,
              ]}
            />
            <Divider />
            <ListItem
              primaryText="Task Title 3"
              secondaryText="$4.99"
              initiallyOpen={false}
              primaryTogglesNestedList={true}
              nestedItems={[
                <ListItem
                  key={1}
                  primaryText={hipsum3}
                  disabled={true}
                />,
              ]}
            />
            <Divider />
          </List>
      </div>
    );
  }
}

export default TaskList;
