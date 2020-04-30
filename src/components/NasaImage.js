import React, {useState, useEffect } from 'react';
import axios from 'axios';
// import BodyComp from './HeaderComp';
import FadeComp from './FadeComp';
import NASACard from './NASACard';

const NasaImage = (props) => {
    
    
  
    let [imgState, setImgstate] = useState();
    let [expState, setexpState] = useState();
    let styles = {
      margin: '20px',
      width: '380',
      height: '180px',
    };
    useEffect( () => {
      axios.get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`)
      .then(response => { 
        console.log(response)
        setImgstate(response.data.hdurl)
        setexpState(response.data.explanation)
      })
      .catch(error => {
        console.log(error)
      })
    }, []);
  
    
    return ( 
    
    <div> 
        <FadeComp rendergraphic={imgState} style={styles}/>
        
        {/* <BodyComp headline={expState} /> */}
    </div> 
    
    )
}

export default NasaImage;