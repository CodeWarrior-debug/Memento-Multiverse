import {
    Box,
} from 'rebass';
import React, { useState } from 'react';
import { Label, Radio } from '@rebass/forms';
import './style.css';

const Toggle = (props) => {

    const [franchise, setFranchise] = useState([]);


    return (
         
        <Box className="switch">
            <Label>
            <Radio className="radio"
                name={props.name}
                id={props.id}
                // onChange={ () => console.log("onchange is triggered at " + (props.id))}
                onChange={setFranchise(props.id)}
                // onChange={location.reload}
                // TODO: find a way to hit a route with id argument passed in to bring back shows products when radio button clicked,
                // TODO review https://stackoverflow.com/questions/54032379/call-two-functions-within-onchange-event-in-react
                />
            </Label>
        </Box>  
     );
}
 
export default Toggle;