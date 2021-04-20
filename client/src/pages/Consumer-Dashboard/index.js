import React from 'react';
import {
    Box,
    Button,
} from 'rebass';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Consumer() {
    return (
        <div className="container">
            <Box className="dashcards">
               <h2 className="dash">Shopping Cart</h2>
               <p className="dash">Items in cart</p>
               <Button className="dash">Open</Button>
            </Box>
            <Box className="dashcards2">
               <h2 className="dash">Your Orders</h2>
               <Button className="dash">Open</Button>
            </Box>
            <Box className="dashcards">
               <Box>Table</Box>
            </Box>

        </div>
    )
}

export default Consumer;