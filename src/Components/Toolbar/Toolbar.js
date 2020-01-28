import React from 'react';
import './Toolbar.css';
import Dropdownmenu from '../Dropdownmenu/Dropdownmenu';

const toolbar = props => (
    <header className="toolbar">
        <nav className="toolbar_navigation">
            <div></div>
            <div className="toolbar_logo"><a href="/">Where in the World?</a></div>
            <div className="spacer" />
            <div className="spacer" />
            <div>
                <Dropdownmenu />
            </div>
        </nav>
    </header>
)

export default toolbar;

