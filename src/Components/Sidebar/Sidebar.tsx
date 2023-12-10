import React from 'react'

import { Box, List, ListItem } from '@mui/material';

import coject from '../../assets/favicon.ico'

//React Router
import { NavLink } from 'react-router-dom';

import './Sidebar.css'

interface Props {
    toggleSideMenu: boolean,
    setToggleSideMenu(toggleSideMenu: boolean): void,
    direction: string
}

const Sidebar = (props: Props) => {
    return (
        <React.Fragment>
            {props.toggleSideMenu &&
                <Box className="showSidemenuContainer" onClick={() => { props.setToggleSideMenu(!props.toggleSideMenu) }} />
            }
            <Box className={`Sidemenu ${props.toggleSideMenu ? 'showSidemenu' : ''} ${props.direction === 'left' ? 'dirLeft' : 'dirRight'}`}>
                <Box className="sideInner">
                    <Box className='sidemenuDiscreption pb-2'>
                        <Box className="logo">
                            <img src={coject} alt="Coject" />
                        </Box>
                        <Box className="versions">
                            <p>Coject Documention</p>
                            <Box className="d-flex">
                                <Box className='dropdown'>
                                    <button className="navButtons dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Material UI
                                        <i className="bi bi-caret-down-fill"></i>
                                    </button>
                                    <List className="dropdown-menu">
                                        <ListItem>
                                            <h5>Title 1</h5>
                                            <p>Lorem Ipsum is simply dummy text.</p>
                                        </ListItem>
                                        <hr />
                                        <ListItem>
                                            <h5>Title 2</h5>
                                            <p>Lorem Ipsum is simply dummy text.</p>
                                        </ListItem>
                                        <hr />
                                        <ListItem>
                                            <h5>Title 3</h5>
                                            <p>Lorem Ipsum is simply dummy text.</p>
                                        </ListItem>
                                    </List>
                                </Box>
                                <Box className='dropdown'>
                                    <button className="navButtons dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        v5.14.18
                                        <i className="bi bi-caret-down-fill"></i>
                                    </button>
                                    <List className="dropdown-menu">
                                        <ListItem>
                                            <h5>Title 1</h5>
                                            <p>Lorem Ipsum is simply dummy text.</p>
                                        </ListItem>
                                        <hr />
                                        <ListItem>
                                            <h5>Title 2</h5>
                                            <p>Lorem Ipsum is simply dummy text.</p>
                                        </ListItem>
                                        <hr />
                                        <ListItem>
                                            <h5>Title 3</h5>
                                            <p>Lorem Ipsum is simply dummy text.</p>
                                        </ListItem>
                                    </List>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                    <List className="list-unstyled">
                        <ListItem className="sideBarList mb-0">
                            <button className="listButton" type="button" data-bs-toggle="collapse" data-bs-target="#getting-started"
                                aria-expanded="false" aria-controls="getting-started">
                                <span className="listTitle">Getting Started</span>
                            </button>
                            <Box className="listContent collapse" id="getting-started">
                                <List className="list-unstyled">
                                    <ListItem><button className="listItems">Installation</button></ListItem>
                                </List>
                            </Box>
                        </ListItem>
                        <ListItem className="sideBarList mb-0">
                            <button className="listButton" type="button" data-bs-toggle="collapse" data-bs-target="#components"
                                aria-expanded="false" aria-controls="components">
                                <span className="listTitle">Components</span>
                            </button>
                            <Box className="listContent collapse" id="components">
                            </Box>
                        </ListItem>
                        <ListItem className="sideBarList mb-0">
                            <button className="listButton" type="button" data-bs-toggle="collapse" data-bs-target="#component-api"
                                aria-expanded="false" aria-controls="component-api">
                                <span className="listTitle">Component API</span>
                            </button>
                            <Box className="listContent collapse" id="component-api">
                                <Box className="listSubTitle">INPUTS</Box>
                                <List className="list-unstyled">
                                    <ListItem><NavLink className="listItems" to={'/'} onClick={() => { props.setToggleSideMenu(!props.toggleSideMenu) }}>Button</NavLink></ListItem>
                                    <ListItem><NavLink className="listItems" to={'/switch'} onClick={() => { props.setToggleSideMenu(!props.toggleSideMenu) }}>Switch</NavLink></ListItem>
                                    <ListItem><NavLink className="listItems" to={'/checkbox'} onClick={() => { props.setToggleSideMenu(!props.toggleSideMenu) }}>Checkbox</NavLink></ListItem>
                                    <ListItem><NavLink className="listItems" to={'/select'} onClick={() => { props.setToggleSideMenu(!props.toggleSideMenu) }}>Select</NavLink></ListItem>
                                    <ListItem><NavLink className="listItems" to={'/grid'} onClick={() => { props.setToggleSideMenu(!props.toggleSideMenu) }}>Grid</NavLink></ListItem>
                                </List>
                            </Box>
                        </ListItem>
                        <ListItem className="sideBarList mb-0">
                            <button className="listButton" type="button" data-bs-toggle="collapse" data-bs-target="#customization"
                                aria-expanded="false" aria-controls="customization">
                                <span className="listTitle">Customization</span>
                            </button>
                            <Box className="listContent collapse" id="customization">
                                <List className="list-unstyled">
                                    <ListItem><button className="listItems">Theme</button></ListItem>
                                </List>
                            </Box>
                        </ListItem>
                    </List>
                </Box>
            </Box>
        </React.Fragment>
    )
}

export default Sidebar
