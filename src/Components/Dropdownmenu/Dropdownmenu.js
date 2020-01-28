import React from 'react';
import './Dropdownmenu.css';

//showDropdownMenu: This method helps to display the dropdown menu content.
// hideDropdownMenu: This method helps to hide the dropdown menu content. 

class Dropdownmenu extends React.Component {
    render() {
        return (
            <div className="dropdownmenu">
                <div className="button">
                    <ul>
                        <li><a className="active" href="#Africa">Africa</a></li>
                        <li><a href="America">"America"</a></li>
                        <li><a href="Asia">"Asia"</a></li>
                        <li><a href="Europe">"Europe</a></li>
                        <li><a href="Oceania">"Oceania</a></li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Dropdownmenu;