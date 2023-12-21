import './Home.css';
import React from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';

import Checkpoints from '../Checkpoints/Home';
import PageNotFound from '../../PageNotFound';

const StudentHome = () => {
  return (
    <div id="page-content" style={{justifyContent: 'flex-start'}} className='ease-in-quick'>

      <div className='home-pg'>

        <div className='home-navbar'>
          <NavLink className='home-navlink' to="/"> 
            <i className="fa-light fa-scroll" style={{marginRight: '5px'}}></i>
            Announcements 
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

        <Routes>

          <Route path='/' element={
            <div className='home-pg-main'>
              <div className='home-pg-announcements'>
                <h1>Announcements</h1>
              </div>
              <div className='home-pg-progress'>
                <h1>My Progress</h1>
              </div>
            </div>}
          />
          
          <Route path='/checkpoints' element={<Checkpoints/>} />
          <Route path='*' element={<PageNotFound />} />

        </Routes>

      </div>

    </div>
  ); 
}

export default StudentHome;



