import './Home.css';
import React from 'react';

const StudentHome = () => {
  return (
    <div id="page-content" style={{justifyContent: 'flex-start'}} className='ease-in-quick'>

      <div className='home-pg'>

        <div className='home-navbar'>

          <div className='home-navlink'> 
            <i className="fa-light fa-scroll" style={{marginRight: '5px'}}></i>
            Announcements 
          </div>
          <div className='home-navlink'> 
            <i className="fa-duotone fa-list-check" style={{marginRight: '5px'}}></i>
            Modules
          </div>
          <div className='home-navlink'> 
            <i className="fa-light fa-user-group" style={{marginRight: '5px'}}></i>
            Team 
          </div>
        </div>

        <div id="seperator" style={{width: '100%', height: '1px', background: 'gray'}}></div>

        <div className='home-pg-main'>
          <div className='home-pg-announcements'>
            <h1>Announcements</h1>
          </div>
          <div className='home-pg-progress'>
            <h1>My Progress</h1>
          </div>
        </div>

      </div>

    </div>
  ); 
}

export default StudentHome;



