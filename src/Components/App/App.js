import React from 'react';
import './App.css';
import Countries from '../Countries/Countries';
import Toolbar from '../Toolbar/Toolbar';
import SearchBar from '../SearchBar/SearchBar';

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <Toolbar />
                <main style={{ marginTop: '56px' }}></main>
                <SearchBar />
        
             <header className="App-header">
                    <h1>REST Countries API</h1>
                    <Countries />
                </header>
            </div>
        )
    }
}


export default App;
