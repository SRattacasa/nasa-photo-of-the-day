import React from "react";
import "./App.css";

function App() {
  const axios = require('axios');
  const apiURL = `https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`;
  // ${date-yyyy-mm-dd}/${hd}
  axios.get(apiURL)
  .then(response => {console.log(response)})
  .catch(error => {console.log(error)})
  return (
    <div className="App">
      
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
    </div>
  );
}

export default App;
