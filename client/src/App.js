// import Nav from './components/Nav';
// import Shop from './pages/Shop';
import Header from './components/Header';
// import Login from './pages/Login';
// import Logout from './pages/Logout';
// import SignUp from './pages/SignUp';
// import ConsumerDashboard from './pages/Consumer-Dashboard';
// import AdminDashboard from './pages/Admin-Dashboard';
// import { BrowserRouter as Router, Route } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope, faKey, faSignInAlt, faShoppingCart, faHome } from '@fortawesome/free-solid-svg-icons';

library.add(faEnvelope, faKey, faSignInAlt, faShoppingCart, faHome);



function App() {
  return (
    <>
    <Header />
      {/* <Router>
          <Nav />
          <Route exact path="/" component={Shop} />
          <Route path="/" component={Login} />
          <Route path="/" component={Logout} />
          <Route path="/" component={SignUp} />
          <Route path="/" component={ConsumerDashboard} />
          <Route path="/" component={AdminDashboard} />
      </Router> */}
    </>
  );
}

export default App;
