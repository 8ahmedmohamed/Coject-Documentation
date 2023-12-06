import React, { useState, useEffect } from 'react'

import { Tooltip } from 'react-tooltip'

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
    }, [expandStatus,jsCodeStatus]);

    const ToggleCode = (id: string) => {
        const obj: MyObject = {}
        const arr = expandCode
        const indexOfObject = arr.findIndex(object => Object.keys(object)[0] === id);
        obj[id] = indexOfObject !== -1 ? !arr[indexOfObject][id] : true;
        indexOfObject !== -1 && arr.splice(indexOfObject, 1);
        arr.push(obj)
        setExpandCode(arr)
        setExpandStatus(!expandStatus)
    }

    const ToggleJsCode = (id: string) => {
        const obj: MyObject = {}
        const arr = jsCodeSelected
        const indexOfObject = arr.findIndex(object => Object.keys(object)[0] === id);
        obj[id] = indexOfObject !== -1 ? !arr[indexOfObject][id] : true;
        indexOfObject !== -1 && arr.splice(indexOfObject, 1);
        arr.push(obj)
        setJsCodeSelected(arr)
        setJsCodeStatus(!jsCodeStatus)
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
            <div className={`Button`}>
                <h1>Button</h1>
                <p>Buttons allow users to take actions, and make choices, with a single tap.</p>
                <p>Buttons communicate actions that users can take. They are typically placed throughout your UI, in places like:</p>
                <ul>
                    <li>Modal windows</li>
                    <li>Forms</li>
                    <li>Cards</li>
                    <li>Toolbars</li>
                </ul>

                <h3 id="basic-button" className='exampleTitle'>
                    Basic button
                    <a className='anchorLink' href="#basic-button"><i className="bi bi-link" /></a>
                </h3>
                <p>The <span>Button</span> comes with three variants: text (default), contained, and outlined.</p>
                <div className='codeSample mt-4'>
                    <div className='preview'>
                        <button>Text</button>
                        <button className='btn btn-primary'>Contained</button>
                        <button className='btn btn-outline-primary'>Outlined</button>
                    </div>
                    <div className='optionsContainer'>
                        <div className={`codeTypes ${expandCode.filter((item) => (Object.keys(item)[0] === 'code1'))[0] !== undefined &&
                            expandCode.filter((item) => (Object.keys(item)[0] === 'code1'))[0]['code1'] ? 'showCodeTypes' : 'hideCodeTypes'}`}>
                            <button className={`jsCode ${jsCodeSelected.filter((item) => (Object.keys(item)[0] === 'code1'))[0] !== undefined &&
                                jsCodeSelected.filter((item) => (Object.keys(item)[0] === 'code1'))[0]['code1'] ? '' : 'selected'}`} onClick={() => { ToggleJsCode('code1') }}>JS</button>
                            <button className={`tsCode ${jsCodeSelected.filter((item) => (Object.keys(item)[0] === 'code1'))[0] !== undefined &&
                                jsCodeSelected.filter((item) => (Object.keys(item)[0] === 'code1'))[0]['code1'] ? 'selected' : ''}`} onClick={() => { ToggleJsCode('code1') }}>TS</button>
                        </div>
                        <div className='options'>
                            <button className='collapsingCode' onClick={() => ToggleCode('code1')}>{expandCode.filter((item) => (Object.keys(item)[0] === 'code1'))[0] !== undefined &&
                                expandCode.filter((item) => (Object.keys(item)[0] === 'code1'))[0]['code1'] ? 'Collapse code' : 'Expand code'}</button>
                            <button data-tooltip-id="copyToClipboard-tooltip1" className='copyToClipboard' onClick={() => { copyDivToClipboard('code1'); setCopyToClipboardOutside(true); setToastMessage(true) }}>
                                {copyToClipboardId === 'code1' && copyToClipboardOutside ? <i className="bi bi-clipboard-check" /> : <i className="bi bi-clipboard" />}
                            </button>
                            <Tooltip id='copyToClipboard-tooltip1' place='bottom' content="Copy the source" />
                            <div className='dropdown'>
                                <button className='copyOptionsDropdown dropdown-toggle' type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <i className="bi bi-three-dots-vertical" />
                                </button>
                                <ul className="dropdown-menu">
                                    <li>
                                        <a href='https://github.com/8ahmedmohamed/Coject-Documentation'>View the source on GitHub</a>
                                    </li>
                                    <li>
                                        <button className='p-0'>Copy link to JavaScript source</button>
                                    </li>
                                    <li>
                                        <button className='p-0'>Copy link to TypeScript source</button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='codeEditor'>
                        <button data-tooltip-id="copyCodeToClipboard-tooltip1" className='copyCodeToClipboard' onClick={() => { copyDivToClipboard('code1'); setCopyToClipboardOutside(false) }}>
                            {copyToClipboardId === 'code1' && !copyToClipboardOutside ? <i className="bi bi-clipboard2-check" /> : <i className="bi bi-clipboard2" />}
                        </button>
                        <Tooltip id='copyCodeToClipboard-tooltip1' place='left' content="(or Ctrl + C)" />
                        <pre>
                            <code id='code1' className={"language-html"}>
                                {expandCode.filter((item) => (Object.keys(item)[0] === 'code1'))[0] !== undefined &&
                                    expandCode.filter((item) => (Object.keys(item)[0] === 'code1'))[0]['code1'] ? 
                                    (jsCodeSelected.filter((item) => (Object.keys(item)[0] === 'code1'))[0] !== undefined &&
                                    jsCodeSelected.filter((item) => (Object.keys(item)[0] === 'code1'))[0]['code1'] ? ButtonCodes['code1'].expandts : ButtonCodes['code1'].expandjs) : 
                                    ButtonCodes['code1'].collapse}
                            </code>
                        </pre>
                    </div>
                </div>

                <h3 id="text-button" className='exampleTitle'>
                    Text button
                    <a className='anchorLink' href="#text-button"><i className="bi bi-link" /></a>
                </h3>
                <p>
                    <a href="">Text buttons</a> are typically used for less-pronounced actions, including those located: in dialogs, in cards. In cards,
                    text buttons help maintain an emphasis on card content.
                </p>
                <div className='codeSample mt-4'>
                    <div className='preview'>
                        <button type="button" className="btn btn-secondary" disabled>Button</button>
                        <button type="button" className="btn btn-outline-primary" disabled>Primary button</button>
                        <button type="button" className="btn btn-outline-secondary" disabled>Button</button>
                    </div>
                    <div className='optionsContainer'>
                        <div className={`codeTypes ${expandCode.filter((item) => (Object.keys(item)[0] === 'code2'))[0] !== undefined &&
                            expandCode.filter((item) => (Object.keys(item)[0] === 'code2'))[0]['code2'] ? 'showCodeTypes' : 'hideCodeTypes'}`}>
                            <button className={`jsCode ${jsCodeSelected.filter((item) => (Object.keys(item)[0] === 'code2'))[0] !== undefined &&
                                jsCodeSelected.filter((item) => (Object.keys(item)[0] === 'code2'))[0]['code2'] ? '' : 'selected'}`} onClick={() => { ToggleJsCode('code2') }}>JS</button>
                            <button className={`tsCode ${jsCodeSelected.filter((item) => (Object.keys(item)[0] === 'code2'))[0] !== undefined &&
                                jsCodeSelected.filter((item) => (Object.keys(item)[0] === 'code2'))[0]['code2'] ? 'selected' : ''}`} onClick={() => { ToggleJsCode('code2') }}>TS</button>
                        </div>
                        <div className='options'>
                            <button className='collapsingCode' onClick={() => ToggleCode('code2')}>{expandCode.filter((item) => (Object.keys(item)[0] === 'code2'))[0] !== undefined &&
                                expandCode.filter((item) => (Object.keys(item)[0] === 'code2'))[0]['code2'] ? 'Collapse code' : 'Expand code'}</button>
                            <button data-tooltip-id="copyToClipboard-tooltip2" className='copyToClipboard' onClick={() => { copyDivToClipboard('code2'); setCopyToClipboardOutside(true); setToastMessage(true) }}>
                                {copyToClipboardId === 'code2' && copyToClipboardOutside ? <i className="bi bi-clipboard-check" /> : <i className="bi bi-clipboard" />}
                            </button>
                            <Tooltip id='copyToClipboard-tooltip2' place='bottom' content="Copy the source" />
                            <div className='dropdown'>
                                <button className='copyOptionsDropdown dropdown-toggle' type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <i className="bi bi-three-dots-vertical" />
                                </button>
                                <ul className="dropdown-menu">
                                    <li>
                                        <a href='https://github.com/8ahmedmohamed/Coject-Documentation'>View the source on GitHub</a>
                                    </li>
                                    <li>
                                        <button className='p-0'>Copy link to JavaScript source</button>
                                    </li>
                                    <li>
                                        <button className='p-0'>Copy link to TypeScript source</button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='codeEditor'>
                        <button data-tooltip-id="copyCodeToClipboard-tooltip2" className='copyCodeToClipboard' onClick={() => { copyDivToClipboard('code2'); setCopyToClipboardOutside(false) }}>
                            {copyToClipboardId === 'code2' && !copyToClipboardOutside ? <i className="bi bi-clipboard2-check" /> : <i className="bi bi-clipboard2" />}
                        </button>
                        <Tooltip id='copyCodeToClipboard-tooltip2' place='left' content="(or Ctrl + C)" />
                        <pre>
                            <code id='code2' className={"language-html"}>
                                {expandCode.filter((item) => (Object.keys(item)[0] === 'code2'))[0] !== undefined &&
                                    expandCode.filter((item) => (Object.keys(item)[0] === 'code2'))[0]['code2'] ? 
                                    (jsCodeSelected.filter((item) => (Object.keys(item)[0] === 'code2'))[0] !== undefined &&
                                    jsCodeSelected.filter((item) => (Object.keys(item)[0] === 'code2'))[0]['code2'] ? ButtonCodes['code2'].expandts : ButtonCodes['code2'].expandjs) : 
                                    ButtonCodes['code2'].collapse}
                            </code>
                        </pre>
                    </div>
                </div>

                {toastMessage && <div className='toastMessage'>
                    <div className='toastChild'>
                        <span>The source code has been copied to your clipboard.</span>
                    </div>
                </div>}
            </div>
        </React.Fragment>
    )
}

export default Button