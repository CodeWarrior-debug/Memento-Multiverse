import {
    Box,
    Checkbox,
    Button
  } from '@rebass/forms';

import { Label, Input } from '@rebass/forms' 
import React from 'react'


function SignUp() {
    return (
    <div>
    {/* Form with username, email, password, confirm password, checkbox for auth and signup button */}

    {/* username */}
        <Box
            as='form'
            onSubmit={e => e.preventDefault()}
            py={3}>
                <Box width={1/2} px={2}>
                <Label htmlFor='name'>Name</Label>
                <Input
                    id='name'
                    name='name'
                    defaultValue='Name'
                />

    {/* email */}
    <Box>
        <Label htmlFor='email'>Email</Label>
        <Input
            id='email'
            name='email'
            type='email'
            placeholder='jane@example.com'
        />
    </Box>

    {/* password */}
    <Box width={1/2} px={2}>
      <Label htmlFor='password'>Password</Label>
      <Input
        id='password'
        name='password'
        defaultValue='Password'
      />
    </Box>

    {/* confirm password */}
    <Box width={1/2} px={2}>
      <Label htmlFor='confirmPassword'>Confirm Password</Label>
      <Input
        id='confirmPassword'
        name='confirmPassword'
        defaultValue='Password'
      />
    </Box>

    {/* checkbox auth */}
    <Box>
        <Label>
            <Checkbox
                id='remember'
                name='remember'
            />
    Remember me
  </Label>
</Box>

    {/* Signup button */}
    <Button variant='outline' mr={2}>Sign Up</Button>
            </Box>
        </Box>
    </div>
    )
}

export default SignUp;