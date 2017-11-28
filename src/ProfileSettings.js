import React, { Component } from 'react';
import AppBarDrawer from './AppBarDrawer';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';
import Checkbox from 'material-ui/Checkbox';
import Toggle from 'material-ui/Toggle';


// const styles = {
//   root: {
//     display: 'flex',
//     flexWrap: 'wrap',
//   },
// };


class ProfileSettings extends Component {

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
      <div className="ProfileSettings">
        <AppBarDrawer
          title="Profile Settings"
          iconClassNameRight="muidocs-icon-navigation-expand-more"
        />
          <div style={{display: 'flex', flexWrap: 'wrap', textAlign: 'left'}}>
            <List>
              <Subheader>General</Subheader>
              <ListItem
                primaryText="Profile photo"
                secondaryText="Change your Tallr profile photo"
              />
              <ListItem
                primaryText="Show your location"
                secondaryText="Your location is visible to other Tallr users"
              />
            </List>
            <Divider />
            <List>
              <Subheader>Notifications</Subheader>
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
            </List>
            <List>
              <ListItem
                primaryText="When notifications arrive"
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

export default ProfileSettings;

