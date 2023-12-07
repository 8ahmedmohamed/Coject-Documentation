import React from 'react'

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
                <div className="showSidemenuContainer" onClick={() => { props.setToggleSideMenu(!props.toggleSideMenu) }} />
            }
            <div className={`Sidemenu ${props.toggleSideMenu ? 'showSidemenu' : ''} ${props.direction === 'left' ? 'dirLeft' : 'dirRight'}`}>
                <div className="sideInner">
                    <div className='sidemenuDiscreption pb-2'>
                        <div className="logo">
                            <img src={coject} alt="Coject" />
                        </div>
                        <div className="versions">
                            <p>Coject Documention</p>
                            <div className="d-flex">
                                <div className='dropdown'>
                                    <button className="navButtons dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Material UI
                                        <i className="bi bi-caret-down-fill"></i>
                                    </button>
                                    <ul className="dropdown-menu">
                                        <li>
                                            <h5>Title 1</h5>
                                            <p>
                                                Lorem Ipsum is simply dummy text.
                                            </p>
                                        </li>
                                        <hr />
                                        <li>
                                            <h5>Title 2</h5>
                                            <p>
                                                Lorem Ipsum is simply dummy text.
                                            </p>
                                        </li>
                                        <hr />
                                        <li>
                                            <h5>Title 3</h5>
                                            <p>
                                                Lorem Ipsum is simply dummy text.
                                            </p>
                                        </li>
                                    </ul>
                                </div>
                                <div className='dropdown'>
                                    <button className="navButtons dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        v5.14.18
                                        <i className="bi bi-caret-down-fill"></i>
                                    </button>
                                    <ul className="dropdown-menu">
                                        <li>
                                            <h5>Title 1</h5>
                                            <p>
                                                Lorem Ipsum is simply dummy text.
                                            </p>
                                        </li>
                                        <hr />
                                        <li>
                                            <h5>Title 2</h5>
                                            <p>
                                                Lorem Ipsum is simply dummy text.
                                            </p>
                                        </li>
                                        <hr />
                                        <li>
                                            <h5>Title 3</h5>
                                            <p>
                                                Lorem Ipsum is simply dummy text.
                                            </p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <ul className="list-unstyled">
                        <li className="sideBarList mb-0">
                            <button className="listButton" type="button" data-bs-toggle="collapse" data-bs-target="#getting-started"
                                aria-expanded="false" aria-controls="getting-started">
                                <span className="listTitle">Getting Started</span>
                            </button>
                            <div className="listContent collapse" id="getting-started">
                                <ul className="list-unstyled">
                                    <li><button className="listItems">Installation</button></li>
                                </ul>
                            </div>
                        </li>
                        <li className="sideBarList mb-0">
                            <button className="listButton" type="button" data-bs-toggle="collapse" data-bs-target="#components"
                                aria-expanded="false" aria-controls="components">
                                <span className="listTitle">Components</span>
                            </button>
                            <div className="listContent collapse" id="components">
                            </div>
                        </li>
                        <li className="sideBarList mb-0">
                            <button className="listButton" type="button" data-bs-toggle="collapse" data-bs-target="#component-api"
                                aria-expanded="false" aria-controls="component-api">
                                <span className="listTitle">Component API</span>
                            </button>
                            <div className="listContent collapse" id="component-api">
                            <div className="listSubTitle">INPUTS</div>
                                <ul className="list-unstyled">
                                    <li><NavLink className="listItems" to={'/'} onClick={() => { props.setToggleSideMenu(!props.toggleSideMenu) }}>Button</NavLink></li>
                                    <li><NavLink className="listItems" to={'/switch'} onClick={() => { props.setToggleSideMenu(!props.toggleSideMenu) }}>Switch</NavLink></li>
                                    <li><NavLink className="listItems" to={'/checkbox'} onClick={() => { props.setToggleSideMenu(!props.toggleSideMenu) }}>Checkbox</NavLink></li>
                                    <li><NavLink className="listItems" to={'/select'} onClick={() => { props.setToggleSideMenu(!props.toggleSideMenu) }}>Select</NavLink></li>
                                    <li><NavLink className="listItems" to={'/grid'} onClick={() => { props.setToggleSideMenu(!props.toggleSideMenu) }}>Grid</NavLink></li>
                                </ul>
                            </div>
                        </li>
                        <li className="sideBarList mb-0">
                            <button className="listButton" type="button" data-bs-toggle="collapse" data-bs-target="#customization"
                                aria-expanded="false" aria-controls="customization">
                                <span className="listTitle">Customization</span>
                            </button>
                            <div className="listContent collapse" id="customization">
                                <ul className="list-unstyled">
                                    <li><button className="listItems">Theme</button></li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Sidebar
