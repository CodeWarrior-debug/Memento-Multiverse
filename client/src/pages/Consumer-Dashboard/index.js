import React from 'react';
import {
    Box,
    Button,
} from 'rebass';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Table from '../../components/Table.js'
import './style.css'


function Consumer() {
    return (
        <div className="container">
            <Box className="dashcards">
                <Button>
                    <h2><a className="dash" href="/cart">Shopping Cart</a></h2>
                </Button>
            </Box>
            <Box className="dashcards2">
                <Button>
                    <h2><a className="dash" href="/">Your Orders</a></h2>
                </Button>
            </Box>
        </div>
    )
}

export default Consumer;