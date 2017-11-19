import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';


class AppBarDrawer extends Component {
  
    constructor(props) {
      super(props); //boilerplate (needed for all class components that have state)
      
      // initialize the state
      this.state = {
        open: false,
        title: 'Title'
      };
    }
  
    handleToggle = () => this.setState({open: !this.state.open});
    
    handleClose = () => this.setState({open: false});
  
  
    render() {
      return (
        <div className="AppBarDrawer">
          <AppBar
            title={this.state.title}
            iconClassNameRight="muidocs-icon-navigation-expand-more"
            onLeftIconButtonTouchTap={this.handleToggle}
          />
          <Drawer
            docked={false}
            width={175}
            open={this.state.open}
            onRequestChange={(open) => this.setState({open})}
          >
            <MenuItem onClick={this.handleClose}>Task List</MenuItem>
            <MenuItem onClick={this.handleClose}>Profile</MenuItem>
            <MenuItem onClick={this.handleClose}>Settings</MenuItem>
            <MenuItem onClick={this.handleClose}>Log out</MenuItem>
          </Drawer>
        </div>
      );
    }
  }
  
  export default AppBarDrawer;