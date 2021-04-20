import React from 'react';
import './styles.css';

import {
    Box,
    Flex,
} from 'rebass'

const Card = ({ image, title, price, stock, sold, description }) => (
    <Box className="dashcards">
        <Flex>
            <div>
                <Box>
                    <img src={image} alt="item"></img>
                </Box>
                <Box>
                    <h1>{title}</h1>
                </Box>
                <Box>
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
                <Box>
                    <p>
                        Description:{" "}{description}
                    </p>
                </Box>
            </div>

        </Flex>
    </Box>
);

export default Card;


