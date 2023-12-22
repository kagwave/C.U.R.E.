interface rubricType {
    [x: string]: any
}

const rubric: rubricType = {
  A: {
    title: 'Contents of the Presentation',
    type: 'group_rating',
    questions: [
      'Did the speakers introduce the subject matter of the talk?',
      'Did the speakers explain the principles of the research clearly?',
      'Did they provide adequate details about the experimental parameters and sample preparation/analysis steps?',
      'Was the overall quality of the data presented good (e.g. graphs, tables, statistical analysis, standard error, significant figures..etc.)?',
      'Did they present the materials clearly and in a logical order?',
      'Did the speakers provide an adequate summary of the results?',
      'Did the speakers comment about whether the acquired data allow for a conclusion to be drawn? and why or why not?',
      'Did they present scientific reasons about the disagreement (or agreement) of the data with proposed hypotheses in literature?',
      'Was the presentation too short/long?'
    ]
  },
  B: {
    title: 'Presentation Style',
    type: 'individual_rating',
    questions: [
      'Did the speaker contribute an adequate (equal) amount of time to the presentation?',
      'Did the speaker establish good interaction with the audience?',
      'Did she/he speak clearly and audibly?',
      'Did the speaker assume the correct level of knowledge from the audience?',
      'Did the speaker explain all the special terms, without excessive usage of “jargon”?',
      'Did the speaker answer questions correctly and to the point?'
    ]
  },
  C: {
    title: 'Individual Assessments',
    type: 'assessment',
    questions: []
  },
};
  
export default rubric;
  