import React, { useState } from 'react'
import {
  Box,
  Flex,
  Button
} from 'rebass';

import { Label, Input, Checkbox } from '@rebass/forms'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function SignUp({ SignUp }) {
  const [details, setDetails] = useState({username: "", email: "", password: ""});

  const handleSignUp = e => {
    e.preventDefault();

    SignUp(details);
  }


  return (
    <div className="container">
      {/* Form with username, email, password, confirm password, checkbox for auth and signup button */}

      {/* username */}
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
              onChange={e => setDetails({ ...details, username: e.target.value })}
              value={details.username}
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