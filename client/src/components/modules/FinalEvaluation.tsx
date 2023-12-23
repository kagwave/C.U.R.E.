import './*.css';
import './FinalEvaluation.css'

import React, { useEffect, useState } from 'react';

import MountDisplay from '../interface/tools/MountDisplay';

import Assessment from './Assesment';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

import rubric from '../../data/final_evaluation_rubric'; // Import the rubric data and typ

let sections = Object.keys(rubric);

interface NestedRubricScores {
  [userId: number]: number;
}

interface RubricScores {
  [section: string]: {
    [question: number]: number | NestedRubricScores;
  };
}

const FinalEvaluation = () => {

  const group = ["Speaker 1", "Speaker 2", "Speaker 3", "Speaker 4", "Speaker 5"]
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const [currentSection, setCurrentSection] = useState(sections[currentSectionIndex]);
  const [rubricScores, setRubricScores] = useState<RubricScores>();

  useEffect(() => {
    MountDisplay(undefined, "Final Evaluation");
  }, []);

  const handleScoreChange = (section: string, question: number, score: number, userId?: number) => {
    setRubricScores((prevScores) => {
      const newScores = { ...prevScores } as RubricScores; // Type assertion

      if (!newScores[section]) {
        newScores[section] = {};
      }
  
      if (!newScores[section][question]) {
        newScores[section][question] = {};
      }
  
      if (userId) {
        // Convert to a NestedRubricScores object if it's a number
        (newScores[section][question] as NestedRubricScores)[userId] = score;
      } else {
        newScores[section][question] = score;
      }
  
      console.log(newScores);
      return newScores;
  });
  };

  const goToNextStep = () => {
    let newIndex = currentSectionIndex + 1;
    setCurrentSectionIndex(newIndex);
    setCurrentSection(sections[newIndex]);
  }

  const goToPreviousStep = () => {
    let newIndex = currentSectionIndex - 1;
    setCurrentSectionIndex(newIndex);
    setCurrentSection(sections[newIndex]);
  }

  return (
    <div id="page-content">

      <div className='module-header'>
        <div id="seperator" style={{height: '2px', background: 'gray'}}></div>
        <h1>Final Evaluation Rubric</h1>
      </div>

      <div className='section-container'>
        <h1>{sections[currentSectionIndex]+"."} {rubric[currentSection].title}</h1>

        {rubric[currentSection].type === 'group_rating' && 
          (rubric[currentSection].questions.map((question: string, index: number) => (
            <div key={index} className="question-container">
              <div className='question-container-question'>
                <p>{index+1}. {question}</p>
              </div>
              <GroupRating handleScoreChange={handleScoreChange} section={currentSection} question={index+1} rubricScores={rubricScores}/>
            </div>
          )))
        }


        {rubric[currentSection].type === 'individual_rating' && 
          (rubric[currentSection].questions.map((question: string, index: number) => (
            <div key={index} className="question-container">
              <div className='question-container-question'>
                <p>{question}</p>
              </div>
              <GroupRating handleScoreChange={handleScoreChange} section={currentSection} question={index+1} rubricScores={rubricScores}/>
            </div>
          )))
        }

        {rubric[currentSection].type === 'assessment' && 
          (group.map((student: string, index: number) => (
            <div key={index} className="assessment-container">
              <p>{student}</p>
              <Assessment group={group} handleScoreChange={handleScoreChange} section={currentSection} question={index+1} rubricScores={rubricScores}/>
            </div>
          )))
        }
      </div>

      <div className="section-nav" style={{justifyContent: currentSectionIndex === 0 ? 'center' : 'space-between'}}>
        {currentSectionIndex > 0 &&
          <button className="step-nav-btn" onClick={goToPreviousStep}>
            <FontAwesomeIcon icon={faArrowLeft}  style={{marginRight: '10px'}}/>
            Go Back
          </button>
        }
        <button className="step-nav-btn" onClick={goToNextStep}>
          Continue 
          <FontAwesomeIcon icon={faArrowRight} style={{marginLeft: '10px'}}/>
        </button>
      </div>
    
    </div>
  );
}

export default FinalEvaluation;


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

