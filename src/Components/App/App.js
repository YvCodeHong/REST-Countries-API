import React from 'react';
import './App.css';
import Toolbar from '../Toolbar/Toolbar';
import SearchBar from '../SearchBar/SearchBar';
import Listcountries from '../Listcountries/Listcountries';


class App extends React.Component {
    render() {
        return (
            <div className="App">
                <Toolbar />
                    <main style={{ marginTop: '56px' }}></main>
                    <SearchBar />
                    <Listcountries />
            </div>
        )
    }
}


export default App;
