import React, { useState } from 'react'
import Sidebar from '../Sidebar/Sidebar';
import Navbar from '../Navbar/Navbar';

const Container = () => {
    const [toggleSideMenu, setToggleSideMenu] = useState(false);
    const [direction, setDirection] = useState('left');

    return (
        <React.Fragment>
            <Navbar toggleSideMenu={toggleSideMenu} setToggleSideMenu={setToggleSideMenu} direction={direction} setDirection={setDirection} />
            <Sidebar toggleSideMenu={toggleSideMenu} setToggleSideMenu={setToggleSideMenu} direction={direction} />
        </React.Fragment>
    )
}

export default Container
