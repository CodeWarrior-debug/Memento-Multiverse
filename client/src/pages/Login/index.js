import React from 'react';
import {
    Label,
    Input,
    Checkbox,
} from '@rebass/forms';
import {
    Box,
    Button,
    Flex,
    Text
} from 'rebass';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Login({ Login }) {
    const [details, setDetails] = useState({username: "", password: ""});

    const submitHandler = e => {
        e.preventDefault();

        Login(details);
    }

    return (
            <div className="container">
                <Box
                    className="formCard"
                    as='form'
                    onSubmit={submitHandler}
                    py={3}>
                    <Flex mx={-2} mb={3}>
                        <Box width={1 / 2} px={3}>
                            <h1>Sign In</h1>
                            <Label>
                                <div className="form">
                                    <FontAwesomeIcon icon="user" />
                                    {' '}
                                 Username
                             </div>
                            </Label>
                            <Input
                                id='username'
                                name='username'
                                placeholder='username'
                                onChange={e => setDetails({ ...details, username: e.target.value })}
                                value={details.username}
                            />
                        </Box>
                        <Box width={1 / 2} px={3}>
                            <Label>
                                <div className="form">
                                    <FontAwesomeIcon icon="key" />
                                    {' '}
                                 Password
                             </div>
                            </Label>
                            <Input
                                id='password'
                                name='password'
                                placeholder='password'
                                onChange={e => setDetails({ ...details, password: e.target.value })}
                                value={details.password}
                            />
                        </Box>
                        <Label width={[1 / 2, 1 / 4]} p={2}>
                            <Checkbox
                                id='auth'
                                name='auth'
                            />
                             I am not a Robot
                         </Label>
                    </Flex>
                    <div className="btns">
                        <Button type="submit">Login</Button>
                        <Label>Don't have an account?</Label>
                        <a className="redirect" href="/signup">Sign up here!</a>
                    </div>
                </Box>

            </div>
    )
}

export default Login;