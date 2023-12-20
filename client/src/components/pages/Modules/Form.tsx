import React, { useEffect, useState } from 'react';

import MountDisplay from '../../interface/tools/MountDisplay';

import GroupRating from './GroupRating';
import Assessment from './Assesment';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

import rubric from '../../../data/rubric'; // Import the rubric data and typ

let sections = Object.keys(rubric);

interface NestedRubricScores {
  [userId: number]: number;
}

interface RubricScores {
  [section: string]: {
    [question: number]: number | NestedRubricScores;
  };
}

const Form = () => {

  const group = ["Speaker 1", "Speaker 2", "Speaker 3", "Speaker 4", "Speaker 5"]
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const [currentSection, setCurrentSection] = useState(sections[currentSectionIndex]);
  const [rubricScores, setRubricScores] = useState<RubricScores>();

  useEffect(() => {
    MountDisplay(undefined, undefined);
  }, [])

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

      <div className='checkpoint-header'>
        <div id="seperator" style={{height: '2px', background: 'black'}}></div>
        <h1>Project Evaluation Rubric</h1>
      </div>

      <div className='section-container'>
        <h2>{sections[currentSectionIndex]+"."} {rubric[currentSection].title}</h2>

        {rubric[currentSection].type === 'group_rating' && 
          (rubric[currentSection].questions.map((question: string, index: number) => (
            <div key={index} className="question-container">
              <div className='question-container-question'>
                <p>{question}</p>
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

export default Form;
