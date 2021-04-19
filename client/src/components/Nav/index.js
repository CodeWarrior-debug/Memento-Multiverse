import React from 'react'
import { Link } from 'react-router-dom';

function index() {
    return (
        <nav>
            <Link 
                to="/"
                className=""
            >
                Shop
            </Link>   
            <Link 
                to="/login"
                className=""
            >
                Log In
            </Link>   
        </nav>
    )
}

export default index;