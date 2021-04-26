import React, { useState } from 'react'
import {
    Box,
    Link,
    Flex,
    Text
} from 'rebass';
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { useHistory } from 'react-router-dom';

function Header() {
    const [showMenu, setShowMenu] = useState(false)
    let menu

    if (showMenu) {
        menu = <div ClassName='menu'>
            <Link className="navLink" variant='nav' href='/shop'>
                <FontAwesomeIcon icon="home" />
                {' '}
    Shop
</Link>
            <Link className="navLink" variant='nav' href='/dashboard'>
                <FontAwesomeIcon icon="chalkboard-teacher" />
                {' '}
    Dashboard
</Link>
            <Link className="navLink" variant='nav' href='/cart'>
                <FontAwesomeIcon className="icons" icon="shopping-cart" />
                {' '}
    Cart
</Link>
            <Link className="navLink" variant='nav' href='/logout'>
                <FontAwesomeIcon icon="sign-out-alt" />
                {' '}
    Logout
</Link>
        </div>
    }


    return (
        <div>

            <Flex
                px={5}
                color='white'
                bg='black'
                alignItems='center'
                >
                <Box className="ham">
                    <FontAwesomeIcon
                    icon="bars"
                    onClick={() => setShowMenu(!showMenu)} />
                    {menu}
                </Box>
                <Text p={4} fontWeight='bold' fontSize="30px" color="#eee">Memento Multiverse</Text>
                <Box mx='auto' className="reg" alignContent="flex-end">
                <Link className="navLink" variant='nav' href='/shop'>
                    <FontAwesomeIcon icon="home" />
                    {' '}
                    Shop
                </Link>
                <Link className="navLink" variant='nav' href='/dashboard'>
                    <FontAwesomeIcon icon="chalkboard-teacher" />
                    {' '}
                    Dashboard
                </Link>
                <Link className="navLink" variant='nav' href='/cart'>
                    <FontAwesomeIcon className="icons" icon="shopping-cart" />
                    {' '}
                    Cart
                </Link>
                <Link className="navLink" variant='nav' href='/logout'>
                    <FontAwesomeIcon icon="sign-out-alt" />
                    {' '}
                    Logout
                </Link>
                </Box>
            </Flex>

            {/* <Flex
                px={5}
                color='white'
                bg='black'
                alignItems='center'>
                <Text p={4} fontWeight='bold' fontSize="30px" color="#eee">Memento Multiverse</Text>
                <Box mx='auto'/>
                <Link className="navLink" variant='nav' href='/home'>
                    <FontAwesomeIcon icon="home" />
                    {' '}
                    Shop
                </Link>
                <Link className="navLink" variant='nav' href='/login'>
                    <FontAwesomeIcon className="icons" icon="shopping-cart" />
                    {' '}
                    Cart
                </Link>
                <Link className="navLink" variant='nav' href='/login'>
                    <FontAwesomeIcon icon="sign-in-alt" />
                    {' '}
                    Login
                </Link>
            </Flex> */}
        </div>
    )
}

export default Header;