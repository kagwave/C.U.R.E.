import './Home.css'
import React, { useEffect } from "react";

import MountDisplay from '../../../interface/tools/MountDisplay';

const CoursesHome = () => {

  useEffect(() => {
    MountDisplay(undefined, "Courses");
  }, []);

  return (
    <div className='instructor-courses-home-pg'>
      <div className='instructor-'>

      </div>
      <div className='instructor-courses-container'>
        <div className='instructor-courses-container-item'>
          <h1>+ Add a Course</h1>
        </div>
        <div className='instructor-courses-container-item'>
          <h1>+ Add a Course</h1>
        </div>
        <div className='instructor-courses-container-item'>
          <h1>+ Add a Course</h1>
        </div>
        <div className='instructor-courses-container-item'>
          <h1>+ Add a Course</h1>
        </div>
        <div className='instructor-courses-container-item'>
          <h1>+ Add a Course</h1>
        </div>
        <div className='instructor-courses-container-item'>
          <h1>+ Add a Course</h1>
        </div>
        <div className='instructor-courses-container-item'>
          <h1>+ Add a Course</h1>
        </div>
      </div>
    </div>
  )
}

export default CoursesHome;