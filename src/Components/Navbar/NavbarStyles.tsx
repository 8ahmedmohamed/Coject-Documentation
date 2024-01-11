import { makeStyles } from "tss-react/mui";
import { colors } from "@mui/material";

const useStyles = makeStyles()((theme) => {
    const Color = colors
    return {
        root: {
            'button': {
                border: 'none',
                background: 'transparent',
            },
            '& .bi': {
                color: Color.blue[500],
                '&::before': {
                    display: 'flex',
                    fontSize: '1.1rem',
                }
            },
            '& .MuiListItem-root': {
                display: 'list-item',
                padding: '0',
            }
        },
        dirLeft: {
            '& .logo': {
                [theme.breakpoints.down(1025)]: {
                    marginLeft: '10px',
                },
                [theme.breakpoints.up(1025)]: {
                    paddingLeft: '12px',
                    marginLeft: '4px',
                    borderLeft: '1px solid' + Color.grey[100],
                },
            },
            '& .versions': {
                '& .dropdown-menu': {
                    transform: 'translate(-20px, -20px)',
                }
            },
            '& .navIcons': {
                '& .dropdown-menu': {
                    transform: 'translate(20px, -20px)',
                    right: '0',
                    left: 'auto',
                }
            },
            '& .sideInner': {
                right: '0',
                transform: 'translateX(100%)',
                borderRadius: '10px 0px 0px 10px',
            }
        },
        dirRight: {
            '& .logo': {
                [theme.breakpoints.down(1025)]: {
                    marginRight: '10px',
                },
                [theme.breakpoints.up(1025)]: {
                    paddingRight: '12px',
                    marginRight: '4px',
                    borderRight: '1px solid' + Color.grey[100],
                },
            },
            '& .versions': {
                '& .dropdown-menu': {
                    transform: 'translate(20px, -20px)',
                    right: '0',
                }
            },
            '& .navIcons': {
                '& .dropdown-menu': {
                    transform: 'translate(-20px, -20px)',
                    left: '0',
                }
            },
            '& .sideInner': {
                left: '0',
                transform: 'translateX(-100%)',
                borderRadius: '0px 10px 10px 0px'
            }
        },
        navbar: {
            position: 'fixed',
            top: '0',
            width: '100%',
            backgroundColor: Color.common['white'] + "!important",
            borderBottom: '1px solid' + Color.grey[100],
            padding: '12px 0px',
            zIndex: '2'
        },
        burgerMenu: {
            [theme.breakpoints.down(1025)]: {
                display: 'block',
            },
            [theme.breakpoints.up(1025)]: {
                display: 'none',
            },
            '& .navButtons': {
                padding: '7px 7px',
                border: '1px solid' + Color.grey[100],
                borderRadius: '12px',
                '&:hover': {
                    backgroundColor: Color.grey[200],
                }
            }
        },
        logo: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            '& img': {
                width: '30px',
            }
        },
        versions: {
            [theme.breakpoints.down(1025)]: {
                display: 'none',
            },
            [theme.breakpoints.up(1025)]: {
                display: 'block',
            },
            '& .dropdown': {
                padding: '0px 10px',
            },
            '& .navButtons': {
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                color: Color.blue[500],
                fontSize: '0.8125rem',
                fontWeight: '600',
                position: 'relative',
                '& .bi': {
                    position: 'absolute',
                    right: '-6px',
                    top: '8px',
                    transition: '0.8s all cubic-bezier(0.23, 1, 0.32, 1)',
                    '&::before': {
                        display: 'flex',
                        fontSize: '0.5rem'
                    }
                },
                '&:hover': {
                    '& .bi': {
                        right: '-8px'
                    }
                },
                '&::after': {
                    content: 'none'
                }
            }
        },
        navTitle: {
            color: Color.blueGrey[500],
            marginLeft: '8px',
            marginBottom: '0',
            fontSize: '0.6875rem',
            fontWeight: '700',
            textTransform: 'uppercase',
            letterSpacing: '.08rem',
        },
        dropdownMenu: {
            display: 'block',
            visibility: 'hidden',
            width: '300px',
            padding: '8px 0px',
            borderRadius: '12px',
            position: 'absolute',
            overflowY: 'auto',
            opacity: '0',
            zIndex: '-5',
            transition: 'transform 1s cubic-bezier(0.23, 1, 0.32, 1) , opacity 0.2s cubic-bezier(0.23, 1, 0.32, 1) , visibility 1.5s cubic-bezier(0.23, 1, 0.32, 1)',
            '&.show': {
                opacity: '1',
                zIndex: 'auto',
                visibility: 'visible',
                transform: 'translate(0px, 5px) !important',
            },
            '& li': {
                padding: '8px 16px',
            },
            '& hr': {
                margin: '2px',
            }
        },
        dropdownMenuContent: {
            fontSize: '0.85rem'
        },
        navOptions: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        },
        lang: {
            display: 'flex',
            alignItems: 'center',
            gap: '5px',
            cursor: 'pointer',
            margin: '0 0.5rem'
        },
        navbarSearch: {
            display: 'flex',
            alignItems: 'center',
            gap: '15px',
            margin: '0 0.5rem',
            border: '1px solid' + Color.grey[100],
            borderRadius: '10px',
            backgroundColor: Color.grey[50],
            boxShadow: 'rgb(229, 234, 242) 0px 1px 1px inset, rgba(229, 234, 242, 0.6) 0px 1px 0.5px',
            '&:hover': {
                backgroundColor: Color.grey[100],
                borderColor: Color.grey[200],
            },
            [theme.breakpoints.down(1025)]: {
                padding: '7px 7px',
            },
            [theme.breakpoints.up(1025)]: {
                padding: '5px 7px',
            },
        },
        searchPlaceHolder: {
            color: Color.grey[800],
            [theme.breakpoints.down(1025)]: {
                display: 'none',
            },
            [theme.breakpoints.up(1025)]: {
                display: 'block',
            },
        },
        searchKey: {
            backgroundColor: Color.common['white'],
            border: '1px solid' + Color.grey[100],
            borderRadius: '8px',
            padding: '0px 5px',
            '& span': {
                display: 'block',
                padding: '2px 0',
                fontSize: '0.7rem',
                fontWeight: '500',
            },
            [theme.breakpoints.down(1025)]: {
                display: 'none',
            },
            [theme.breakpoints.up(1025)]: {
                display: 'flex',
                alignItems: 'center',
            },
        },
        navIcons: {
            display: 'flex',
            gap: '10px',
            '& .navButtons': {
                padding: '7px 7px',
                border: '1px solid' + Color.grey[100],
                borderRadius: '12px',
                '&:hover': {
                    backgroundColor: Color.grey[200],
                },
                '&::after': {
                    content: 'none',
                }
            },
        },
        modal: {
            backgroundColor: 'rgba(107, 122, 144, 0.2)',
            backdropFilter: 'blur(2px) brightness(200%)',
        },
        modalContent: {
            border: 'none',
        },
        modalHeader: {
            '& input': {
                width: '100%',
                padding: '0 15px',
                border: 'none',
                '&:focus-visible': {
                    outline: 'none',
                },
                '&::-webkit-search-cancel-button': {
                    display: 'none'
                },
            }
        },
        btnClose: {
            display: 'flex',
            alignItems: 'center',
            width: 'fit-content',
            borderRadius: '5px',
            backgroundColor: Color.grey[50],
            border: '1px solid' + Color.grey[200],
            padding: '2px 7px !important',
            opacity: '1',
            '&:focus': {
                boxShadow: 'none',
            },
            '&::before': {
                content: '"esc"',
                fontSize: '0.85rem',
                letterSpacing: '0.08rem',
                fontWeight: '600',
                color: Color.grey[800],
            }
        },
        modalBody: {
            '& .MuiList-root': {
                listStyle: 'disc',
                margin: '0 0 1rem',
                padding: '0 0 0 2rem',
            }
        },
        search: {
            fontSize: '.75rem',
            color: Color.blueGrey[500],
        },
        cojectLogo: {
            '& img': {
                width: '15px',
            }
        },
        cojectSlogan: {
            color: Color.blue[500],
            fontWeight: 600,
        },
        showSidebarContainer: {
            position: 'fixed',
            top: '0',
            width: '100%',
            height: '100vh',
            zIndex: '1001',
            backdropFilter: 'brightness(60%)',
            backgroundColor: 'rgba(107, 122, 144, 0.2)',
        },
        sidebar: {
            position: 'fixed',
            right: '0',
            top: '0',
            zIndex: '1002',
        },
        sideInner: {
            position: 'fixed',
            height: '100vh',
            padding: '20px 0',
            opacity: '0',
            backgroundColor: Color.common['white'],
            transition: '0.8s all cubic-bezier(0.23, 1, 0.32, 1)',
            [theme.breakpoints.down(1025)]: {
                width: '300px',
            },
            [theme.breakpoints.up(1025)]: {
                width: '360px',
            },
        },
        showSidebar: {
            '& .sideInner': {
                transform: 'translateX(0%)',
                opacity: '1',
            }
        },
        settings: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '5px 15px 15px',
            borderBottom: '1px solid' + Color.grey[100],
        },
        content: {
            padding: '0 16px',
            '& h6': {
                fontSize: '0.9rem',
                marginTop: '20px',
                color: Color.grey[800],
            }
        },
        direction: {
            display: 'flex',
            width: '100%',
            '& .navButtons': {
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '5px',
                width: '50%',
                padding: '15px',
                color: Color.blue[500],
                fontWeight: '600',
                border: '1px solid' + Color.grey[100],
                '&:hover': {
                    backgroundColor: Color.grey[200],
                },
                [theme.breakpoints.down(1025)]: {
                    padding: '10px',
                    fontSize: '0.8rem',
                },
                '& .bi': {
                    '&::before': {
                        [theme.breakpoints.down(1025)]: {
                            fontSize: '0.8rem',
                        },
                    }
                }
            }
        },
        selected: {
            borderColor: Color.blue[500] + '!important',
            borderTopLeftRadius: '12px',
            borderBottomLeftRadius: '12px',
            backgroundColor: 'rgba(0, 127, 255, 0.08) !important',
            '&:hover': {
                backgroundColor: 'rgb(194, 224, 255) !important',
            }
        },
        notSelected: {
            borderTopRightRadius: '12px',
            borderBottomRightRadius: '12px',
            borderLeft: '1px solid transparent',
        }
    }
});

export default useStyles;