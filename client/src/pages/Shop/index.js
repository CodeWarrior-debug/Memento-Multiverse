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
        (!franchise) ? setFranchise([1]) : setFranchise(franchise);
        API.getOneFranchise(2) // TODO: should not be hard coded, should be able to put franchise in here
    .then((list)=>{
        // console.log(list.data)
        setItemList(list.data)
    })
    },[])
    return (
        <div className="containers">
                        <ToggleContainer className="tog"/>
            <Box>
                <div className="shop">
                    {
                        itemList.map((item, i) => <Card className="item" key={i} {...item} />)
                    }
                </div>
            </Box>
        </div>
    )
}

export default Shop;