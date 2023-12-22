import React from 'react';
import { NavLink, useRoutes } from 'react-router-dom';

//Pages
import Dashboard from './Dashboard/Home';
import Checkpoints from './Checkpoints/Home';
import PageNotFound from '../PageNotFound';

const routes = [
  { path: '/', element: <Dashboard />},
  { path: '/checkpoints', element: <Checkpoints />},
  { path: '/*', element: <PageNotFound />}
];

const StudentApp = () => {

  const StudentRouter = useRoutes(routes);

  return (
    <div id="page-content" style={{justifyContent: 'flex-start'}} className='ease-in-quick'>

      <div className='app-pg'>

        <div className='app-navbar'>
          <div className='app-navlinks'>
            <NavLink className='app-navlink' to="/"> 
              <i className="fa-light fa-scroll" style={{marginRight: '5px'}}></i>
              Announcements 
            </NavLink>
            <NavLink className='app-navlink' to="/checkpoints"> 
              <i className="fa-duotone fa-list-check" style={{marginRight: '5px'}}></i>
              Checkpoints
            </NavLink>
            <NavLink className='app-navlink' to="/team"> 
              <i className="fa-light fa-user-group" style={{marginRight: '5px'}}></i>
              Team 
            </NavLink>
          </div>
        </div>

        <div id="seperator" style={{width: '100%', height: '1px', background: 'gray'}}></div>

        {StudentRouter}

      </div>

    </div>
  ); 
}

export default StudentApp;



