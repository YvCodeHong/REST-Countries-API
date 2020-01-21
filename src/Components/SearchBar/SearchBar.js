import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            country:'',
        };

       this.handleCountryChange = this.handleCountryChange.bind(this);
    }

    handleCountryChange(event) {
        this.setState({ country: event.target.value});
    }

    render() {
        return (
            <div className="SearchBar">
                <input placeholder="Search for a country..." onChange={this.handleCountryChange} />
            </div>
        )
    }
}

export default SearchBar;