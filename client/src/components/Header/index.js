import React from 'react'
import {
    Box,
    Link,
    Flex,
    Text
} from 'rebass';
import '../styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Header() {
    return (
        <div>
            <Flex
                px={5}
                color='white'
                bg='black'
                alignItems='center'>
                <Text p={4} fontWeight='bold'>Memento Multiverse</Text>
                <Box mx='auto' />
                <Link className="navLink" variant='nav' href='/home'>
                    Shop
                </Link>
                <Link className="navLink" variant='nav' href='/login'>
                    Cart
                    <FontAwesomeIcon icon="shopping-cart" />
                </Link>
                <Link className="navLink" variant='nav' href='/login'>
                    Login
                    <FontAwesomeIcon icon="sign-in-alt" />
                </Link>
            </Flex>
        </div>
    )
}

export default Header;