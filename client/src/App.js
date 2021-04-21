//import React, { useState } from 'react';
import { Box } from 'rebass';

// import Nav from './components/Nav';
import Shop from './pages/Shop';
import Header from './components/Header';
import Footer from './components/Footer';
import Login from './pages/Login';
import Logout from './pages/Logout';
 import SignUp from './pages/SignUp';
//  import MyCart from './pages/MyCart';
import Consumer from './pages/Consumer-Dashboard';
import Admin from './pages/Admin-Dashboard';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope, faKey, faSignInAlt, faShoppingCart, faHome, faSignOutAlt, faChalkboardTeacher, faUser, faWarehouse, faChartLine, faChartPie, faDollarSign, faMoneyCheck} from '@fortawesome/free-solid-svg-icons';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import AllSales from "./pages/AllSales/";
import Expenses from "./pages/Expenses/";
import Inventory from "./pages/Inventory/";
import NetRevenue from "./pages/NetRevenue/";
import SalesByFranchise from "./pages/SalesByFranchise/";
import ProductPage from './pages/ProductPage';


library.add(faEnvelope, faKey, faSignInAlt, faShoppingCart, faHome, faSignOutAlt, faChalkboardTeacher, faGithub, faUser, faWarehouse, faChartLine, faChartPie, faDollarSign, faMoneyCheck);



function App() {

  const handleLogIn = data => {
    console.log('something');
    console.log(data);

  }
  // const [token, setToken] = useState();

  // if (!token){
  //   return <Login setToken = {setToken}/>
  // }

  return (
    <>
     {/* <Login Login={Login} /> */}
    {/* </> */}
    
     <Box
  sx={{
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh'
  }}>
  <Box
    sx={{
      p: 3
    }}>
    <Header />
  </Box>
  <Box
    sx={{
      flex: '1 1 auto',
      p: 3
    }}>

  <Router>
      <Route exact path="/shop" component={Shop} />
      <Route path="/product" component={ProductPage}/>
      <Route path="/login" component={Login} />
      <Route path="/logout" component={Logout} />
      <Route path="/signup" component={SignUp} />
      <Route path="/dashboard" component={Consumer} />
      <Route path="/dashboard" component={Admin} />
  </Router>
  </Box>
  <Box
    sx={{
      p: 3
    }}>
    <Footer />
  </Box>
</Box> 
</>
  );
}

export default App;
