import React from 'react';
import './Listcountries.css';
import Countries from '../Countries/Countries';

class Listcountries extends React.Component {
    render() {
        return (
          <div className="Listcountries">
                <Countries />
                <Countries />
                <Countries />
                <Countries />
        </div>
        )
    }
}

export default Listcountries;