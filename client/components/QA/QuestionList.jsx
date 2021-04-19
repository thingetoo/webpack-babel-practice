import React from 'react';
import QuestionEntry from './QuestionEntry.jsx';

const QuestionList = (props) => (
  <div>
    {props.questions.map((question, index)=> (
     <QuestionEntry question={question} key={index}/>
    )
    )}
  </div>
)



export default QuestionList;