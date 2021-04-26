import React, { useEffect, useState } from 'react';
import Card from '../../components/Card';
import { Box, Flex, Button } from 'rebass';
import { Label, Radio } from '@rebass/forms';
import './style.css';
import API from '../../utils/API.js';
import ToggleContainer from '../../components/Toggle-Container';
import { useParams } from 'react-router-dom';

function Shop() {
  const [franchise, setFranchise] = useState(0);
  const [itemList, setItemList] = useState([]);
  const {id} = useParams();
  useEffect(() => {
    //TODO is async await needed here, so line 20 finishes before line 21 runs?
    if(id){
        API.getOneFranchise(id) // TODO: should not be hard coded, should be able to put franchise in here
          .then((list) => {
             console.log(list.data)
            setItemList(list.data);
            setFranchise(parseInt(id))
          });
    } else {
        API.getAll() // TODO: should not be hard coded, should be able to put franchise in here
          .then((list) => {
             console.log(list.data)
            setItemList(list.data);
            setFranchise("0")
          });
    }
  }, [id]);
  return (
    <div className="containers">
      <ToggleContainer className="tog" franchiseSelected={franchise} />
      <Box>
        <div className="shop">
          {itemList.map((item, i) => (
            <Card className="item" key={i} {...item} />
          ))}

        </div>
      </Box>
    </div>
  );
}

export default Shop;
