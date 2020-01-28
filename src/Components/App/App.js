import React from 'react';
import './App.css';
import Toolbar from '../Toolbar/Toolbar';
import SearchBar from '../SearchBar/SearchBar';
import Listcountries from '../Listcountries/Listcountries';


const countries = {
    imageSrc: './greatBritain.png',
    nation: 'United Kingdom',
    population: "600,000",
    region: "Europe",
    capital: "London"
};

const recordCountries = [countries, countries, countries, countries];

class App extends React.Component {
    searchCountries(country) {
        console.log(`You are searching for ${country}`);

    }
    render() {
        return (
            <div className="App">
                <Toolbar />
                    <main style={{ marginTop: '56px' }}></main>
                    <SearchBar searchCountries={this.searchCountries} />
                    <Listcountries recordCountries={recordCountries}/>
            </div>
        )
    }
}


export default App;
