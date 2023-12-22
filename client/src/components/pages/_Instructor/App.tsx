import React from 'react';
import { NavLink, useRoutes } from 'react-router-dom';

//Pages
import Collaborators from './Collaborators/Home';
import Courses from './Courses/Home';
import PageNotFound from '../PageNotFound';

const routes = [
  { path: '/', element: <Courses/>},
  { path: '/collaborators', element: <Collaborators />},
  { path: '/*', element: <PageNotFound />}
];

const InstructorApp = () => {

  const InstructorRouter = useRoutes(routes);
  
  return (

    <div id="page-content" style={{justifyContent: 'flex-start'}} className='ease-in-quick'>
      
      <div className='app-pg'>

        <div className='app-navbar'>
          <div className='app-navlinks'>
            <NavLink className='app-navlink' to="/"> 
              <i className="fa-sharp fa-light fa-layer-group" style={{marginRight: '5px'}}></i>
              Courses
            </NavLink>
            <NavLink className='app-navlink' to="/collaborators"> 
              <i className="fa-light fa-handshake" style={{marginRight: '5px'}}></i>
              Collaborators
            </NavLink>
            <NavLink className='app-navlink' to="/team"> 
              <i className="fa-light fa-user-group" style={{marginRight: '5px'}}></i>
              Team 
            </NavLink>
          </div>
          
        </div>

        <div id="seperator" style={{width: '100%', height: '1px', background: 'gray'}}></div>

        {InstructorRouter}

      </div>
    </div>
  ); 
}

export default InstructorApp;



