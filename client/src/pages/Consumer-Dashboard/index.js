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
                    <h2 className="dash">Shopping Cart</h2>
                </Button>
            </Box>
            <Box className="dashcards2">
                <Button>
                    <h2 className="dash">Your Orders</h2>
                </Button>
            </Box>
        </div>
    )
}

export default Consumer;