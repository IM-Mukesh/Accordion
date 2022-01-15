import Accordian from "./Accordion";
import React from "react";
import {useState} from "react"


function App() {
  const [dir,setdir]=useState(0)
 const arr = [
   {
     content:
       " Lorem ipsum dolor ",
     Title: "title",
   },
   {
     content:
       " Lorem ipsum dolor ",
     Title: "title",
   },
   {
     content:
       " Lorem ipsum dolor ",
     Title: "title",
   },
   {
     content:
       " Lorem ipsum dolor ",
     Title: "title",
   },
 ];
  return (
    <>
      <button
        name={0}
        onClick={(e) => {
          setdir(e.target.name);
        }}
      >top</button>
      <button
        name={1}
        onClick={(e) => {
          setdir(e.target.name);
        }}
      >right</button>
      <button
        name={2}
        onClick={(e) => {
          setdir(e.target.name);
        }}
      >bottom</button>
      <button
        name={3}
        onClick={(e) => {
          setdir(e.target.name);
        }}
      >left</button>
      <div>direction:{dir}</div>
      {arr.map((obj,index) => {
        const { content, Title } = obj;

        return (
            <Accordian  content={content} Title={Title} dir={dir} className="App" />
        
        );
      })}
    </>
  );
}

export default App;