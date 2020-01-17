import React from 'react';
import './App.css';
import Countries from '../Countries/Countries';

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1>REST Countries API</h1>
                    <Countries />
                </header>
            </div>
        )
    }
}


export default App;
