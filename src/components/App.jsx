import React, { Component, useState } from "react";
import "../css/App.css";
import data from "../sample_data.json";
import Question from "./Question/Question";
import NextQuestion from "./NextQuestion/NextQuestion";
function App() {
  var currentQuestionNumber = 0;
  const [correctAnswer, setcorrectAnswer] = useState("");
  return (
    <div className="app">
      Trivia!
      <Question text="How many planets are there? " />
      <button onClick={() => setcorrectAnswer(10)}>
        Click for the correct answer
      </button>
      {correctAnswer}
      <Question choices={[10, 29, 50, 30]}text={data[currentQuestionNumber]["question"]["text"]} />
      <NextQuestion />
    </div>
  );
}

export default App;
