
import React, { useState, useEffect } from 'react'

//translation
import { useTranslation } from "react-i18next";
import i18next from 'i18next';

import './Navbar.css'

const Navbar = () => {
    const { t } = useTranslation();
    const [Language, setLanguage] = useState(localStorage.LANG || "ar");

    const LanguageHandling = () => {
        if (Language === 'ar') {
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
        const htmlRoot = document.querySelector("html") as HTMLElement;
        htmlRoot.setAttribute("dir", Language === "en" ? "ltr" : "rtl");
        htmlRoot.setAttribute("lang", Language === "en" ? "en" : "ar");
        i18next.changeLanguage(Language).then();
    }, [Language]);

    return (
        <React.Fragment>
            <div className="Navbar">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">Navbar</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Link</a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Dropdown
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li><a className="dropdown-item" href="#">Action</a></li>
                                        <li><a className="dropdown-item" href="#">Another action</a></li>
                                        <li><hr className="dropdown-divider" /></li>
                                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link disabled" href="#" aria-disabled="true">Disabled</a>
                                </li>
                            </ul>
                            <div className='lang mx-2' onClick={LanguageHandling}>
                                <div><i className="bi bi-translate"></i></div>
                                <div>{localStorage.getItem('LANG') === 'ar' ? 'Arabic' : 'English'}</div>
                            </div>
                            <form className="d-flex">
                                <button className="navbarSearch mx-2" type='button' data-bs-toggle="modal" data-bs-target="#exampleModal">
                                    <div><i className="bi bi-search"></i></div>
                                    <div><span>{t("Search")}...</span></div>
                                    <div className='searchKey'><span>Ctrl+K</span></div>
                                </button>
                                {/* <button className="btn btn-outline-success" type="submit">Search</button> */}
                            </form>
                        </div>
                        <div className='navIcons'>
                            <button>
                                <i className="bi bi-github"></i>
                            </button>
                            <button>
                                <i className="bi bi-bell"></i>
                            </button>
                            <button>
                                <i className="bi bi-gear"></i>
                            </button>
                        </div>
                    </div>
                </nav>

            </div>
            <div className="modal fade" id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            ...
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Navbar