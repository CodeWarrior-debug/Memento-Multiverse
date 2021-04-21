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


function Shop() {


    const [itemList, setItemList] = useState([]);
    useEffect(() => {
        API.getAll()
        .then((list)=>{
            setItemList(list.data)
        })

    }, [])
    return (
        <div className="container">
            <Box className="toggel">
                <Flex>
                    <Box>
                        <Box className="switch">
                            <Label>Family Guy</Label>
                            <Radio className="radio"
                                name="Family Guy"
                                id="fg"
                                vlae="fg">
                            </Radio>
                        </Box>
                        <Box className="switch">
                            <Label>Home Improvement</Label>
                            <Radio className="radio"
                                name="Home Improvement"
                                id="hi"
                                vlae="hi">
                            </Radio>
                        </Box>
                        <Box className="switch">
                            <Label>The Office</Label>
                            <Radio className="radio"
                                name="The Office"
                                id="office"
                                vlae="office">
                            </Radio>
                        </Box>
                        <Box className="switch">
                            <Label>Rick and Morty</Label>
                            <Radio className="radio"
                                name="Rick and Morty"
                                id="rm"
                                vlae="rm">
                            </Radio>
                        </Box>
                        <Box className="switch">
                            <Label>Seinfeld</Label>
                            <Radio className="radio"
                                name="Seinfeld"
                                id="seinfeld"
                                vlae="seindfeld">
                            </Radio>
                        </Box>
                    </Box>
                </Flex>
            </Box>
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