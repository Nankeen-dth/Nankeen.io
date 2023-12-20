import React from "react";
import Quiz from "./Quiz";
import Obey from "./Obey";

const HomePage = ({
  handleClickYes,
  displayMessage,
  hidePromt,
  displayQuiz,
  displayNoMessage,
  handleClickObey,
  handleClickContinue,
  handleSubmit,
}) => {
  var today = new Date();
  var curHr = today.getHours();
  var text = "";
  if (curHr < 12) {
    text += "Good Morning!";
  } else if (curHr < 18) {
    text += "Good Afternoon!";
  } else {
    text += "Good Evening!";
  }

  return (
    <main className="mainClass">
      <header className="header" style={{ display: hidePromt }}>
        <h3 className="h3">
          ARE <span>YOU</span>
        </h3>
        <h1 className="nankeen">
          NANKEEN <span>?</span>
        </h1>

        <button className="yes" onClick={handleClickYes}>
          Yes
        </button>
      </header>
      <div style={{ display: displayMessage }} className="promt">
        <p className="greetUser">
          Hello <span>Nankeen</span>, <span className="greet">{text}</span>
        </p>
        <p className="auth">
          Do you want to <span>Continue</span>?
        </p>
        <button onClick={handleClickContinue}>Yes</button>
        <button onClick={handleClickObey}>No</button>
      </div>
      <Quiz displayQuiz={displayQuiz} handleSubmit={handleSubmit} />
      <Obey displayNoMessage={displayNoMessage} />
    </main>
  );
};

export default HomePage;
