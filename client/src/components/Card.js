import React from 'react';
import './styles.css';

import {
    Box,
    Flex,
    Button
} from 'rebass'

const Card = ({ image, title, price, stock, sold, description }) => (
    <Box className="biggerboot">
        <Flex>
            <div>
                <Box className="boot">
                <Box className="title">
                    <p className="display">{title}</p>
                </Box>
                <Box className="smallerboot">
                <Box className="imgs">
                    <img src={image} alt="item"></img>
                </Box>
                <Box className="toes">
                    <h3><div>
                        Price:{" "}{price}
                    </div>
                        <div>
                            Stock:{" "}{stock}
                        </div>
                        <div>
                            Sold:{" "}{sold}
                        </div>
                    </h3>
                </Box>
                </Box>
                </Box>
            </div>

        </Flex>
    </Box>
);

export default Card;


