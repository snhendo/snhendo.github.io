import React, { Component } from 'react';
import AppBarDrawer from './AppBarDrawer';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';
import Checkbox from 'material-ui/Checkbox';
import Toggle from 'material-ui/Toggle';


const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
};


class Settings extends Component {

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
      <div className="Settings">
        <AppBarDrawer
          title="Settings"
          iconClassNameRight="muidocs-icon-navigation-expand-more"
        />
          <div style={styles.root}>
            <List>
              <Subheader>General</Subheader>
              <ListItem
                primaryText="Profile photo"
                secondaryText="Change your Google+ profile photo"
              />
              <ListItem
                primaryText="Show your status"
                secondaryText="Your status is visible to everyone you use with"
              />
            </List>
            <Divider />
            <List>
              <Subheader>Hangout Notifications</Subheader>
              <ListItem
                leftCheckbox={<Checkbox />}
                primaryText="Notifications"
                secondaryText="Allow notifications"
              />
              <ListItem
                leftCheckbox={<Checkbox />}
                primaryText="Sounds"
                secondaryText="Hangouts message"
              />
              <ListItem
                leftCheckbox={<Checkbox />}
                primaryText="Video sounds"
                secondaryText="Hangouts video call"
              />
            </List>
            <List>
              <ListItem
                primaryText="When calls and notifications arrive"
                secondaryText="Always interrupt"
              />
            </List>
            <Divider />
            <List>
              <Subheader>Priority Interruptions</Subheader>
              <ListItem primaryText="Events and reminders" rightToggle={<Toggle />} />
              <ListItem primaryText="Calls" rightToggle={<Toggle />} />
              <ListItem primaryText="Messages" rightToggle={<Toggle />} />
            </List>
            <Divider />
            <List>
              <Subheader>Hangout Notifications</Subheader>
              <ListItem primaryText="Notifications" leftCheckbox={<Checkbox />} />
              <ListItem primaryText="Sounds" leftCheckbox={<Checkbox />} />
              <ListItem primaryText="Video sounds" leftCheckbox={<Checkbox />} />
            </List>
        </div>

      </div>
    );
  }
}

export default Settings;

