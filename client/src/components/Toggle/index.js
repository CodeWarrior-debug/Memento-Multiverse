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
  

    const changeFranchise =(id)=>{
        console.log("here", id, props.franchiseSelected)
        if(id === props.franchiseSelected) history.push('/shop')
        else history.push('/shop/'+props.id)
    }



   // const [itemList, setItemList] = useState([]);


    return (
         <>
        <Box className="switch">
            <Label p={2} onClick={ () => changeFranchise(props.id)} >
            <Radio className="radio"
                name={props.name}
                id={props.id}
                checked= {props.franchiseSelected === props.id}
                />
            {props.name}
            </Label>
        </Box> 
        </> 
     );
}
 
export default Toggle;