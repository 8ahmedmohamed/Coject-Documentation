
import React, { useState, useEffect } from 'react'

//translation
import { useTranslation } from "react-i18next";
import i18next from 'i18next';

import coject from '../../assets/favicon.ico'

import StaticData from '../../Services/StaticData/StaticData.json';

import './Navbar.css'

interface Props {
    toggleSideMenu: boolean,
    setToggleSideMenu(toggleSideMenu: boolean): void,
    direction: string,
    setDirection(direction: string): void
}

const Navbar = (props: Props) => {
    const { t } = useTranslation();
    const [showSidebar, setShowSidebar] = useState<boolean>(false);
    const [searchData, setSearchData] = useState<string>('');
    const htmlRoot = document.querySelector("html") as HTMLElement;

    const LanguageHandling = () => {
        localStorage.LANG = localStorage.LANG === 'ar' ? 'en' : 'ar';
        props.setDirection(localStorage.LANG == "en" ? 'left' : 'right');
        htmlRoot.setAttribute("dir", localStorage.LANG === "en" ? "ltr" : "rtl");
        htmlRoot.setAttribute("lang", localStorage.LANG === "en" ? "en" : "ar");
        i18next.changeLanguage(localStorage.LANG).then();
    };

    const ChangeDirection = (dir: string) => {
        props.setDirection(dir);
        localStorage.LANG = dir === 'left' ? 'en' : 'ar';
        htmlRoot.setAttribute("dir", dir === "left" ? "ltr" : "rtl");
    };

    useEffect(() => {
        props.setDirection(localStorage.LANG == "en" ? 'left' : 'right');
        htmlRoot.setAttribute("dir", localStorage.LANG === "en" ? "ltr" : "rtl");
        htmlRoot.setAttribute("lang", localStorage.LANG === "en" ? "en" : "ar");
        i18next.changeLanguage(localStorage.LANG).then();
        const modal = document.getElementById('exampleModal');

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.ctrlKey && event.key === 'k') {
                event.preventDefault()
                modal?.classList.add('show')
                modal?.setAttribute("role", "dialog")
                modal?.setAttribute("aria-modal", "true")
                modal?.removeAttribute('aria-hidden')
            }
        };

        const handleKeyUp = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                modal?.classList.remove('show')
                modal?.removeAttribute("role")
                modal?.removeAttribute("aria-modal")
                modal?.setAttribute('aria-hidden', 'true')
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        window.addEventListener('keyup', handleKeyUp);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            window.removeEventListener('keyup', handleKeyUp);
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const items = StaticData.filter((data) => {
        if (searchData == null)
            return data
        else if (data.name.toLowerCase().includes(searchData.toLowerCase()) || data.country.toLowerCase().includes(searchData.toLowerCase())) {
            return data
        }
    }).map((data, index) => {
        return (
            <div key={index}>
                <ul>
                    <li>
                        <span style={{ paddingRight: '10px' }}>{data.name}</span>
                        <span style={{ paddingRight: '10px' }}>{data.age}</span>
                        <span style={{ paddingRight: '10px' }}>{data.country}</span>
                    </li>
                </ul>
            </div>
        )
    })

    const SearchFilter: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setSearchData(e.currentTarget.value)
    }

    return (
        <React.Fragment>
            <div className={`Navbar ${localStorage.getItem('LANG') === 'en' ? 'dirLeft' : 'dirRight'}`}>
                <nav className="navbar navbar-expand-sm">
                    <div className="container-fluid">
                        <div className='d-flex'>
                            <div className="burgerMenu">
                                <button className="navButtons" type="button" onClick={() => { props.setToggleSideMenu(!props.toggleSideMenu) }}>
                                    <i className="bi bi-list"></i>
                                </button>
                            </div>
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
                                        <button className="navButtons dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
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
                                    <div className='searchPlaceHolder'><span>{t("Search")}...</span></div>
                                    <div className='searchKey'><span>Ctrl+K</span></div>
                                </button>
                            </form>
                            <div className='navIcons'>
                                <a className="navButtons" href='https://github.com/8ahmedmohamed/Coject-Documentation'>
                                    <i className="bi bi-github"></i>
                                </a>
                                <div className='dropdown'>
                                    <button className="navButtons dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
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
                                <button className="navButtons" type="button" onClick={() => { setShowSidebar(!showSidebar); }}>
                                    <i className="bi bi-gear"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </nav>
                <div className="modal fade" id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true" style={{ display: 'none' }}>
                    <div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
                        <div className="modal-content">
                            <div className="modal-header">
                                <div><i className="bi bi-search"></i></div>
                                <input type="search" placeholder='Search...' autoFocus onChange={(e) => { SearchFilter(e) }} />
                                <button className="navButtons btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                {items}
                            </div>
                            <div className="modal-footer">
                                <div className="search"><span>Search by</span></div>
                                <div className="cojectLogo"><img src={coject} alt="Coject" /></div>
                                <div className="cojectSlogan"><span>Coject</span></div>
                            </div>
                        </div>
                    </div>
                </div>
                <aside className={`${showSidebar ? 'showSidebarContainer' : ''}`} onClick={() => { setShowSidebar(!showSidebar); }} />
                <div className={`sidebar ${showSidebar ? 'showSidebar' : ''}`}>
                    <div className="sideInner">
                        <div className="settings">
                            <div><span>Settings</span></div>
                            <button className="navButtons" type="button" onClick={() => { setShowSidebar(!showSidebar); }}>
                                <i className="bi bi-x-lg"></i>
                            </button>
                        </div>
                        <div className="content">
                            <h6>DIRECTION</h6>
                            <div className="direction">
                                <button className={`navButtons ${localStorage.getItem('LANG') === 'en' ? 'selected' : 'notSelected'}`} type="button" onClick={() => { ChangeDirection('left') }}>
                                    <i className="bi bi-arrow-return-right"></i>
                                    <span>{t('Left to Right')}</span>
                                </button>
                                <button className={`navButtons ${localStorage.getItem('LANG') === 'ar' ? 'selected' : 'notSelected'}`} type="button" onClick={() => { ChangeDirection('right') }}>
                                    <i className="bi bi-arrow-return-left"></i>
                                    <span>{t('Right to Left')}</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Navbar