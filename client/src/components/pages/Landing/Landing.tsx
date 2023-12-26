import './Landing.css';
import './App.css';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';

import StudentApp from '../_Student/App';
import CollaboratorApp from '../_Collaborator/App';
import InstructorApp from '../_Instructor/App';
import { Route, Routes } from 'react-router-dom';
import PageNotFound from '../PageNotFound';
import MountDisplay from '../../interface/tools/MountDisplay';

const Landing = () => {

  const { isLoggedIn, userType } = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    MountDisplay(undefined, undefined);
  }, []);

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



