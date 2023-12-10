import React, { useState, useEffect } from 'react'

import { Tooltip } from 'react-tooltip'

import { Box, List, ListItem } from '@mui/material';

import "prismjs/themes/prism-funky.css";
import Prism from "prismjs";

import ButtonCodes from './ButtonCodes.json'

import './Button.css'

interface MyObject {
    [key: string]: boolean;
}

const Button = () => {
    const [copyToClipboardOutside, setCopyToClipboardOutside] = useState<boolean>(false);
    const [copyToClipboardId, setCopyToClipboardId] = useState<string>('');
    const [toastMessage, setToastMessage] = useState<boolean>(false);
    const [expandCode, setExpandCode] = useState<Array<MyObject>>([]);
    const [expandStatus, setExpandStatus] = useState<boolean>(false);
    const [jsCodeSelected, setJsCodeSelected] = useState<Array<MyObject>>([]);
    const [jsCodeStatus, setJsCodeStatus] = useState<boolean>(true);

    useEffect((): void => {
        Prism.highlightAll()
    }, [expandStatus, jsCodeStatus]);

    const ToggleCode = (id: string, type: string) => {
        const obj: MyObject = {}
        const arr = type === 'expand' ? expandCode : jsCodeSelected
        const indexOfObject = arr.findIndex(object => Object.keys(object)[0] === id);
        obj[id] = indexOfObject !== -1 ? !arr[indexOfObject][id] : true;
        indexOfObject !== -1 && arr.splice(indexOfObject, 1);
        arr.push(obj)
        if (type === 'expand') {
            setExpandCode(arr)
            setExpandStatus(!expandStatus)
        }
        else {
            setJsCodeSelected(arr)
            setJsCodeStatus(!jsCodeStatus)
        }
    }

    const GetCodeType = (id: string, type: string) => {
        if (type === 'expand') {
            if (expandCode.filter((item) => (Object.keys(item)[0] === id))[0] !== undefined)
                return expandCode.filter((item) => (Object.keys(item)[0] === id))[0][id]
        }
        else {
            if (jsCodeSelected.filter((item) => (Object.keys(item)[0] === id))[0] !== undefined)
                return jsCodeSelected.filter((item) => (Object.keys(item)[0] === id))[0][id]
        }
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            setCopyToClipboardId('');
            setToastMessage(false)
        }, 1500);
        return () => clearTimeout(timer);
    }, [copyToClipboardId, toastMessage]);

    const copyDivToClipboard = (id: string) => {
        const range = document.createRange();
        const x = document?.getElementById(id)
        x !== null && range.selectNode(x);
        window?.getSelection()?.addRange(range);
        document.execCommand("copy");
        window?.getSelection()?.removeAllRanges();
        setCopyToClipboardId(id)
    }

    return (
        <React.Fragment>
            <Box className={`Button`}>
                <h3>Button</h3>
                <p className='subTitle'>Buttons allow users to take actions, and make choices, with a single tap.</p>
                <p className='subTitle'>Buttons communicate actions that users can take. They are typically placed throughout your UI, in places like:</p>
                <List className='titleList'>
                    <ListItem>Modal windows</ListItem>
                    <ListItem>Forms</ListItem>
                    <ListItem>Cards</ListItem>
                    <ListItem>Toolbars</ListItem>
                </List>

                <h4 id="basic-button" className='exampleTitle'>
                    Basic button
                    <a className='anchorLink' href="#basic-button"><i className="bi bi-link" /></a>
                </h4>
                <p className='subTitle'>The Button comes with three variants: text (default), contained, and outlined.</p>
                <Box className='codeSample mt-4'>
                    <Box className='preview'>
                        <button>Text</button>
                        <button className='btn btn-primary'>Contained</button>
                        <button className='btn btn-outline-primary'>Outlined</button>
                    </Box>
                    <Box className='optionsContainer'>
                        <Box className={`codeTypes ${GetCodeType('code1', 'expand') ? 'showCodeTypes' : 'hideCodeTypes'}`}>
                            <button className={`jsCode ${GetCodeType('code1', 'jsTs') ? '' : 'selected'}`} onClick={() => { ToggleCode('code1', 'jsTs') }}>JS</button>
                            <button className={`tsCode ${GetCodeType('code1', 'jsTs') ? 'selected' : ''}`} onClick={() => { ToggleCode('code1', 'jsTs') }}>TS</button>
                        </Box>
                        <Box className='options'>
                            <button className='collapsingCode' onClick={() => ToggleCode('code1', 'expand')}>{GetCodeType('code1', 'expand') ? 'Collapse code' : 'Expand code'}</button>
                            <button data-tooltip-id="copyToClipboard-tooltip1" className='copyToClipboard' onClick={() => { copyDivToClipboard('code1'); setCopyToClipboardOutside(true); setToastMessage(true) }}>
                                {copyToClipboardId === 'code1' && copyToClipboardOutside ? <i className="bi bi-clipboard-check" /> : <i className="bi bi-clipboard" />}
                            </button>
                            <Tooltip id='copyToClipboard-tooltip1' place='bottom' content="Copy the source" />
                            <Box className='dropdown'>
                                <button className='copyOptionsDropdown dropdown-toggle' type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <i className="bi bi-three-dots-vertical" />
                                </button>
                                <List className="dropdown-menu">
                                    <ListItem>
                                        <a href='https://github.com/8ahmedmohamed/Coject-Documentation'>View the source on GitHub</a>
                                    </ListItem>
                                    <ListItem>
                                        <button className='p-0' onClick={() => { copyDivToClipboard('code1'); setToastMessage(true) }}>Copy link to JavaScript source</button>
                                    </ListItem>
                                    <ListItem>
                                        <button className='p-0' onClick={() => { copyDivToClipboard('code1'); setToastMessage(true) }}>Copy link to TypeScript source</button>
                                    </ListItem>
                                </List>
                            </Box>
                        </Box>
                    </Box>
                    <Box className='codeEditor'>
                        <button data-tooltip-id="copyCodeToClipboard-tooltip1" className='copyCodeToClipboard' onClick={() => { copyDivToClipboard('code1'); setCopyToClipboardOutside(false) }}>
                            {copyToClipboardId === 'code1' && !copyToClipboardOutside ? <i className="bi bi-clipboard2-check" /> : <i className="bi bi-clipboard2" />}
                        </button>
                        <Tooltip id='copyCodeToClipboard-tooltip1' place='left' content="(or Ctrl + C)" />
                        <pre>
                            <code id='code1' className={"language-html"}>
                                {GetCodeType('code1', 'expand') ? (GetCodeType('code1', 'jsTs') ? ButtonCodes['code1'].expandts : ButtonCodes['code1'].expandjs) : ButtonCodes['code1'].collapse}
                            </code>
                        </pre>
                    </Box>
                </Box>

                {toastMessage && <Box className='toastMessage'>
                    <Box className='toastChild'>
                        <span>The source code has been copied to your clipboard.</span>
                    </Box>
                </Box>}
            </Box>
        </React.Fragment>
    )
}

export default Button