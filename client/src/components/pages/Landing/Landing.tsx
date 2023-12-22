import './Landing.css';
import './App.css';
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';

import StudentApp from '../_Student/App';
import CollaboratorApp from '../_Collaborator/App';
import InstructorApp from '../_Instructor/App';
import { Route, Routes } from 'react-router-dom';
import PageNotFound from '../PageNotFound';

const Landing = () => {

  const { isLoggedIn, userType } = useSelector((state: RootState) => state.auth);

  return (isLoggedIn ?
    <>
      {userType === 'student' && <StudentApp/>}
      {userType === 'collaborator' && <CollaboratorApp/>}
      {userType === 'instructor' && <InstructorApp/>}
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



