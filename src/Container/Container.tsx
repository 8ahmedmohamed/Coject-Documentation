import React, { useState } from 'react'

import Sidebar from '../Components/Sidebar/Sidebar';
import Navbar from '../Components/Navbar/Navbar';
import ScrollToTop from "react-scroll-to-top";

import { Box } from '@mui/material';

// React Router
import { Outlet } from "react-router-dom";

import './Container.css'

const Container = () => {
    const [toggleSideMenu, setToggleSideMenu] = useState<boolean>(false);
    const [direction, setDirection] = useState<string>('left');

    return (
        <React.Fragment>
            <Navbar toggleSideMenu={toggleSideMenu} setToggleSideMenu={setToggleSideMenu} direction={direction} setDirection={setDirection} />
            <Box className="d-flex" style={{ marginTop: '62px' }}>
                <Sidebar toggleSideMenu={toggleSideMenu} setToggleSideMenu={setToggleSideMenu} direction={direction} />
                <Outlet/>
            </Box>
            <ScrollToTop smooth className={`scrollToTop ${direction === 'left' ? '' : 'dirRight'}`} component={<i className="bi bi-caret-up-fill" />} />
        </React.Fragment>
    )
}

export default Container
