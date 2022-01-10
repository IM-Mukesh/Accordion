import React, { useState } from 'react';

const RightAccordion = ({ question, answer, index }) => {
  const [mode, setMode] = useState(false);

  const toggleAnswer = ()=>{
    setMode(!mode);
  }
  return (
    <div id = {index} className="row">
      <div className="question-part" onClick={() => toggleAnswer()}>
        <div>{question}</div>
        <div>{(mode) ? '-' : '+'}</div>
      </div>
      {(mode) && <div className="answer-part">{answer}</div>}
    </div>
  );
};

export default RightAccordion;