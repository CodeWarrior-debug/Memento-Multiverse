import React from 'react';
import {
    Box,
    Link,
    Flex,
    Text
} from 'rebass';
import '../styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Footer() {
    return (
    <>
    <Flex
        px={5}
        color='white'
        bg='black'
        alignItems='center'>
        <Box mx='auto' />
        <div className="centerfoot">
        <Link className="navLink" variant='nav' href='https://github.com/erenozgur98/Memento-Multiverse'>
            <FontAwesomeIcon className="footicons" icon={["fab", "github"]} size="lg" />
        </Link>
        </div>
    </Flex>
    </>
    )
}

export default Footer