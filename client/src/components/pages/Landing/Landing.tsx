import './Landing.css';
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';

import StudentHome from '../_Student/Home/Home';
import CollaboratorHome from '../_Collaborator/Home/Home';
import InstructorHome from '../_Instructor/Home/Home';
import { Route, Routes } from 'react-router-dom';
import PageNotFound from '../PageNotFound';

const Landing = () => {

  const { isLoggedIn, userType } = useSelector((state: RootState) => state.auth);

  return (isLoggedIn ?
    <>
      {userType === 'student' && <StudentHome/>}
      {userType === 'collaborator' && <CollaboratorHome/>}
      {userType === 'instructor' && <InstructorHome/>}
    </>
  :
    <Routes>
      <Route path='*' element={<PageNotFound/>}/>
      <Route path="/" element={
        <div id="page-content">

        </div>
      }/>
    </Routes>
  ); 
}

export default Landing;



