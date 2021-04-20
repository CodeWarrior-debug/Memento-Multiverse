import React from 'react';
import {
    Box,
    Text,
    Link,
    Flex,
    Button,
} from 'rebass';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Admin() {
    return (
        <div>
            <Flex
                px={2}
                color='white'
                bg='black'
                alignItems='center'>
                <Box />
                <Link variant='nav' href='#!'>
                    Invintory
                </Link>
                <Link variant='nav' href='#!'>
                    Sales by Francise
                </Link>
                <Link variant='nav' href='#!'>
                    All Sales
                </Link>
                <Link variant='nav' href='#!'>
                    Expenses
                </Link>
                <Link variant='nav' href='#!'>
                    Net Revenu
                </Link>
            </Flex>
        </div>
    )
}

export default Admin;