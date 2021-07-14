import React, { useState } from 'react'
import {
    Box,
    Flex} from 'rebass';
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
function Header({ user, handleLogout }) {
    const [showMenu, setShowMenu] = useState(false);
    const [showMenu2, setShowMenu2] = useState(false);
    let menu2;
    let menu;


    if (showMenu) {
        menu = <div className='menu'>
            <Link className="navLink mini" variant='nav' to='/shop'>
                <FontAwesomeIcon icon="home" />
                {' '}
                Shop
            </Link>
            {/* {user.user_role === 'user' ? (
                <Link className="navLink mini" variant='nav' to='/dashboard'>
                    <FontAwesomeIcon icon="chalkboard-teacher" />
                    {' '}
                Dashboard
                </Link>
            ) : (
                <Link className="navLink mini" variant='nav' to='/admin'>
                    <FontAwesomeIcon icon="chalkboard-teacher" />
                    {' '}
                Dashboard
                </Link>
            )} */}
            <Link className="navLink mini" variant='nav' to='/cart'>
                <FontAwesomeIcon className="icons" icon="shopping-cart" />
                {' '}
                Cart
            </Link>
            <Link className="navLink mini" variant='nav' to='/' onClick={handleLogout}>
                <FontAwesomeIcon icon="sign-out-alt" />
                {' '}
                Logout
            </Link>
        </div>
    }
    if (showMenu2) {
        menu2 = <div className='menu'>
            <Link className="navLink mini" variant='nav' to='/shop'>
                <FontAwesomeIcon icon="home" />
                {' '}
                Shop
            </Link>
            <Link className="navLink mini" variant='nav' to='/cart'>
                <FontAwesomeIcon className="icons" icon="shopping-cart" />
                {' '}
                Cart
            </Link>
            <Link className="navLink mini" variant='nav' to='/login'>
                <FontAwesomeIcon icon="sign-in-alt" />
                {' '}
                Login
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
                {user.user_name ? (
                    <Box className="ham">
                        <FontAwesomeIcon
                            icon="bars"
                            onClick={() => setShowMenu(!showMenu)}
                        />
                        {menu}
                    </Box>) : (
                    <Box className="ham">
                        <FontAwesomeIcon
                            icon="bars"
                            onClick={() => setShowMenu2(!showMenu2)}
                        />
                        {menu2}
                    </Box>
                )}
                <h1 p={4} className="name" fontWeight='bold' fontSize="30px" color="#eee">Memento Multiverse</h1>
                {user.user_name ? (
                    <Box mx='auto' className="reg">
                        <Link className="navLink" variant='nav' to='/shop'>
                            <FontAwesomeIcon icon="home" />
                            {' '}
                        Shop
                    </Link>
                        {/* {user.user_role === 'user' ? (
                            <Link className="navLink mini" variant='nav' to='/dashboard'>
                                <FontAwesomeIcon icon="chalkboard-teacher" />
                                {' '}
                                Dashboard
                            </Link>
                        )  */}
                        
                        {/* (
                            <Link className="navLink mini" variant='nav' to='/admin'>
                                <FontAwesomeIcon icon="chalkboard-teacher" />
                                {' '}
                                Dashboard
                            </Link>
                        )} */}
                        <Link className="navLink" variant='nav' to='/cart'>
                            <FontAwesomeIcon className="icons" icon="shopping-cart" />
                            {' '}
                        Cart
                    </Link>
                        <Link className="navLink" variant='nav' to='/' onClick={handleLogout}>
                            <FontAwesomeIcon icon="sign-out-alt" />
                            {' '}
                        Logout
                    </Link>
                    </Box>)
                    : //ternary 2
                    (
                    <Box mx='auto' className="reg">
                        <Link className="navLink" variant='nav' to='/shop'>
                            <FontAwesomeIcon icon="home" />
                            {' '}
                            Shop
                        </Link>
                        <Link className="navLink" variant='nav' to='/cart'>
                            <FontAwesomeIcon className="icons" icon="shopping-cart" />
                            {' '}
                            Cart
                        </Link>
                        <Link className="navLink" variant='nav' to='/login'>
                            <FontAwesomeIcon icon="sign-in-alt" />
                            {' '}
                            Login
                        </Link>
                    </Box>
                )}
            </Flex>

            {/* <Flex
                px={5}
                color='white'
                bg='black'
                alignItems='center'>
                <Box className="ham">
                    <FontAwesomeIcon
                    icon="bars"
                    onClick={() => setShowMenu2(!showMenu2)} />
                    {menu2}
                </Box>
                <Text p={4} fontWeight='bold' fontSize="30px" color="#eee">Memento Multiverse</Text>
                <Box mx='auto' className="reg"/>
                <Link className="navLink" variant='nav' href='/home'>
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