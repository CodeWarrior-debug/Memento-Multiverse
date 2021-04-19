import React from 'react'
import {
    Box,
    Link,
    Flex,
    Text
  } from 'rebass';
  import '../styles.css';

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
                    <p className="navLink">Shop</p>
                </Link>
                <Link className="navLink" variant='nav' href='/login'>
                    Login
                </Link>
            </Flex>
        </div>
    )
}

export default Header;