
import React, { useState, useEffect } from 'react'

//translation
import { useTranslation } from "react-i18next";
import i18next from 'i18next';

import coject from '../../assets/favicon.ico'

import './Navbar.css'

const Navbar = () => {
    const { t } = useTranslation();
    const [language, setLanguage] = useState(localStorage.LANG || "ar");
    const [direction, setDirection] = useState('left');
    const [showSidebar, setShowSidebar] = useState(false);

    const toggleSidebar = () => {
        setShowSidebar(!showSidebar);
    };

    const LanguageHandling = () => {
        if (language === 'ar') {
            setLanguage('en')
            localStorage.LANG = 'en';
        } else {
            setLanguage('ar');
            localStorage.LANG = 'ar';
        }
    };

    useEffect(() => {
        if (!localStorage.LANG) {
            localStorage.LANG = "ar";
        }
        setDirection(localStorage.LANG == "en" ? 'left' : 'right');
        const htmlRoot = document.querySelector("html") as HTMLElement;
        htmlRoot.setAttribute("dir", language === "en" ? "ltr" : "rtl");
        htmlRoot.setAttribute("lang", language === "en" ? "en" : "ar");
        i18next.changeLanguage(language).then();
    }, [language]);

    const ChangeDirection = (dir: string) => {
        setDirection(dir);
        const htmlRoot = document.querySelector("html") as HTMLElement;
        htmlRoot.setAttribute("dir", dir === "left" ? "ltr" : "rtl");
        LanguageHandling();
    }

    return (
        <React.Fragment>
            <div className="Navbar">
                <nav className="navbar navbar-expand-sm">
                    <div className="container-fluid">
                        <div className='d-flex'>
                            <div className="logo">
                                {/* <a className="navbar-brand" href="#">Navbar</a> */}
                                <img src={coject} alt="Coject" />
                            </div>
                            <div className="versions d-none d-md-block">
                                <p>Coject Documention</p>
                                <div className="d-flex">
                                    <div className='dropdown'>
                                        <button className="dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            Material UI
                                            <i className="bi bi-caret-down-fill"></i>
                                        </button>
                                        <ul className="dropdown-menu">
                                            <li>
                                                <h5>Title 1</h5>
                                                <p>
                                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                                </p>
                                            </li>
                                            <hr />
                                            <li>
                                                <h5>Title 2</h5>
                                                <p>
                                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                                </p>
                                            </li>
                                            <hr />
                                            <li>
                                                <h5>Title 3</h5>
                                                <p>
                                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                                </p>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className='dropdown'>
                                        <button className="dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            v5.14.18
                                            <i className="bi bi-caret-down-fill"></i>
                                        </button>
                                        <ul className="dropdown-menu">
                                            <li>
                                                <h5>Title 1</h5>
                                                <p>
                                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                                </p>
                                            </li>
                                            <hr />
                                            <li>
                                                <h5>Title 2</h5>
                                                <p>
                                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                                </p>
                                            </li>
                                            <hr />
                                            <li>
                                                <h5>Title 3</h5>
                                                <p>
                                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                                </p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="navOptions">
                            <div className='lang mx-2' onClick={LanguageHandling}>
                                <div><i className="bi bi-translate"></i></div>
                                <div>{localStorage.getItem('LANG') === 'ar' ? 'Arabic' : 'English'}</div>
                            </div>
                            <form className="d-flex">
                                <button className="navbarSearch mx-2" type='button' data-bs-toggle="modal" data-bs-target="#exampleModal">
                                    <div><i className="bi bi-search"></i></div>
                                    <div className='d-none d-md-block'><span>{t("Search")}...</span></div>
                                    <div className='searchKey d-none d-md-block'><span>Ctrl+K</span></div>
                                </button>
                            </form>
                            <div className='navIcons'>
                                <a type="button" href='https://github.com/8ahmedmohamed/Coject-Documentation'>
                                    <i className="bi bi-github"></i>
                                </a>
                                <div className='dropdown'>
                                    <button className="dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        <i className="bi bi-bell"></i>
                                    </button>
                                    <ul className="dropdown-menu">
                                        <li>
                                            <h5>Title 1</h5>
                                            <p>
                                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                            </p>
                                        </li>
                                        <hr />
                                        <li>
                                            <h5>Title 2</h5>
                                            <p>
                                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                            </p>
                                        </li>
                                        <hr />
                                        <li>
                                            <h5>Title 3</h5>
                                            <p>
                                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                            </p>
                                        </li>
                                    </ul>
                                </div>
                                <button type="button" onClick={toggleSidebar}>
                                    <i className="bi bi-gear"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </nav>
                <div className="modal fade" id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
                        <div className="modal-content">
                            <div className="modal-header">
                                <div><i className="bi bi-search"></i></div>
                                <input type="search" name="" id="" placeholder='Search...' />
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                ...
                            </div>
                            <div className="modal-footer">
                                <div className="search"><span>Search by</span></div>
                                <div className="cojectLogo"><img src={coject} alt="Coject" /></div>
                                <div className="cojectSlogan"><span>Coject</span></div>
                            </div>
                        </div>
                    </div>
                </div>
                <aside className={`${showSidebar ? 'show-sidebar sidebar' : 'sidebar'}`}>
                    <div className={`side-inner ${direction == 'left' ? 'rightSideBar' : 'leftSideBar'}`}>
                        <div className="settings">
                            <div><span>Settings</span></div>
                            <button type="button" onClick={toggleSidebar}>
                                <i className="bi bi-x-lg"></i>
                            </button>
                        </div>
                        <div className="content">
                            <h6>DIRECTION</h6>
                            <div className="language">
                                <button className={`${direction == 'left' ? 'selected' : 'notSelected'}`} type="button" onClick={() => { ChangeDirection('left') }}>
                                    <i className="bi bi-arrow-return-right"></i>
                                    <span>{t('Left to Right')}</span>
                                </button>
                                <button className={`${direction === 'right' ? 'selected' : 'notSelected'}`} type="button" onClick={() => { ChangeDirection('right') }}>
                                    <i className="bi bi-arrow-return-left"></i>
                                    <span>{t('Right to Left')}</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </aside>
            </div>
        </React.Fragment>
    )
}

export default Navbar