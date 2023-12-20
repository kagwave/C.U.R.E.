import './Home.css';
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';

import StudentHome from './Student/Home';
import CollaboratorHome from './Collaborator/Home';
import InstructorHome from './Instructor/Home';

const Home = () => {

  const { userType } = useSelector((state: RootState) => state.auth);

  return (
    <>
      {userType === 'student' && <StudentHome/>}
      {userType === 'collaborator' && <CollaboratorHome/>}
      {userType === 'instructor' && <InstructorHome/>}
    </>
  ); 
}

export default Home;



