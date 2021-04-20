import React from 'react';
import {
    Box,
    Text,
    Link,
    Flex,
    Button,
} from 'rebass';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AdminTable from '../../components/Admin-Table'

function Admin() {
    return (
        <div>
            <Flex>
            <AdminTable></AdminTable>
             {/* px={2}
             color='white'
             bg='black'
             alignItems='center'>
             <Box />
             <Link variant='nav' href='#!'>
             <FontAwesomeIcon icon="warehouse" /> */}
                 {' '}
                 {/* Inventory
             </Link>
             <Link variant='nav' href='#!'>
             <FontAwesomeIcon icon="chart-pie" /> */}
                 {' '}
                 {/* Sales by Franchise
             </Link>
             <Link variant='nav' href='#!'>
             <FontAwesomeIcon icon="dollar-sign" /> */}
                 {' '}
                 {/* All Sales
             </Link>
             <Link variant='nav' href='#!'>
             <FontAwesomeIcon icon="money-check" /> */}
                 {' '}
                 {/* Expenses
             </Link>
             <Link variant='nav' href='#!'>
             <FontAwesomeIcon icon="chart-line" /> */}
                 {' '}
                 {/* Net Revenu
             </Link>*/}
            </Flex> 
        </div>
    )
}

export default Admin;