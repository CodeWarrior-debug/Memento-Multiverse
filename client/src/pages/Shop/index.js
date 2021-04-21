import React, { useEffect, useState } from 'react'
import Card from '../../components/Card.js';
import {
    Box,
    Flex,
    Button
} from 'rebass';
import './style.css'


function Shop() {


    const [itemList, setItemList] = useState([]);
    useEffect(() => {
        setItemList([{
            id: 1,
            image: "https://imgur.com/9nfklQu.png",
            title: "Mega Seed",
            price: "25",
            stock: "340",
            sold: "127",

        },
        {
            id: 2,
            image: "https://imgur.com/srBEPdv.png",
            title: "Jerry's Mind Blowers",
            price: "Free",
            stock: "99999",
            sold: "0",


        },
        {
            id: 3,
            image: "https://imgur.com/nT6qzNy.png",
            title: "Mulan McNugget Sauce",
            price: "400",
            stock: "300",
            sold: "127",

        },
        {
            id: 4,
            image: "https://imgur.com/XdTxABN.png",
            title: "Plumbus",
            price: "6.5",
            stock: "69",
            sold: "34",

        },
        {
            id: 4,
            image: "https://imgur.com/XdTxABN.png",
            title: "Plumbus",
            price: "6.5",
            stock: "69",
            sold: "34",

        },
        {
            id: 1,
            image: "https://imgur.com/9nfklQu.png",
            title: "Mega Seed",
            price: "25",
            stock: "340",
            sold: "127",

        },
        {
            id: 2,
            image: "https://imgur.com/srBEPdv.png",
            title: "Jerry's Mind Blowers",
            price: "Free",
            stock: "99999",
            sold: "0",


        },
        {
            id: 3,
            image: "https://imgur.com/nT6qzNy.png",
            title: "Mulan McNugget Sauce",
            price: "400",
            stock: "300",
            sold: "127",

        },
        ])

    }, [])
    return (
        <div className="container">
        <Box className="toggel">
                <Flex>
                    <Box>
                        <h1>Hello</h1>
                    </Box>
                </Flex>
            </Box>
        <Box>
        <div className="shop">
            {
                itemList.map((item) => <Card className="item" key={item.id} {...item} />)
            }

        </div>
        </Box>
        </div>
    )
}

export default Shop;