import React from 'react';
import {
    Label,
    Input,
    Select,
    Radio,
    Checkbox,
} from '@rebass/forms';
import {
    Box,
    Button,
    Flex,
    Text
} from 'rebass';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Login() {
    return (
        <div className="container">
            <Box
                className="formCard"
                as='form'
                onSubmit={e => e.preventDefault()}
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
                        />
                    </Box>
                    <Label width={[1 / 2, 1 / 4]} p={2}>
                        <Checkbox
                            id='remember'
                            name='remember'
                        />
      I am not a Robot
    </Label>
                </Flex>
            </Box>

        </div>
    )
}

export default Login;