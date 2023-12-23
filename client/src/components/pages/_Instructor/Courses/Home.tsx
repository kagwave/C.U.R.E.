import './Home.css'
import React, { useEffect } from "react";

import MountDisplay from '../../../interface/tools/MountDisplay';

const CoursesHome = () => {

  useEffect(() => {
    MountDisplay(undefined, "Courses");
  }, []);

  return (
    <div className='instructor-dashboard-home-pg'>

 
      <div className='instructor-dashboard-announcements'>
        <div className='instructor-dashboard-courses-home-header'>
          <h1>Announcements</h1>
        </div>
        <input className="instructor-new-accouncement" placeholder='Write an update...'/>
      </div>

      <div className='instructor-dashboard-courses'>
        <div className='instructor-dashboard-courses-home-header'>
          <h1>My Courses</h1>
        </div>
        <div className='instructor-dashboard-courses-container'>
          <div className='instructor-dashboard-courses-container-item'>
            <h1>+ New Course</h1>
          </div>
          <div className='instructor-dashboard-courses-container-item'>
            <h1>+ New Course</h1>
          </div>
          <div className='instructor-dashboard-courses-container-item'>
            <h1>+ New Course</h1>
          </div>
          <div className='instructor-dashboard-courses-container-item'>
            <h1>+ New Course</h1>
          </div>
          <div className='instructor-dashboard-courses-container-item'>
            <h1>+ New Course</h1>
          </div>
          <div className='instructor-dashboard-courses-container-item'>
            <h1>+ New Course</h1>
          </div>
          <div className='instructor-dashboard-courses-container-item'>
            <h1>+ New Course</h1>
          </div>
        </div>
      </div>


    </div>
  )
}

export default CoursesHome;