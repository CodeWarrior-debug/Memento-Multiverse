import React from 'react';
import './style.css';
import { useHistory } from 'react-router-dom';
import {
    Box,
    Flex
} from 'rebass'

const Card = ({ image_link, product_name, fake_price, fake_quantity, fake_sold, id}) => {
    const history = useHistory()
    const redirect = () => {
        history.push(`/products/${id}`)
    }
    return (
        <Box className="biggerboot" onClick={redirect}>
            <Flex>
                <div>
                    <Box className="boot">
                        <Box className="title display">
                            {product_name}
                        </Box>
                        <Box className="smallerboot">
                            <Box className="imgs">
                                <img src={image_link !== "-" ? image_link : "https://via.placeholder.com/160" } 
                                style={{ maxHeight: 160 }} alt="item"></img>
                            </Box>
                            <Box className="toes">
                                <h3><div className="minidisplay">
                                    Price:{" "}{new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'}).format(fake_price)}
                                </div>
                                    <div className="minidisplay">
                                        Stock:{" "}{new Intl.NumberFormat().format(fake_quantity)}
                                    </div>
                                    <div className="minidisplay">
                                        Sold:{" "}{new Intl.NumberFormat().format(fake_sold)}
                                    </div>
                                </h3>
                            </Box>
                        </Box>
                    </Box>
                </div>

            </Flex>
        </Box>
    )
};

export default Card;


