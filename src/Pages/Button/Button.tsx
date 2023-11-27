import React, { useState, useEffect } from 'react'

import { CopyToClipboard } from 'react-copy-to-clipboard';

import { Tooltip } from 'react-tooltip'

import Editor from "@monaco-editor/react";

import './Button.css'

const Button = () => {
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

    return (
        <React.Fragment>
            <div className="Button">
                <h1>Button</h1>
                <p>Buttons allow users to take actions, and make choices, with a single tap.</p>
                <p>Buttons communicate actions that users can take. They are typically placed throughout your UI, in places like:</p>
                <ul>
                    <li>Modal windows</li>
                    <li>Forms</li>
                    <li>Cards</li>
                    <li>Toolbars</li>
                </ul>

                <h3 id="basic-button">
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
                            <button data-tooltip-id="copyToClipboard-tooltip" className='copyToClipboard'>{copyStatus ? <i className="bi bi-clipboard-check" /> : <i className="bi bi-clipboard" />}</button>
                            <Tooltip id='copyToClipboard-tooltip' place='bottom' content="Copy the source"/>
                        </div>
                    </div>
                    <div>
                        {expandCode ?
                            <div>
                                {`
                                    import * as React from 'react';
                                    import Stack from '@mui/material/Stack';
                                    import Button from '@mui/material/Button';

                                    export default function BasicButtons() {
                                        return (
                                            <Stack spacing={2} direction="row">
                                            <Button variant="text">Text</Button>
                                            <Button variant="contained">Contained</Button>
                                            <Button variant="outlined">Outlined</Button>
                                            </Stack>
                                        );
                                    }
                                `}
                            </div> :
                            <div>
                                {`
                                    <pre>
                                        <code>
                                            <button>Text</button>
                                            <button className='btn btn-primary'>Contained</button>
                                            <button className='btn btn-outline-primary'>Outlined</button>
                                        </code>
                                    </pre>
                                `}
                            </div>
                        }
                    </div>
                    <Editor className='editor'
                        height="150px"
                        defaultLanguage="javascript"
                        defaultValue="// some comment"
                    />
                </div>
            </div>
        </React.Fragment>
    )
}

export default Button