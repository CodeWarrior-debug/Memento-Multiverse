import { Route } from 'react-router-dom';
import Login from '../pages/Login';

const WithAuth = () => {
    return (
       <>
            <Route>
                <Login />
            </Route>
       </>

   )
}

export default WithAuth;