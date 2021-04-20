import { Box } from 'rebass';
// import Nav from './components/Nav';
import Shop from './pages/Shop';
import Header from './components/Header';
import Footer from './components/Footer';
import Login from './pages/Login';
//import Logout from './pages/Logout';
 import SignUp from './pages/SignUp';
import Consumer from './pages/Consumer-Dashboard';
import Admin from './pages/Admin-Dashboard';
// import { BrowserRouter as Router, Route } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope, faKey, faSignInAlt, faShoppingCart, faHome, faSignOutAlt, faChalkboardTeacher, faUser, faWarehouse, faChartLine, faChartPie, faDollarSign, faMoneyCheck} from '@fortawesome/free-solid-svg-icons';
import {faGithub} from '@fortawesome/free-brands-svg-icons'

library.add(faEnvelope, faKey, faSignInAlt, faShoppingCart, faHome, faSignOutAlt, faChalkboardTeacher, faGithub, faUser, faWarehouse, faChartLine, faChartPie, faDollarSign, faMoneyCheck);



function App() {
  return (
    <>
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
    <Shop />
  {/* <Router>
      <Nav />
      <Route exact path="/" component={Shop} />
      <Route path="/" component={Login} />
      <Route path="/" component={Logout} />
      <Route path="/" component={SignUp} />
      <Route path="/" component={ConsumerDashboard} />
      <Route path="/" component={AdminDashboard} />
  </Router> */}
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
