import {
    Box,
} from 'rebass';

import { Label, Radio } from '@rebass/forms'

const Toggle = (props) => {
    return ( 
        <Box className="switch">
            <Label>{props.name}</Label>
            <Radio className="radio"
                name={props.name}
                id={props.id}
                // vlae={props.vlae}
                >
            </Radio>
        </Box>  
     );
}
 
export default Toggle;