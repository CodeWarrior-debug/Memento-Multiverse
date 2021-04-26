import React from 'react'
import {
    Box,
    Flex,
    Text
} from 'rebass';
import useSound from 'use-sound'
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { useHistory } from 'react-router-dom';
import {Link} from 'react-router-dom'
function Header() {
    // let history = useHistory();


    return (
        <div>

            <Flex
                px={5}
                color='white'
                bg='black'
                alignItems='center'>
                <Text p={4} fontWeight='bold' fontSize="30px" color="#eee">Memento Multiverse</Text>
                <Box mx='auto' id="nav" />
                <label for="hamburger">&#9776;</label>
                <input type="checkbox" id="hamburger" />
                <Link className="navLink" variant='nav' to='/shop'>
                <div id="hamitems">
                    <FontAwesomeIcon icon="home" />
                    {' '}
                    Shop
                </Link>
                <Link className="navLink" variant='nav' to='/dashboard'>
                    <FontAwesomeIcon icon="chalkboard-teacher" />
                    {' '}
                    Dashboard
                </Link>
                <Link className="navLink" variant='nav' to='/cart'>
                    <FontAwesomeIcon className="icons" icon="shopping-cart" />
                    {' '}
                    Cart
                </Link>
                <Link className="navLink" variant='nav' to='/logout'>
                    <FontAwesomeIcon icon="sign-out-alt" />
                    {' '}
                    Logout
                </Link>
                </div>
            </Flex>

            {/* <Flex
                px={5}
                color='white'
                bg='black'
                alignItems='center'>
                <Text p={4} fontWeight='bold' fontSize="30px" color="#eee">Memento Multiverse</Text>
                <Box mx='auto' />
                <Link className="navLink" variant='nav' to='/home'>
                <Box mx='auto' id="nav" />
                <label for="hamburger">&#9776;</label>
                <input type="checkbox" id="hamburger" />

                    <FontAwesomeIcon icon="home" />
                    {' '}
                    Shop
                </Link>
                <Link className="navLink" variant='nav' to='/login'>
                    <FontAwesomeIcon className="icons" icon="shopping-cart" />
                    {' '}
                    Cart
                </Link>
                <Link className="navLink" variant='nav' to='/login'>
                    <FontAwesomeIcon icon="sign-in-alt" />
                    {' '}
                    Login
                </Link>
            </Flex> */}
        </div>
    )
}

export default Header;