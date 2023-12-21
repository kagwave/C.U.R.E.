import { NavLink } from 'react-router-dom';
import './Home.css';
import React from 'react';

const InstructorHome = () => {
  
  return (
    <div id="page-content" style={{justifyContent: 'flex-start'}} className='ease-in-quick'>
      <div className='home-pg'>

        <div className='home-navbar'>
          <NavLink className='home-navlink' to="/"> 
            <i className="fa-sharp fa-light fa-layer-group" style={{marginRight: '5px'}}></i>
            Courses
          </NavLink>
          <NavLink className='home-navlink' to="/checkpoints"> 
            <i className="fa-duotone fa-list-check" style={{marginRight: '5px'}}></i>
            Checkpoints
          </NavLink>
          <NavLink className='home-navlink' to="/team"> 
            <i className="fa-light fa-user-group" style={{marginRight: '5px'}}></i>
            Team 
          </NavLink>
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



