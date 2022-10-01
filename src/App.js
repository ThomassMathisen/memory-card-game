import React, { useState } from "react"
import Header from "./components/Header"
import Main from "./components/Main"
import Footer from "./components/Footer"

function App() {

  const [scores, setScores] = useState({best: 0, current: 0})
  return (
    <div className="App">
      <Header scores={scores} />
      <Main setScores={setScores} />
      <Footer />
    </div>
  );
}

export default App;