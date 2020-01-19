import React from 'react';
import './App.css';
import Toolbar from '../Toolbar/Toolbar';
import SearchBar from '../SearchBar/SearchBar';
import Countries from '../Countries/Countries';


class App extends React.Component {
    render() {
        return (
            <div className="App">
                <Toolbar />
                    <main style={{ marginTop: '56px' }}></main>
                    <SearchBar />
                    <Countries />
            </div>
        )
    }
}


export default App;
