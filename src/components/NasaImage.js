import React, {useState, useEffect } from 'react';
import axios from 'axios';

const NasaImage = (props) => {
    
    let [imgState, setImgstate] = useState();
    let styles = {
      margin: '20px',
      width: '1024px',
      height: '800px',
    };
    useEffect( () => {
      axios.get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`)
      .then(response => { 
        console.log(response.data.hdurl)
        setImgstate(response.data.hdurl)
      })
      .catch(error => {
        console.log(error)
      })
    }, []);
  
    
    return ( 
    
    <div> 
        <h1>{}</h1>
        <img src={imgState} alt='nasababy' style={styles}></img>
    </div> 
    
    )
}

export default NasaImage;