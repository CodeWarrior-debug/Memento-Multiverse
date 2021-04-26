import React, { useMemo, useState, useEffect } from "react";

// import MOCK_DATA from './MOCK_DATA.json';
import API from "../../utils/API";

const AdminTable = () => {
  const [data, setData] = useState([]);
  
  useEffect(() => {
    setData(API.getAllTransactions());
  },[])

  console.log(data);
}
  export default AdminTable;