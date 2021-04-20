import React from 'react';
import {
    Box,
    Button,
} from 'rebass';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Table from '../../components/Table.js'


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
                <Box>Table
            <Table columns={4}
                        data={[
                            "Team",
                            "Played",
                            "Goal Diff",
                            "Points",
                            "Liverpool",
                            "31",
                            "+52",
                            "76",
                            "Man City",
                            "30",
                            "+58",
                            "74"
                        ]}></Table>

                </Box>
            </Box>
        </div>
    )
}

export default Consumer;