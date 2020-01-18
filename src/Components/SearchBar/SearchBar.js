import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {
    render() {
        return (
            <div className="SearchBar">
                <input placeholder="Search for a country..." />
            </div>
        )
    }
}

export default SearchBar;