import './*.css';
import "./WeeklyJournal.css";
import React from "react";

const WeeklyJournal = () => {

  return (
    <div className="student-journal-pg">
      
      <div className='module-header'>
        <div id="seperator" style={{height: '2px', background: 'gray'}}></div>
        <h1>Weekly Journal</h1>
      </div>

      <div className="summary-container">
        <h2>Summary</h2>
        <h3>Write 100-200 words on what you and your team accomplished this week.</h3>
        <textarea className="summary-input"/>
      </div>

      <div className="summary-container">
        <h2>Data</h2>
        <input type="file"/>
      </div>

    </div>
  )
}

export default WeeklyJournal;