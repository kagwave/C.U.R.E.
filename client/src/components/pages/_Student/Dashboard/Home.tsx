import './Home.css';
import React, { useEffect } from "react";

import MountDisplay from '../../../interface/tools/MountDisplay';

const DashboardHome = () => {

  useEffect(() => {
    MountDisplay(undefined, "Dashboard");
  }, []);

  return (
    <div className='student-dashboard-home-pg'>

      <div className='student-dashboard-announcements'>
        <div className='student-dashbboard-item-header'>
          <h1>Announcements</h1>
        </div>
      </div>

      <div className='student-dashboard-progress'>
        <div className='student-dashbboard-item-header'>
          <h1>My Progress</h1>
        </div>
      </div>

    </div>
  )
}

export default DashboardHome;