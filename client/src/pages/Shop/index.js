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


    const [itemList, setItemList] = useState([]);
    useEffect(() => {
        API.getOneFranchise(1) // TODO: change routing/Not working
        .then((list)=>{
            console.log(list.data)
            setItemList(list.data)
        })

    }, [])
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