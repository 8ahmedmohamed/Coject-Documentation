import React, { useState } from 'react'
import Sidebar from '../Sidebar/Sidebar';
import Navbar from '../Navbar/Navbar';
import ScrollToTop from "react-scroll-to-top";

import './Container.css'

const Container = () => {
    const [toggleSideMenu, setToggleSideMenu] = useState<boolean>(false);
    const [direction, setDirection] = useState<string>('left');

    return (
        <React.Fragment>
            <Navbar toggleSideMenu={toggleSideMenu} setToggleSideMenu={setToggleSideMenu} direction={direction} setDirection={setDirection} />
            <Sidebar toggleSideMenu={toggleSideMenu} setToggleSideMenu={setToggleSideMenu} direction={direction} />
            <ScrollToTop smooth className="scrollToTop" component={<i className="bi bi-caret-up-fill" />} />
        </React.Fragment>
    )
}

export default Container
