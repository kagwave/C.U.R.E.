import './Form.css';
import React from 'react';

const GroupRating = (props: any) => {

  const { rubricScores, handleScoreChange, section, question } = props;

  const getStyle = (option: number): string => {
    if (rubricScores[section]) {
      if (rubricScores[section][question] === option) {
        return 'select-1-5';
      } else {
        return 'unselect-1-5';
      }
    } else {
        return 'unselect-1-5';
    }
  }

  return (
    <div id="button-select">
      <div className="score-buttons">
        <button
          className={rubricScores && rubricScores[section] ? getStyle(1) : 'unselect-1-5'}
          onClick={() => handleScoreChange(section, question, 1)}
        >
        1
        </button>
        <button
          className={rubricScores && rubricScores[section] ? getStyle(2) : 'unselect-1-5'}
          onClick={() => handleScoreChange(section, question, 2)}
        >
        2
        </button>
        <button
          className={rubricScores && rubricScores[section] ? getStyle(3) : 'unselect-1-5'}
          onClick={() => handleScoreChange(section, question, 3)}
        >
        3
        </button>
        <button
          className={rubricScores && rubricScores[section] ? getStyle(4) : 'unselect-1-5'}
          onClick={() => handleScoreChange(section, question, 4)}
        >
        4
        </button>
        <button
          className={rubricScores && rubricScores[section] ? getStyle(5) : 'unselect-1-5'}
          onClick={() => handleScoreChange(section, question, 5)}
        >
        5
        </button>
      </div>
    </div>
  );
}

export default GroupRating;
