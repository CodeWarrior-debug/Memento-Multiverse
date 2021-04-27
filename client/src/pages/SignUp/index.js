import React, { useState, useEffect } from 'react'
import {
  Box,
  Flex,
  Button
} from 'rebass';
import './style.css'
import { Label, Input, Checkbox } from '@rebass/forms'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Redirect } from 'react-router-dom';
import API from '../../utils/API';

function SignUp({ setUser, user }) {
  const [details, setDetails] = useState({ user_name: "", email: "", password: "" });
  const [redirect, setRedirect] = useState(false);

  // For some reason after signing up, if you refresh the page it'll kick you out of the server. Don't refresh!

  useEffect(() => {
    if (user.user_name) setRedirect(true);
  }, [user]);
  
  const handleSignUp = async e => {
    e.preventDefault();
    try {
      const signedUpUser = await API.signUp(details);
      setUser(signedUpUser.data);
      console.log(signedUpUser.data.msg)
    } catch(err) {
      console.log(err);
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
                  Username
                  </div>
            </Label>
            <Input
              id='username'
              name='username'
              placeholder='Username'
              onChange={e => setDetails({ ...details, user_name: e.target.value })}
              value={details.user_name}
            />

            {/* email */}
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
                onChange={e => setDetails({ ...details, email: e.target.value })}
                value={details.email}
              />
            </Box>

            {/* password */}
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
              type='password'
              onChange={e => setDetails({ ...details, password: e.target.value })}
              value={details.password}
            />
          </Box>
        </Flex>
        {/* Signup button */}
        <Button type="submit" mr={2} onSubmit={handleSignUp}>Sign Up</Button>
      </Box>
    </Flex>
  )
}

export default SignUp;