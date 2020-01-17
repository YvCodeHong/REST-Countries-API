import React from 'react';
import './Toolbar.css';

const toolbar = props => (
    <header className="toolbar">
        <nav className="toolbar_navigation">
            <div></div>
            <div className="toolbar_logo"><a href="/">Where in the World?</a></div>
            <div className="spacer" />
            <div className="spacer" />
        </nav>
    </header>
)

export default toolbar;

