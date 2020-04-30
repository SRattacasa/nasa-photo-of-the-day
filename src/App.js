import React from "react";
import "./App.css";
import NasaImage from "./components/NasaImage";
import FadeIn from "./components/FadeComp";
import { Button, Fade } from 'reactstrap';

function App() {
  
 

  return (
    <div className="App">
      
      <NasaImage />
      <p>
        <span role="img" aria-label='go!'>🚀</span>!
      </p>
    
  
    </div>
  );
}

export default App;
