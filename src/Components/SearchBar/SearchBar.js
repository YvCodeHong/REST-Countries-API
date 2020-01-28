import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            country:'',
        };

       this.handleCountryChange = this.handleCountryChange.bind(this);
       this.handleSearch = this.handleSearch.bind(this);
    }

    handleSearch(event) {
        this.props.searchCountries(this.state.country);
        event.preventDefault();
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