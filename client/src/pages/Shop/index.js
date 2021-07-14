import React, { useEffect, useState } from 'react';
import Card from '../../components/Card';
import { Box } from 'rebass';
import './style.css';
import API from '../../utils/API.js';
import ToggleContainer from '../../components/Toggle-Container';
import { useParams } from 'react-router-dom';

function Shop() {
  const [franchise, setFranchise] = useState(0);
  const [itemList, setItemList] = useState([]);
  const [bg, setBg]=useState("");
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      API.getOneFranchise(id)
        .then((list) => {
          setItemList(list.data);
          setFranchise(parseInt(id))
        });
    } else {
      API.getAll()
        .then((list) => {
          setItemList(list.data);
          setFranchise(0)
        });
    }
  }, [id]);

  useEffect(() => {
    API.getOneFranchise(id)
    .then(()=> {
      if (id==="1") {
        setBg("bgS")
      } else if (id==="2") {
        setBg("bgRAM")
      } else if (id==="3") {
        setBg("bgHI")
      } else if (id==="4") {
        setBg("bgFG")
      } else if (id==="5") {
        setBg("bgTO")
      } else {
        setBg("containers")
      }

    })
  },[id]);

  return (
    <div className={bg}>
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
