import {
    Box,
} from 'rebass';

import { Label, Radio } from '@rebass/forms';
import './style.css';

const Toggle = (props) => {
    return ( 
        <Box className="switch">
            <Label>{props.name}</Label>
            <Radio className="radio"
                name={props.name}
                id={props.id}
                // vlae={props.vlae}
                // TODO: find a way to hit a route with id argument passed in to bring back shows products when radio button clicked
                >
            </Radio>
        </Box>  
     );
}
 
export default Toggle;