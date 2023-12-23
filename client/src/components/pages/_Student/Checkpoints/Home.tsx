import MountDisplay from '../../../interface/tools/MountDisplay';
import './Home.css';
import React, { useEffect } from 'react';

const Checkpoints = () => {

  useEffect(() => {
    MountDisplay(undefined, "Checkpoints");
  }, []);

  return (
    <div className='student-checkpoints-pg'>
      
      <div className='student-checkpoints-header'>
        <h1>Project&nbsp;Timeline</h1>
      </div>
      
      <div className='student-checkpoints-container'>
        <div className='student-checkpoints-container-item'>
          <h1>Action Plan</h1>
        </div>
        <div id="student-checkpoint-connector"></div>
        <div className='student-checkpoints-container-item'>
          <h1>Checkpoint 2</h1>
        </div>
        <div id="student-checkpoint-connector"></div>
        <div className='student-checkpoints-container-item'>
          <i className="fa-light fa-lock"></i>
          <h1>Checkpoint 3</h1>
        </div>
        <div id="student-checkpoint-connector"></div>
        <div className='student-checkpoints-container-item'>
          <h1>Final Presentation</h1>
        </div>
      </div>
    </div>    
  )
}

export default Checkpoints;