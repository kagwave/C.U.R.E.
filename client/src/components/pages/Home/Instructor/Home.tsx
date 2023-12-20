import './Home.css';
import React from 'react';

const InstructorHome = () => {
  return (
    <div id="page-content" style={{justifyContent: 'flex-start'}}>
      <div className='home-pg'>

        <div className='home-navbar'>
          <div className='home-navlink'> 
            <i className="fa-sharp fa-light fa-layer-group" style={{marginRight: '5px'}}></i>
            Courses
          </div>
          <div className='home-navlink'> Modules </div>
          <div className='home-navlink'> Home </div>
        </div>

        <div id="seperator" style={{width: '100%', height: '1px', background: 'gray'}}></div>

        <div className='home-pg-main'>
          <h1>My Progress</h1>
        </div>
      </div>
    </div>
  ); 
}

export default InstructorHome;



