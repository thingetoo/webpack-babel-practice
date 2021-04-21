import React from 'react';
import QuestionEntry from './QuestionEntry.jsx';

const QuestionList = (props) => (
  <div className='questionList-div'>
    {props.questions.map((question, index)=> (
     <QuestionEntry question={question} key={index} name={props.name}/>
    )
    )}
  </div>
)



export default QuestionList;