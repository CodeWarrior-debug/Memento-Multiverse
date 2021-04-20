import React, { useEffect, useState } from 'react'
import Card from '../../components/Card.js';

function Shop() {
    const [itemList, setItemList] =useState([]);
    useEffect(()=>{
      setItemList([{
             id: 1,
            image: "https://imgur.com/9nfklQu.png", 
             title: "Mega Seed",
             price: "25", 
             stock: "340",
             sold: "127",
             description: "Brought to you straight form the fruit of mega seed tress from Dimension 35-C. These mega seeds are of the highest quality available. They contain many properties, however, the most well know is their ability to briefly endow  a person with super-intelligence when disolved in the rectum. In addidition, when you buy two or more mega seeds, we will include a specail butt cream for free! Warning: Once the supper-intelligence wears off, the user will lose motor and/or brain funciton for several days."
         }])

    },[])
    return (
        <div>
            {
                itemList.map((item)=><Card key={item.id} {...item}  />)
            }
            
        </div>
    )
}

export default Shop;