import React, { Component, Children } from 'react';
import AppBarDrawer from './AppBarDrawer';
import map from './Images/map.png';

class Navigate extends Component {
  
  render() {
    return (
      <div className="Navigate">
        <AppBarDrawer title='Navigation'/>
        <img src={map} style={{width: '500px', marginTop: '30px'}} />

        {this.props.userType}
        {/* {(this.props.userType==='short') ? <h3 style={{textAlign: 'center'}}>Your Tallr is on their way!</h3>
        : <h3 style={{textAlign: 'center'}}>You are on your way!</h3> */}
      
      {/* }  */}
        

      </div>
    );
  }
}
  
  export default Navigate;