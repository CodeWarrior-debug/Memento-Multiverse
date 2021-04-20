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
                <FontAwesomeIcon icon="warehouse" />
                    {' '}
                    Invintory
                </Link>
                <Link variant='nav' href='#!'>
                <FontAwesomeIcon icon="chart-pie" />
                    {' '}
                    Sales by Francise
                </Link>
                <Link variant='nav' href='#!'>
                <FontAwesomeIcon icon="dollar-sign" />
                    {' '}
                    All Sales
                </Link>
                <Link variant='nav' href='#!'>
                <FontAwesomeIcon icon="money-check" />
                    {' '}
                    Expenses
                </Link>
                <Link variant='nav' href='#!'>
                <FontAwesomeIcon icon="chart-line" />
                    {' '}
                    Net Revenu
                </Link>
            </Flex>
        </div>
    )
}

export default Admin;