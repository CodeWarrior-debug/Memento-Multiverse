import React, { useState, useEffect, useRef } from 'react';
import {
    Label,
    Input} from '@rebass/forms';
import {
    Box,
    Button,
    Flex
} from 'rebass';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import API from '../../utils/API';
import { Redirect } from 'react-router-dom';
import './style.css';

function Login({ setUser, user }) {
    const [redirect, setRedirect] = useState(false);
    const user_name = useRef();
    const password = useRef();

    useEffect(() => {
        if (user.user_name) setRedirect(true)
    }, [user]);

    const submitHandler = async e => {
        e.preventDefault();
        try {
            const loggedInUser = await API.logIn({ user_name : user_name.current.value, password : password.current.value} );
            // setUser(loggedInUser.data);
            delete loggedInUser.data.user.password;
            setUser(loggedInUser);
            setRedirect(true);
            window.location.reload();
        } catch (err) {
            console.log('Login error: ', err);
        }
    }


    return (
        <Flex className="container" alignItems='center'>
            {redirect && <Redirect to="/" />}
            <Box
                className="formCard"
                as='form'
                onSubmit={submitHandler}
                py={3}>
                <Flex mx={-2} mb={3}>
                    <Box width={1 / 2} px={3}>
                        <h1>Log In</h1>
                        <Label>
                            <div className="form">
                                <FontAwesomeIcon icon="user" />
                                {' '}
                                 user_name
                             </div>
                        </Label>
                        <Input
                            className="text"
                            id='user_name'
                            name='user_name'
                            placeholder='user_name'
                            ref={user_name}
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
                            className="text"
                            ref={password}
                            id='password'
                            name='password'
                            type='password'
                            placeholder='password'
                        />
                    </Box>
                    <Flex alignItems='center'>
                        <Box>
                            <Button className="btns" type="submit">Login</Button>
                            <Box>
                                <p className="lable-text">Don't have an account?</p>
                                <a className="redirect" href="/signup"> <p className="lable-text">Sign up here!</p></a>
                            </Box>
                        </Box>
                    </Flex>
                </Flex>
            </Box>
        </Flex>
    )
}

export default Login;