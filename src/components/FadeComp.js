import React, { useState } from 'react';
import { Button, Fade } from 'reactstrap';

const FadeIn = (props) => {
    const [fadeIn, setFadeIn] = useState(false);
    console.log(props)
    const toggle = () => setFadeIn(!fadeIn);

    return (
        <div>
            <Button color="primary" onClick={toggle}>Show me the NASA</Button>
            <Fade in={fadeIn} tag="h5" className="mt-3">
                <img src={props.rendergraphic} alt='nasa' style={props.style}></img>
            </Fade>
        </div>
    );
}


export default FadeIn