import React from "react";
import RightAccordion from "./RightAccordion";
import myData from "./data/data";
import './design/style.css'

const App = () => {
return (
  <div>
    <h1>Open in Right</h1>
    <div className="container">
      {myData.map((item, index) => (
        <RightAccordion question={item.question} answer={item.answer} index={index} />
      ))}
    </div>
  </div>
);

};

export default App;