import {
    Box,
} from 'rebass';
import React, { useState } from 'react';
import { Label, Radio } from '@rebass/forms';
import './style.css';
import API from '../../utils/API';



const Toggle = (props) => {


    // const [franchiseData, setfranchiseData] = useState([]);
    // const [franchise, setFranchise] = useState();
    const [itemList, setItemList] = useState([]);

//  twoCalls = e => {
//     function getData(franchise){API.getOneFranchise(franchise)
//         .then(franchise => setfranchiseData(franchise.data))};
//     function resetFranchise(prepsid){ 
//             setFranchise(prepsid)};
//   }


    // useEffect(()=>{
    //     API.getFranchises()
    //     .then(franchise=>setfranchiseData(franchise.data))
    // }, [])

    return (
         
        <Box className="switch">
            <Label>
            <Radio className="radio"
                name={props.name}
                id={props.id}
                // onChange={ () => console.log("onclick is triggered at " + (props.id))}  //works
                onChange={ () => API.getOneFranchise(props.id)
                    .then(res=> props.setFranchise(res.data))}  //test
                // onChange={ () => console.log("onchange is triggered at " + (props.id))}
                // TODO: find a way to hit a route with id argument passed in to bring back shows products when radio button clicked,
                // TODO review https://stackoverflow.com/questions/54032379/call-two-functions-within-onchange-event-in-react
                />
            </Label>
        </Box>  
     );
}
 
export default Toggle;