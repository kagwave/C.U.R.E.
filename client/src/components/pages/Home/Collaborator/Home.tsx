import './Home.css';
import React from 'react';

const CollaboratorHome = () => {
  return (
    <div id="page-content" style={{justifyContent: 'flex-start'}}>
      <div className='home-pg'>
        <div className='home-navbar'>
          <div className='home-navlink'> Announcements </div>
          <div className='home-navlink'> Modules </div>
          <div className='home-navlink'> Home </div>
        </div>
        <div id="seperator" style={{width: '100%', height: '2px', background: '#CC0000'}}></div>
        <div className='home-pg-main'>
          <h1>My Progress</h1>
        </div>
      </div>
    </div>
  ); 
}

export default CollaboratorHome;



