import React, { useState, useEffect } from 'react'

import { CopyToClipboard } from 'react-copy-to-clipboard';

import { Tooltip } from 'react-tooltip'

import Editor from "@monaco-editor/react";

import './Button.css'

interface Props {
    direction: string
}

const Button = (props: Props) => {
    const [copyToClipboard, setCopyToClipboard] = useState('');
    const [copyStatus, setCopyStatus] = useState(false);
    const [expandCode, setExpandCode] = useState(false);
    const [jsCodeSelected, setJsCodeSelected] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setCopyStatus(false)
        }, 1500);
        return () => clearTimeout(timer);
    }, [copyStatus]);

    const copyDivToClipboard = (id: string) => {
        const range = document.createRange();
        const x = document?.getElementById(id)
        x !== null && range.selectNode(x);
        window?.getSelection()?.addRange(range);
        document.execCommand("copy");
        window?.getSelection()?.removeAllRanges();
        setCopyStatus(true)
    }

    return (
        <React.Fragment>
            <div className={`Button ${props.direction == 'left' ? 'dirLeft' : 'dirRight'}`}>
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

                <input onChange={(e) => setCopyToClipboard(e.target.value)} />
                <CopyToClipboard text={copyToClipboard} onCopy={() => { setCopyStatus(true) }}>
                    <button>{copyStatus ? <i className="bi bi-clipboard-check" /> : <i className="bi bi-clipboard" />}</button>
                </CopyToClipboard>

                <div className='codeSample mt-4'>
                    <div className='preview'>
                        <button>Text</button>
                        <button className='btn btn-primary'>Contained</button>
                        <button className='btn btn-outline-primary'>Outlined</button>
                    </div>
                    <div className='optionsContainer'>
                        <div className={`codeTypes ${expandCode ? 'showCodeTypes' : 'hideCodeTypes'}`}>
                            <button className={`jsCode ${jsCodeSelected ? 'selected' : ''}`} onClick={() => { setJsCodeSelected(true) }}>JS</button>
                            <button className={`tsCode ${jsCodeSelected ? '' : 'selected'}`} onClick={() => { setJsCodeSelected(false) }}>TS</button>
                        </div>
                        <div className='options'>
                            <button className='collapsingCode' onClick={() => setExpandCode(!expandCode)}>{expandCode ? 'Collapse code' : 'Expand code'}</button>
                            <button data-tooltip-id="copyToClipboard-tooltip" className='copyToClipboard' onClick={() => copyDivToClipboard('collapsedCode')}>
                                {copyStatus ? <i className="bi bi-clipboard-check" /> : <i className="bi bi-clipboard" />}
                            </button>
                            <Tooltip id='copyToClipboard-tooltip' place='bottom' content="Copy the source" />
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
                        <button data-tooltip-id="copyCodeToClipboard-tooltip" className='copyCodeToClipboard' onClick={() => copyDivToClipboard('collapsedCode')}>
                            {copyStatus ? <i className="bi bi-clipboard2-check" /> : <i className="bi bi-clipboard2" />}
                        </button>
                        <Tooltip id='copyCodeToClipboard-tooltip' place='left' content="(or Ctrl + C)" />
                        <Editor className='editor'
                            height="150px"
                            theme="vs-dark"
                            defaultLanguage="html"
                            defaultValue="// some comment"
                        />
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
                        <div className={`codeTypes ${expandCode ? 'showCodeTypes' : 'hideCodeTypes'}`}>
                            <button className={`jsCode ${jsCodeSelected ? 'selected' : ''}`} onClick={() => { setJsCodeSelected(true) }}>JS</button>
                            <button className={`tsCode ${jsCodeSelected ? '' : 'selected'}`} onClick={() => { setJsCodeSelected(false) }}>TS</button>
                        </div>
                        <div className='options'>
                            <button className='collapsingCode' onClick={() => setExpandCode(!expandCode)}>{expandCode ? 'Collapse code' : 'Expand code'}</button>
                            <button data-tooltip-id="copyToClipboard-tooltip" className='copyToClipboard' onClick={() => copyDivToClipboard('collapsedCode2')}>
                                {copyStatus ? <i className="bi bi-clipboard-check" /> : <i className="bi bi-clipboard" />}
                            </button>
                            <Tooltip id='copyToClipboard-tooltip' place='bottom' content="Copy the source" />
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
                        {expandCode ?
                            <div className='expandedCode'>
                                {`import * as React from 'react';`}<br />
                                {`import Stack from '@mui/material/Stack';`}<br />
                                {`import Button from '@mui/material/Button';`}<br />
                                {`export default function BasicButtons() {`}<br />
                                {`return (`}<br />
                                {`<Stack spacing={2} direction="row">`}<br />
                                {`<Button variant="text">Text</Button>`}<br />
                                {`<Button variant="contained">Contained</Button>`}<br />
                                {`<Button variant="outlined">Outlined</Button>`}<br />
                                {`</Stack>`}<br />
                                {`);`}<br />
                                {`}`}
                            </div> :
                            <div id='collapsedCode2' className='collapsedCode'>
                                {`<button>Text</button>`}
                                <br />
                                {`<button className='btn btn-primary'>Contained</button>`}
                                <br />
                                {`<button className='btn btn-outline-primary'>Outlined</button>`}
                            </div>
                        }
                        <button data-tooltip-id="copyCodeToClipboard-tooltip" className='copyCodeToClipboard' onClick={() => copyDivToClipboard('collapsedCode2')}>
                            {copyStatus ? <i className="bi bi-clipboard2-check" /> : <i className="bi bi-clipboard2" />}
                        </button>
                        <Tooltip id='copyCodeToClipboard-tooltip' place='left' content="(or Ctrl + C)" />
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Button