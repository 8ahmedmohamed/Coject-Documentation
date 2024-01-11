
import React, { useState, useEffect } from 'react'

//translation
import { useTranslation } from "react-i18next";
import i18next from 'i18next';

import { Box, List, ListItem } from '@mui/material';

import coject from '../../assets/favicon.ico'

import StaticData from '../../Services/StaticData/StaticData.json';

import useStyles from './NavbarStyles';

import './Navbar.css'

interface Props {
    toggleSideMenu: boolean,
    setToggleSideMenu(toggleSideMenu: boolean): void,
    direction: string,
    setDirection(direction: string): void
}

const Navbar = (props: Props) => {
    const { t } = useTranslation();
    const { classes } = useStyles();
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
            <Box key={index}>
                <List>
                    <ListItem>
                        <Box component='span' sx={{ paddingRight: '10px' }}>{data.name}</Box>
                        <Box component='span' sx={{ paddingRight: '10px' }}>{data.age}</Box>
                        <Box component='span' sx={{ paddingRight: '10px' }}>{data.country}</Box>
                    </ListItem>
                </List>
            </Box>
        )
    })

    const SearchFilter: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setSearchData(e.currentTarget.value)
    }

    return (
        <React.Fragment>
            <Box className={`Navbar ${classes.root + localStorage.getItem('LANG') === 'en' ? classes.dirLeft : classes.dirRight}`}>
                <nav className={`${classes.navbar} navbar navbar-expand-sm`}>
                    <Box className="container-fluid">
                        <Box display={'flex'}>
                            <Box className={classes.burgerMenu}>
                                <button className="navButtons" type="button" onClick={() => { props.setToggleSideMenu(!props.toggleSideMenu) }}>
                                    <i className="bi bi-list"></i>
                                </button>
                            </Box>
                            <Box className={`${classes.logo} logo`}>
                                <img src={coject} alt="Coject" />
                            </Box>
                            <Box className="versions">
                                <Box component='p' className={classes.navTitle}>Coject Documention</Box>
                                <Box display={'flex'}>
                                    <Box className='dropdown'>
                                        <button className="navButtons dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            Material UI
                                            <i className="bi bi-caret-down-fill"></i>
                                        </button>
                                        <List className={`${classes.dropdownMenu} dropdown-menu`}>
                                            <ListItem>
                                                <h6>Title 1</h6>
                                                <Box component='p' className={classes.dropdownMenuContent}>
                                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                                </Box>
                                            </ListItem>
                                            <hr />
                                            <ListItem>
                                                <h6>Title 2</h6>
                                                <Box component='p' className={classes.dropdownMenuContent}>
                                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                                </Box>
                                            </ListItem>
                                            <hr />
                                            <ListItem>
                                                <h6>Title 3</h6>
                                                <Box component='p' className={classes.dropdownMenuContent}>
                                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                                </Box>
                                            </ListItem>
                                        </List>
                                    </Box>
                                    <Box className='dropdown'>
                                        <button className="navButtons dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            v5.14.18
                                            <i className="bi bi-caret-down-fill"></i>
                                        </button>
                                        <List className={`${classes.dropdownMenu} dropdown-menu`}>
                                            <ListItem>
                                                <h6>Title 1</h6>
                                                <Box component='p' className={classes.dropdownMenuContent}>
                                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                                </Box>
                                            </ListItem>
                                            <hr />
                                            <ListItem>
                                                <h6>Title 2</h6>
                                                <Box component='p' className={classes.dropdownMenuContent}>
                                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                                </Box>
                                            </ListItem>
                                            <hr />
                                            <ListItem>
                                                <h6>Title 3</h6>
                                                <Box component='p' className={classes.dropdownMenuContent}>
                                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                                </Box>
                                            </ListItem>
                                        </List>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                        <Box className={classes.navOptions}>
                            <Box className={classes.lang} onClick={LanguageHandling}>
                                <i className="bi bi-translate"></i>
                                <Box component='p' className='mb-0'>{localStorage.getItem('LANG') === 'en' ? 'English' : 'Arabic'}</Box>
                            </Box>
                            <form className="d-flex">
                                <button className={classes.navbarSearch} type='button' data-bs-toggle="modal" data-bs-target="#exampleModal">
                                    <Box><i className="bi bi-search"></i></Box>
                                    <Box className={classes.searchPlaceHolder}><Box component='span'>{t("Search")}...</Box></Box>
                                    <Box className={classes.searchKey}><Box component='span'>Ctrl+K</Box></Box>
                                </button>
                            </form>
                            <Box className='navIcons'>
                                <a className="navButtons" href='https://github.com/8ahmedmohamed/Coject-Documentation'>
                                    <i className="bi bi-github"></i>
                                </a>
                                <Box className='dropdown'>
                                    <button className="navButtons dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        <i className="bi bi-bell"></i>
                                    </button>
                                    <List className={`${classes.dropdownMenu} dropdown-menu`}>
                                        <ListItem>
                                            <h6>Title 1</h6>
                                            <Box component='p' className={classes.dropdownMenuContent}>
                                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                            </Box>
                                        </ListItem>
                                        <hr />
                                        <ListItem>
                                            <h6>Title 2</h6>
                                            <Box component='p' className={classes.dropdownMenuContent}>
                                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                            </Box>
                                        </ListItem>
                                        <hr />
                                        <ListItem>
                                            <h6>Title 3</h6>
                                            <Box component='p' className={classes.dropdownMenuContent}>
                                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                            </Box>
                                        </ListItem>
                                    </List>
                                </Box>
                                <button className="navButtons" type="button" onClick={() => { setShowSidebar(!showSidebar); }}>
                                    <i className="bi bi-gear"></i>
                                </button>
                            </Box>
                        </Box>
                    </Box>
                </nav>
                <Box className={`${classes.modal} modal fade`} id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true" style={{ display: 'none' }}>
                    <Box className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
                        <Box className={`${classes.modalContent} modal-content`}>
                            <Box className={`${classes.modalHeader} modal-header`}>
                                <Box><i className="bi bi-search"></i></Box>
                                <input type="search" placeholder='Search...' autoFocus onChange={(e) => { SearchFilter(e) }} />
                                <button className={`${classes.btnClose} navButtons btn-close`} type="button" data-bs-dismiss="modal" aria-label="Close"></button>
                            </Box>
                            <Box className={`${classes.modalBody} modal-body`}>
                                {items}
                            </Box>
                            <Box className="modal-footer">
                                <Box className={classes.search}><Box component='span'>Search by</Box></Box>
                                <Box className={classes.cojectLogo}><img src={coject} alt="Coject" /></Box>
                                <Box className={classes.cojectSlogan}><Box component='span'>Coject</Box></Box>
                            </Box>
                        </Box>
                    </Box>
                </Box>
                <aside className={`${showSidebar ? classes.showSidebarContainer : ''}`} onClick={() => { setShowSidebar(!showSidebar); }} />
                <Box className={`${classes.sidebar} ${showSidebar ? classes.showSidebar : ''}`}>
                    <Box className={`${classes.sideInner} sideInner`}>
                        <Box className={classes.settings}>
                            <Box><Box component='span'>Settings</Box></Box>
                            <button className="navButtons" type="button" onClick={() => { setShowSidebar(!showSidebar); }}>
                                <i className="bi bi-x-lg"></i>
                            </button>
                        </Box>
                        <Box className={classes.content}>
                            <h6>DIRECTION</h6>
                            <Box className={classes.direction}>
                                <button className={`navButtons ${localStorage.getItem('LANG') === 'en' ? classes.selected : classes.notSelected}`} type="button" onClick={() => { ChangeDirection('left') }}>
                                    <i className="bi bi-arrow-return-right"></i>
                                    <Box component='span'>{t('Left to Right')}</Box>
                                </button>
                                <button className={`navButtons ${localStorage.getItem('LANG') === 'ar' ? classes.selected : classes.notSelected}`} type="button" onClick={() => { ChangeDirection('right') }}>
                                    <i className="bi bi-arrow-return-left"></i>
                                    <Box component='span'>{t('Right to Left')}</Box>
                                </button>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </React.Fragment>
    )
}

export default Navbar