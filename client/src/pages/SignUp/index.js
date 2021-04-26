import React, { useState } from 'react'
import {
  Box,
  Flex,
  Button
} from 'rebass';
import './style.css'
import { Label, Input, Checkbox } from '@rebass/forms'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import API from '../../utils/API';

function SignUp() {
  const [details, setDetails] = useState({ user_name: "", email: "", password: "" });

  const handleSignUp = async e => {
    e.preventDefault();
    console.log(details);

    const signedUpUser = await API.signUp(details);
  }

  return (
    <div className="container">
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

            {/* confirm password */}
            <Label htmlFor='confirmPassword'>
              <div className="form">
                <FontAwesomeIcon icon="key" />
                {' '}
        Confirm Password
        </div>
            </Label>
            <Input
              id='confirmPassword'
              name='confirmPassword'
              placeholder='password'
              type='password'
            />

            {/* checkbox auth */}

            <Label>
              <Checkbox
                id='auth'
                name='auth'
              />
              I am not a Robot
            </Label>

          </Box>
        </Flex>
        {/* Signup button */}
        <Button type="submit" mr={2} onSubmit={handleSignUp}>Sign Up</Button>
      </Box>
    </div>
  )
}

export default SignUp;