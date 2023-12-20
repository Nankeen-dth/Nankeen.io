import { useState } from "react";
import HomePage from "./HomePage";

function App() {
  const [displayMessage, setDisplayMessage] = useState("none");
  const [hidePromt, setHidePromt] = useState("");
  const [displayQuiz, setDisplayQuiz] = useState("none");
  const [displayNoMessage, setDisplayNoMessage] = useState("none");

  function handleClickYes() {
    setDisplayMessage("");
    setHidePromt("none");
  }

  function handleClickContinue() {
    setDisplayQuiz("");
    setDisplayMessage("none");
  }
  function handleClickObey() {
    setDisplayNoMessage("");
    setDisplayMessage("none");
  }

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div className="App">
      <HomePage
        handleClickYes={handleClickYes}
        displayMessage={displayMessage}
        hidePromt={hidePromt}
        displayQuiz={displayQuiz}
        displayNoMessage={displayNoMessage}
        handleClickContinue={handleClickContinue}
        handleClickObey={handleClickObey}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}

export default App;
