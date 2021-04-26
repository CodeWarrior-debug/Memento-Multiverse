import {
    Box,
} from 'rebass';
import React, { useState } from 'react';
import { Label, Radio } from '@rebass/forms';
import './style.css';
import API from '../../utils/API';
import { useHistory } from 'react-router-dom';



const Toggle = (props) => {
    const history = useHistory();
    // twoCalls = e => {
    //     const 
    // }

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

    // const [franchise, setFranchise] = useState(1);
    // const [itemList, setItemList] = useState([]);
    // API.getOneFranchise(franchise)

    //       onChange={this.twoCalls}
    //   />
    //   Or...
      
    //   <FormControl
    //       name="searching"
    //       placeholder="Searching"
    //       onChange={e => { this.functionOne(e); this.functionTwo() }}
    //   />

    const changeFranchise =(id)=>{
        console.log("here", id, props.franchiseSelected)
        if(id === props.franchiseSelected) history.push('/shop')
        else history.push('/shop/'+props.id)
    }
    return (
         <>
        <Box className="switch">
            <Label width={[ 1/2, 1/4 ]} p={2} onClick={ () => changeFranchise(props.id)} >
            <Radio className="radio"
                name={props.name}
                id={props.id}
                checked= {props.franchiseSelected === props.id}
                 //works
                // onChange={ () => console.log("onchange is triggered at " + (props.id))}
                // TODO: find a way to hit a route with id argument passed in to bring back shows products when radio button clicked,
                // TODO review https://stackoverflow.com/questions/54032379/call-two-functions-within-onchange-event-in-react
                />
            {props.name}
            </Label>
        </Box> 
        </> 
     );
}
 
export default Toggle;