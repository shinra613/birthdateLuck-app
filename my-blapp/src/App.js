import './App.css';
import React, { useState } from "react";

function App() {
  let [dob, setdob] = useState("");
  let [luck, setluck] = useState("");
  let [result, setresult] = useState(<div>Hi there !!</div>);

  const finalresult = () => {
    dob = dob.replaceAll("-", "");
    let sum = 0;
    console.log(dob);
    for (let i = 0; i < dob.length; i++) {
      sum = sum + Number(dob.charAt(i));
    }
    if (sum % luck === 0) {
      setresult(<div>You so lucky, try getting a lottery ticket today!!</div>);
    } else {
      setresult(
        <div>
          You are as unlucky as Stefan Thomas (man who lost the password of his
          $220 million worth bitcoin wallet) !!
        </div>
      );
    }
  };

  return (
    <div className="App">
      <h1>Is your birth Date Lucky ?</h1>
      <div className="Container">
        <h2>Your Date of Birth</h2>
        <input
          className="inputs"
          value={dob}
          onChange={(event) => setdob(event.target.value)}
          type="date"
        />
        <h2>Your lucky Number</h2>
        <input
          className="inputs"
          value={luck}
          onChange={(event) => setluck(event.target.value)}
          type="text"
        />
        <br />
        <br />
        <button onClick={finalresult}>Check</button>
        <h2>Result</h2>
        <div className="result">{result}</div>
      </div>
      <footer>
        <h3>
          Made by{" "}
          <a href="https://akhilvenkateshpillai.vercel.app/" target="_blank">
            Akhil
          </a>
         

        </h3>
      </footer>
    </div>
  );
}

export default App;
