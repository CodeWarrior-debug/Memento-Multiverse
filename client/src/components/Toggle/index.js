import {
    Box,
} from 'rebass';
import React, { useState } from 'react';
import { Label, Radio } from '@rebass/forms';
import './style.css';
import API from '../../utils/API';



const Toggle = (props) => {

    twoCalls = e => {
        const 
    }

    // twoCalls = e => {
    //     this.functionOne(e)
    //     this.functionTwo()
    //   }
    //   .
    //   .
    //   .
    //   <FormControl
    //       name="searching"
    //       placeholder="Searching"
    //       onChange={this.twoCalls}
    //   />
    //   Or...
      
    //   <FormControl
    //       name="searching"
    //       placeholder="Searching"
    //       onChange={e => { this.functionOne(e); this.functionTwo() }}
    //   />



    const [franchise, setFranchise] = useState(1);
    const [itemList, setItemList] = useState([]);
    API.getOneFranchise(franchise)

    return (
         
        <Box className="switch">
            <Label>
            <Radio className="radio"
                name={props.name}
                id={props.id}
                onChange={ () => console.log("onclick is triggered at " + (props.id))}  //works
                // onChange={ () => console.log("onchange is triggered at " + (props.id))}
                // TODO: find a way to hit a route with id argument passed in to bring back shows products when radio button clicked,
                // TODO review https://stackoverflow.com/questions/54032379/call-two-functions-within-onchange-event-in-react
                />
            </Label>
        </Box>  
     );
}
 
export default Toggle;