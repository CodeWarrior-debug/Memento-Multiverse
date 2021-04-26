import React, { useEffect, useState } from 'react'
import Card from '../../components/Card';
import {
    Box,
    Flex,
    Button
} from 'rebass';
import { Label, Radio } from '@rebass/forms'
import './style.css'
import API from '../../utils/API.js';
import ToggleContainer from '../../components/Toggle-Container';


function Shop() {

    const [franchise, setFranchise] = useState([]);
        const [itemList, setItemList] = useState([]);
    
    useEffect(() => {  //TODO is async await needed here, so line 20 finishes before line 21 runs? 
        API.getOneFranchise(1) // TODO: should not be hard coded, should be able to put franchise in here
    .then((list)=>{
        setItemList(list.data)
    })
    },[])
    return (
        <div className="containers">
                        <ToggleContainer setFranchise={setFranchise} className="tog"/>
                        
            <Box>
                <div className="shop">
                    {
                       (franchise.length) ? franchise.map((item, i) => <Card className="item" key={i} {...item} />) : itemList.map((item, i) => <Card className="item" key={i} {...item} />)
                    }
                </div>
            </Box>
        </div>
    )
}

export default Shop;