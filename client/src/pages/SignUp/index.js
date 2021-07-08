import React, { useState, useEffect, useRef } from 'react'
import {
  Box,
  Flex,
  Button
} from 'rebass';
import './style.css'
import { Label, Input } from '@rebass/forms'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Redirect } from 'react-router-dom';
import API from '../../utils/API';

function SignUp({ setUser, user }) {
  // const [details, setDetails] = useState({ user_name: "", email: "", password: "" });
  
  const [redirect, setRedirect] = useState(false);
  const email = useRef();
  const user_name = useRef();
  const password = useRef();

  // For some reason after signing up, if you refresh the page it'll kick you out of the server. Don't refresh!

  useEffect(() => {
    if (user.user_name) setRedirect(true);
  }, [user]);
  
  const handleSignUp = async e => {
    e.preventDefault();
    try {
      const signedUpUser = await API.signUp( { user_name: user_name.current.value, password: password.current.value, email: email.current.value});
      console.log(signedUpUser);
      delete signedUpUser.data.password;
      setUser(signedUpUser);
      setRedirect(true);
      window.location.reload();
    } catch(err) {
      console.log('Signup error: ',err);
    }
  }

  return (
    <Flex className="container" alignItems='center'>
      {redirect && <Redirect to="/" />}
      <Box
        className="formCard"
        as='form'
        onSubmit={handleSignUp}
        py={3}>
        <Flex mx={-2} mb={3}>
          <Box width={1 / 2} px={3}>
            <h1>Sign Up</h1>
            <Label htmlFor='name'>
              <div className="form">
                <FontAwesomeIcon icon="user" />
                {' '}
                  user_name
                  </div>
            </Label>
            <Input
              id='user_name'
              name='user_name'
              placeholder='user_name'
              className="text"
              ref={user_name}
            />

            <Box>
              <Label htmlFor='email'>
                <div className="form">
                  <FontAwesomeIcon icon="envelope" />
                  {' '}
                  Email
          </div>
              </Label>
              <Input
                id='email'
                name='email'
                type='email'
                placeholder='jane@example.com'
                className="text"
                ref={email}
              />
            </Box>

            <Label htmlFor='password'>
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
              className="text"
              type='password'
              ref={password}
            />
          </Box>
        </Flex>
        <Button type="submit" mr={2} onSubmit={handleSignUp}>Sign Up</Button>
      </Box>
    </Flex>
  )
}

export default SignUp;