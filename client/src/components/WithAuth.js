import { Redirect, Route } from 'react-router-dom';

const WithAuth = ({ user, component: Component, ...rest }) => {
    if (!user || !user.username) {
        return <Redirect to="/login" />
    }
    return (
        <Route
            {...rest}
            render={(props) => <Component {...props} user={user} />}
        />
    )
}

export default WithAuth;