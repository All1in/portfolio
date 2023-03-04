import React, {useEffect, useState} from 'react';
import { Link, useLocation } from 'react-router-dom'
import ReorderIcon from '@material-ui/icons/Reorder'
import './Navbar.css'

const Navbar = () => {
    const [expandNavbar, setExpandNavbar] = useState(false)
    const location = useLocation()
    const changeSize = () => setExpandNavbar(!expandNavbar)

    // console.log('location', location)

    useEffect(() => {
        setExpandNavbar(false)
    }, [location]);

    return (
        <div className='navbar' id={expandNavbar ? 'open' : 'close'}>
            <div className='toggleButton'>
                <button onClick={changeSize}>
                    <ReorderIcon />
                </button>
            </div>
            <div className='links'>
                <Link to='/'> Home </Link>
                <Link to='/projects'> Projects </Link>
                <Link to='/experience'> Experience </Link>
            </div>
        </div>
    );
};

export default Navbar;
